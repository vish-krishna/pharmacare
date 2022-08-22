// import React from "react";
// import { Button } from "reactstrap";
// const Drug = ({ drug, index, ordered, vv }) => {
//     const addToOrder = () => {
//         ordered(drug);
//     };
//     const ddd = () => {
//         vv();
//     };

//     return (
//         <tr>
//             <th scope="row">{index}</th>
//             <td>{drug.drugId}</td>
//             <td>{drug.drugName}</td>
//             <td>{drug.expiryDate}</td>
//             <td> {drug.drugQuantity}</td>
//             <td>{drug.price} </td>

//             <td>
//                 <Button color="primary" className="mx-1" onClick={addToOrder}>
//                     Add to billing
//                 </Button>
//                 <Button color="primary" className="mx-1" onClick={ddd}>
//                     view console
//                 </Button>
//             </td>
//         </tr>
//     );
// };

// export default Drug;

// const dummy = () => {
//     <div>
//         {/* {console.log(drug)} drugId: '8f5dbbea-ad4a-4768-82c5-5b4fa9954806', drugName: 'd_name_3', drugQuantity: 380, expiryDate: '2025-06-02T00:00:00.000+00:00', price: 150, …*/}
//         <Container>
//             <Card>
//                 <CardBody>
//                     {console.log("single drug")}
//                     {console.log(drug)}
//                     <CardSubtitle>Drug name : {drug.drugName} </CardSubtitle>
//                     <CardText>Drug id : {drug.drugId}</CardText>
//                     <CardText>Expiry date : {drug.expiryDate}</CardText>
//                     <CardText>Quantity : {drug.drugQuantity}</CardText>
//                     <CardText>Price : {drug.price} </CardText>
//                 </CardBody>
//                 <CardBody>
//                     {cart.some((d) => d.drugId === drug.drugId) ? (
//                         <Button
//                             variant="danger"
//                             onClick={() =>
//                                 dispatch({
//                                     type: "REMOVE_FROM_CART",
//                                     payload: drug,
//                                 })
//                             }
//                         >
//                             Remove from cart
//                         </Button>
//                     ) : (
//                         <Button
//                             disabled={drug.drugQuantity === 0}
//                             onClick={() => {
//                                 dispatch({
//                                     type: "ADD_TO_CART",
//                                     payload: drug,
//                                 });
//                             }}
//                         >
//                             {drug.drugQuantity === 0
//                                 ? "Out of stock"
//                                 : "Add to cart"}
//                         </Button>
//                     )}
//                 </CardBody>
//             </Card>
//         </Container>
//     </div>;
// };

import React from "react";
import {
    Card,
    CardBody,
    CardText,
    Container,
    CardSubtitle,
    Button,
} from "reactstrap";
import { CartState } from "./Context";

const Drug = ({ drug, index }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{drug.drugId}</td>
            <td>{drug.drugName}</td>
            <td>{drug.expiryDate}</td>
            <td> {drug.drugQuantity}</td>
            <td>{drug.price} </td>
            <td>
                {" "}
                {cart.some((d) => d.drugId === drug.drugId) ? (
                    <Button
                        variant="danger"
                        onClick={() =>
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: drug,
                            })
                        }
                    >
                        Remove from cart
                    </Button>
                ) : (
                    <Button
                        disabled={drug.drugQuantity === 0}
                        onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: drug,
                            });
                        }}
                    >
                        {drug.drugQuantity === 0
                            ? "Out of stock"
                            : "Add to cart"}
                    </Button>
                )}
            </td>
        </tr>
    );
};

export default Drug;
