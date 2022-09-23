import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
    Input,
    Form,
    FormGroup,
    Container,
    Card,
    Button,
    NavbarBrand,
    Navbar,
} from "reactstrap";
import baseUrl from "../../api's/base_url";

const UpdateDrug = (props) => {
    const [Drug, setDrug] = useState({});
    console.log("update drug .js");
    let id = useParams().id;
    const getDrugByIdFromApi = () => {
        axios.get(baseUrl + "/drug/" + id).then(
            (response) => {
                console.log(response.data);
                setDrug(response.data);
                console.log("set drug");
                console.log(Drug);
            },
            (error) => {
                console.log("error in drug by id");
                console.log(error);
            }
        );
    };

    useEffect(() => {
        document.title = "Update-Drug";
        getDrugByIdFromApi();
    }, []);

    let navigate = useNavigate();

    const updateDrugOnApi = () => {
        axios.put(baseUrl + "/drug/" + id, Drug).then(
            (response) => {
                setDrug(response.data);
                alert("Drug updated Successfully.");
                navigate("/admin/view-drugs");
            },
            (error) => {
                console.log("error in drug by id");
                console.log(error);
            }
        );
    };

    const updateHandler = () => {
        console.log("call update method");
        updateDrugOnApi();
    };

    return (
        <div>
            <Container
                style={{
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28rem",
                }}
            >
                <Navbar className="my-2" color="secondary" dark>
                    <NavbarBrand>Update the Drug</NavbarBrand>
                </Navbar>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label className="mt-2">Drug Id</label>
                            <Input defaultValue={Drug.drugId} readOnly></Input>
                            <label className="mt-2">Drug Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Drug Name"
                                id="DName"
                                name="drugName"
                                defaultValue={Drug.drugName}
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        drugName: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Expiry Date</label>
                            <Input
                                type="date"
                                placeholder="Enter Expiry Date"
                                id="ExpDate"
                                name="expiryDate"
                                defaultValue={Drug.expiryDate}
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        expiryDate: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Quantity</label>
                            <Input
                                type="Number"
                                placeholder="Enter Quantity"
                                id="Qty"
                                name="drugQuantity"
                                defaultValue={Drug.drugQuantity}
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        drugQuantity: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Price</label>
                            <Input
                                type="Number"
                                placeholder="Enter Drug Price"
                                id="price"
                                name="price"
                                defaultValue={Drug.price}
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        price: e.target.value,
                                    });
                                }}
                            ></Input>

                            <Button
                                color="dark"
                                className="mx-2 mt-3"
                                onClick={updateHandler}
                            >
                                Save Update
                            </Button>

                            <Link to="/admin/view-drugs">
                                <Button
                                    className="mt-3"
                                    color="dark"
                                    type="submit"
                                >
                                    Cancel
                                </Button>
                            </Link>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default UpdateDrug;
