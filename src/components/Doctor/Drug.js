import React from "react";
import { Button } from "reactstrap";
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
