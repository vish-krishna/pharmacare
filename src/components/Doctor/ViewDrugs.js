import React, { useEffect } from "react";
import { useState } from "react";
import Drug from "./Drug";
import { FormControl, Badge, Navbar, Dropdown, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import baseUrl from "../../api's/base_url";
import { CartState } from "./Context";
import "../Style.css";
import { Table } from "reactstrap";

function ViewDrugs() {
    const {
        state: { cart },
        dispatch,
        drugDispatch,
    } = CartState();

    let index = 0;
    const [drugs, setDrugs] = useState({});
    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/drug").then(
            (response) => {
                setDrugs(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setDrugs({});
            }
        );
    };

    useEffect(() => {
        document.title = "Drugs";
        getOrdersFromApi();
    }, []);

    return (
        <div>
            <h1>Drugs List</h1>
            <h4>Quantity can be changed in the cart</h4>
            <Navbar>
                <div className="mx-3">
                    <Dropdown alignRight>
                        <Dropdown.Toggle variant="alpha">
                            <FaShoppingCart color="black" fontSize="25px" />
                            <Badge>{cart.length}</Badge>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((drugs) => (
                                        <span
                                            className="cartitem"
                                            key={drugs.drugId}
                                        >
                                            <div className="cartItemDetail">
                                                <span>{drugs.drugName}</span>
                                                <span>₹ {drugs.price}</span>

                                                <AiFillDelete
                                                    fontSize="20px"
                                                    className="deleteIcon"
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() =>
                                                        dispatch({
                                                            type:
                                                                "REMOVE_FROM_CART",
                                                            payload: drugs,
                                                        })
                                                    }
                                                />
                                            </div>
                                        </span>
                                    ))}
                                    <Link to="/doctor/cart">
                                        <Button
                                            style={{
                                                width: "95%",
                                                margin: "0 10px",
                                            }}
                                        >
                                            Go To Cart
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 10 }}>
                                    Cart is Empty!
                                </span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Navbar>

            {/* {drugs.length > 0
                ? drugs.map((d) => <Drug key={d.drugId} drug={d} />)
                : "no drugs available"} */}

            {drugs.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Drug Id</th>
                            <th>Drug Name</th>
                            <th>Expiry Date</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th> </th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {drugs.map((d) => {
                            return (
                                <Drug key={d.drugId} drug={d} index={++index} />
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                "no drugs available"
            )}
        </div>
    );
}
export default ViewDrugs;
