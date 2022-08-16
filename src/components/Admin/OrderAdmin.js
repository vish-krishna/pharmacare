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

function OrderAdmin({ order }) {
    console.log("single order component");
    console.log(order);

    return (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        <Row>
                            <Col md={2}>
                                <CardText>Order id : {order.orderId}</CardText>
                            </Col>
                            <Col md={2}>
                                <CardText>
                                    Doctor id : {order.doctorId}
                                </CardText>
                            </Col>
                            <Col md={2}>
                                <CardText>
                                    Verified :{" "}
                                    {order.verified ? "true" : "false"} Picked
                                    up : {order.pickedUp ? "true" : "false"}
                                </CardText>
                            </Col>
                            {/* <Col md={2}>
                                <CardText></CardText>
                            </Col> */}
                            <Col md={5}>
                                {order.drugList.length > 0
                                    ? order.drugList.map((d) => (
                                          <DrugAdmin
                                              key={d.drugId}
                                              drug={d}
                                              flag={true}
                                          />
                                      ))
                                    : "empty drug"}
                            </Col>
                            <Col>
                                <CardText>
                                    Total Price : {order.totalPrice}
                                </CardText>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default OrderAdmin;
