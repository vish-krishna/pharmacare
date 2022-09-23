import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
import ViewSupplier from "./ViewSupplier";
const UpdateSupplier = () => {
    const [supplier, setSupplier] = useState({});
    console.log("update Supplier .js");
    let id = useParams().id;
    console.log(useParams());
    console.log(id);

    const getSupplierByIdFromApi = () => {
        axios.get(baseUrl + "/supplier/" + id).then(
            (response) => {
                console.log(response.data);
                setSupplier(response.data);
            },
            (error) => {
                console.log("error in Supplier by id");
                console.log(error);
            }
        );
    };

    useEffect(() => {
        document.title = "update-Supplier";
        getSupplierByIdFromApi();
    }, []);

    let navigate = useNavigate();

    const updateSupplierOnApi = () => {
        axios.put(baseUrl + "/supplier/" + id, supplier).then(
            (response) => {
                setSupplier(response.data);
                alert("Supplier updated successfully.");
                navigate("/admin/view-supplier");
            },
            (error) => {
                alert("error in Supplier updatation");
                console.log(error);
            }
        );
    };

    const updateHandler = () => {
        console.log("call update method");
        updateSupplierOnApi();
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
                    <NavbarBrand>Update the Supplier</NavbarBrand>
                </Navbar>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label className="mt-2">Supplier Id</label>
                            <Input
                                type="text"
                                defaultValue={supplier.supplierId}
                                readOnly
                            ></Input>

                            <label className="mt-2">Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Supplier Name"
                                id="SupplierName"
                                name="supplierName"
                                defaultValue={supplier.supplierName}
                                onChange={(e) => {
                                    setSupplier({
                                        ...supplier,
                                        supplierName: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Email</label>
                            <Input
                                type="email"
                                placeholder="Enter supplier Email Id"
                                id="supplierEmail"
                                name="supplierEmail"
                                defaultValue={supplier.supplierEmail}
                                onChange={(e) => {
                                    setSupplier({
                                        ...supplier,
                                        supplierEmail: e.target.value,
                                    });
                                }}
                            ></Input>
                            <label className="mt-2">Contact</label>
                            <Input
                                type="text"
                                placeholder="Enter supplier Contact Number"
                                id="supplierContact"
                                name="supplierContact"
                                defaultValue={supplier.supplierContact}
                                onChange={(e) => {
                                    setSupplier({
                                        ...supplier,
                                        supplierContact: e.target.value,
                                    });
                                }}
                            ></Input>
                            {/* <Link to="/admin/view-supplier"> */}
                            <Button
                                color="dark"
                                className="mx-2 mt-3"
                                onClick={updateHandler}
                            >
                                Save Update
                            </Button>
                            {/* </Link> */}
                            <Link to="/admin/view-supplier">
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

export default UpdateSupplier;
