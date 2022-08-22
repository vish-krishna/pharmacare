import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";

const DrugInOrder = ({ drug, index }) => {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{drug.drugId}</td>
            <td>{drug.drugName}</td>
            <td>{drug.expiryDate}</td>
            <td> {drug.drugQuantity}</td>
            <td>{drug.price} </td>
        </tr>
    );
};

export default DrugInOrder;
