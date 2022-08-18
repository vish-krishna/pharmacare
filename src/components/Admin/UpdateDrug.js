import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";
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

    const updateDrugOnApi = () => {
        axios.put(baseUrl + "/drug/" + id, Drug).then(
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

    const updateHandler = () => {
        updateDrugOnApi();
    };

    return (
        <div>
            <h1>Update Drug</h1>
            {/* <h1>{Drug.drugName}</h1> */}
            <Container>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label>Drug Id</label>
                            <Input defaultValue={Drug.drugId} readOnly></Input>
                            <label>Drug Name</label>
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
                            <label>Expiry Date</label>
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
                            <label>Quantity</label>
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
                            <label>Price</label>
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
                            <Link to="/admin/view-drugs">
                                <Button
                                    color="dark"
                                    type="submit"
                                    className="mx-2"
                                    onClick={updateHandler}
                                >
                                    Save Update
                                </Button>
                            </Link>
                            <Link to="/admin/view-drugs">
                                <Button color="dark" type="submit">
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
