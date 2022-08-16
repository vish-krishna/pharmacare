import axios from "axios";
import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";
import baseUrl from "../../api's/base_url";

const DrugAdmin = ({ drug, flag, deletionView }) => {
    const deleteDrugHandler = () => {
        axios.delete(baseUrl + "/drug/" + drug.drugId).then(
            (response) => {
                console.log(response);
                deletionView(drug.drugId);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <div>
            <Container>
                <Card>
                    <CardBody>
                        {console.log("single drug")}
                        {console.log(drug)}
                        <CardSubtitle>
                            Drug name : {drug.drugName}{" "}
                        </CardSubtitle>
                        <CardText>Drug id : {drug.drugId}</CardText>
                        <CardText>Expiry date : {drug.expiryDate}</CardText>
                        <CardText>Quantity : {drug.drugQuantity}</CardText>
                        <CardText>Price : {drug.price} </CardText>
                    </CardBody>
                    {!flag ? (
                        <CardBody>
                            <Button className="mx-1">update</Button>

                            <Button onClick={deleteDrugHandler}>delete</Button>
                        </CardBody>
                    ) : (
                        ""
                    )}
                </Card>
            </Container>
        </div>
    );
};

export default DrugAdmin;
