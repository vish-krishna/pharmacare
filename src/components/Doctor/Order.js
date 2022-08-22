import React, { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    Table,
    AccordionBody,
    Badge,
} from "reactstrap";
import DrugInOrder from "./DrugInOrder";

function Order({ order }) {
    console.log("single order component");
    console.log(order);

    let index = 0;
    // Accordian state toggle
    const [open, setOpen] = useState();
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                    <AccordionHeader targetId="1">
                        <strong>Order Id : </strong>
                        {order.orderId}
                        <span className="mx-2">
                            <strong> Doctor Id :</strong> {order.doctorId}
                        </span>
                        {order.verified ? (
                            <Badge className="mx-2" color="success" pill>
                                verified
                            </Badge>
                        ) : (
                            ""
                        )}
                        {order.pickedUp ? (
                            <Badge className="mx-2" color="success" pill>
                                Picked
                            </Badge>
                        ) : (
                            ""
                        )}
                    </AccordionHeader>
                    <AccordionBody accordionId="1">
                        {order.drugList.length > 0 ? (
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>S.N.</th>
                                        <th>Drug Id</th>
                                        <th>Drug Name</th>
                                        <th>Expiry Date</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order.drugList.map((d) => (
                                        <DrugInOrder
                                            key={d.drugId}
                                            drug={d}
                                            flag={true}
                                            index={++index}
                                        />
                                    ))}
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td></td>

                                        <td>
                                            <strong>Total Price :</strong>
                                        </td>

                                        <td> {order.totalPrice}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        ) : (
                            "empty drug"
                        )}
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Order;
