import React from "react";
import DrugAdmin from "./DrugAdmin";
import {
    Card,
    CardBody,
    CardText,
    Container,
    Button,
    Row,
    Col,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../../api's/base_url";

function OrderAdmin({ order, updateViewOrder }) {
    const verifyOrder = () => {
        axios.get(baseUrl + "/order/verify/" + order.orderId).then(
            (response) => {
                console.log("verified order");
                updateViewOrder();
            },
            (error) => {
                console.log("unable to verify");
            }
        );
    };

    const pickUpOrder = () => {
        axios.get(baseUrl + "/order/pickUp/" + order.orderId).then(
            (response) => {
                console.log("order placed in pick up");
                updateViewOrder();
            },
            (error) => {
                console.log("unable to update pick up ");
            }
        );
    };

    const handleVerifyOrder = () => {
        console.log("handle verify ");
        verifyOrder();
    };

    const handlePickUp = () => {
        console.log("handle pick up ");
        pickUpOrder();
    };

    return (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        <Row>
                            <CardText>Order id : {order.orderId}</CardText>

                            <CardText>Doctor id : {order.doctorId}</CardText>

                            <CardText>
                                {order.verified ? (
                                    <Button className="mx-2" color="info">
                                        Verified
                                    </Button>
                                ) : (
                                    <Button
                                        className="mx-2"
                                        color="success"
                                        onClick={handleVerifyOrder}
                                    >
                                        Verify
                                    </Button>
                                )}
                                {order.verified ? (
                                    order.pickedUp ? (
                                        <Button className="mx-2" color="info">
                                            pickedUp
                                        </Button>
                                    ) : (
                                        <Button
                                            className="mx-2"
                                            color="success"
                                            onClick={handlePickUp}
                                        >
                                            pick Up
                                        </Button>
                                    )
                                ) : (
                                    <Button
                                        className="mx-2"
                                        color="danger"
                                        disabled
                                    >
                                        pick Up
                                    </Button>
                                )}

                                {/* Verified :{" "}
                                    {order.verified ? "true" : "false"} Picked
                                    up : {order.pickedUp ? "true" : "false"} */}
                            </CardText>

                            {/* <Col md={2}>
                                <CardText></CardText>
                            </Col> */}

                            {order.drugList.length > 0
                                ? order.drugList.map((d) => (
                                      <DrugAdmin
                                          key={d.drugId}
                                          drug={d}
                                          flag={true}
                                      />
                                  ))
                                : "empty drug"}

                            <CardText>
                                Total Price : {order.totalPrice}
                            </CardText>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default OrderAdmin;
