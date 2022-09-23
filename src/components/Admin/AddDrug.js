import React, { useState, useEffect } from "react";
import {
    Input,
    Form,
    FormGroup,
    Container,
    Card,
    Button,
    Navbar,
    NavbarBrand,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../../api's/base_url";
import { useNavigate } from "react-router-dom";
function AddDrug() {
    const [Drug, setDrug] = useState({});
    let navigate = useNavigate();

    const handleAddDrugForm = (event) => {
        console.log("handle form drug");
        if (Drug.drugName === undefined) alert("Drug name cannot be Null.");
        else if (Drug.drugQuantity === undefined)
            alert("Drug quantity cannot by Null.");
        else if (Drug.expiryDate === undefined)
            alert("Drug expiry date cannot be null");
        else if (Drug.price === undefined) alert("Drug Price cannot be null");
        else AddDrugToApi(Drug);

        event.preventDefault();
    };

    const AddDrugToApi = (drugDetails) => {
        console.log("handle form drugDetails");
        console.log(drugDetails);
        axios.post(baseUrl + "/drug", drugDetails).then(
            (response) => {
                console.log("drug save successfully");
                alert("Drug added successfully.");
                navigate("/admin/view-drugs");
            },
            (error) => {
                console.log("drug does not save");
                alert("Some problem occoured");
            }
        );
    };

    useEffect(() => {
        document.title = "Drugs";
    }, []);

    return (
        <div className="AddDrug my-2">
            <Container
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28rem",
                }}
            >
                <Navbar className="my-2" color="secondary" dark>
                    <NavbarBrand>Fill all the Details to add drug</NavbarBrand>
                </Navbar>
                <Card className="p-4" color="secondary">
                    <Form onSubmit={handleAddDrugForm}>
                        <FormGroup>
                            <label className="mt-2">Drug Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Drug Name"
                                id="DName"
                                name="drugName"
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
                                onChange={(e) => {
                                    setDrug({
                                        ...Drug,
                                        price: e.target.value,
                                    });
                                }}
                            ></Input>
                            <Button className="mt-3" color="dark" type="submit">
                                Add
                            </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
}

export default AddDrug;
