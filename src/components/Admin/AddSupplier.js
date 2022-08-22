import React, { useState } from "react";
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
import axios from "axios";
import baseUrl from "../../api's/base_url";
function AddSupplier() {
    const [Supplier, setSupplier] = useState({});

    const handleForm = (e) => {
        console.log(Supplier);
        AddSupplier(Supplier);
        e.preventDefault();
    };

    const AddSupplier = (data) => {
        console.log(data);
        axios.post(`${baseUrl}/supplier`, data).then(
            (response) => {
                console.log(response.data);
                console.log("response");
                alert("added Supplier");
            },
            (error) => {
                console.log(error);
                console.log("error");
            }
        );
    };

    return (
        <div className="AddSupplier my-2">
            <Container
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28rem",
                }}
            >
                <Navbar className="my-2" color="secondary" dark>
                    <NavbarBrand>
                        Fill all the Details to add Supplier
                    </NavbarBrand>
                </Navbar>
                <Card className="p-4" color="secondary">
                    <Form onSubmit={handleForm}>
                        <FormGroup>
                            <label className="mt-2">Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Supplier Name"
                                id="SupplierName"
                                name="SupplierName"
                                onChange={(e) => {
                                    setSupplier({
                                        ...Supplier,
                                        supplierName: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Email</label>
                            <Input
                                type="email"
                                placeholder="Enter supplier Email Id"
                                id="SupplierEmail"
                                name="SupplierEmail"
                                onChange={(e) => {
                                    setSupplier({
                                        ...Supplier,
                                        supplierEmail: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Contact</label>
                            <Input
                                type="number"
                                placeholder="Enter supplier Contact Number"
                                id="SupplierContact"
                                name="SupplierContact"
                                onChange={(e) => {
                                    setSupplier({
                                        ...Supplier,
                                        supplierContact: e.target.value,
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

export default AddSupplier;
