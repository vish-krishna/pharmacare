import React, { useState } from "react";
import { Input, Form, FormGroup, Container, Card, Button } from "reactstrap";

const UpdateDrug = ({ drug }) => {
    const [Drug, setDrug] = useState(drug);
    console.log("update drug .js");
    console.log(drug);
    console.log(Drug);
    return (
        <div>
            <h1>Update Drug</h1>
            <Container>
                <Card className="p-4" color="secondary">
                    <Form method="post">
                        <FormGroup>
                            <label>Drug Name</label>
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
                            <label>Expiry Date</label>
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
                            <label>Quantity</label>
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
                            <label>Price</label>
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
                            <Button color="dark" type="submit">
                                Update
                            </Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default UpdateDrug;
