import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "reactstrap";
import baseUrl from "../../api's/base_url";
import OrderAdmin from "./OrderAdmin";
import ViewAllOrders from "./ViewAllOrders";
import ViewNewOrder from "./ViewNewOrder";
import ViewPickedUpOrder from "./ViewPickedUpOrder";
import ViewVerifiedOrder from "./ViewVerifiedOrder";

function ViewOrdersAdmin({ flag }) {
    const [orders, setOrders] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/order").then(
            (response) => {
                console.log(response.data);
                setOrders(response.data);
            },
            (error) => {
                console.log("error");
                setOrders({});
            }
        );
    };

    useEffect(() => {
        document.title = "Orders";
        getOrdersFromApi();
    }, []);

    const updateViewOrder = () => {
        getOrdersFromApi();
    };
    const view = () => {
        // if (flag == "verified") {
        //     return (
        //         <ViewVerifiedOrder
        //             orders={orders}
        //             updateViewOrder={updateViewOrder}
        //         />
        //     );
        // } else if (flag == "new") {

        // } else if (flag == "pickedup") {

        // } else {

        // }

        switch (flag) {
            case "verified":
                return (
                    <ViewVerifiedOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
            case "new":
                return (
                    <ViewNewOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );

            case "pickedup":
                return (
                    <ViewPickedUpOrder
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
            default:
                return (
                    <ViewAllOrders
                        orders={orders}
                        updateViewOrder={updateViewOrder}
                    />
                );
        }
    };
    return (
        <div>
            <h1>view orders</h1>
            {view()}
            {/* {pickedup ? (
                <ViewPickedUpOrder
                    orders={orders}
                    updateViewOrder={updateViewOrder}
                />
            ) : verified ? (
                <ViewVerifiedOrder
                    orders={orders}
                    updateViewOrder={updateViewOrder}
                />
            ) : (
                <ViewAllOrders
                    orders={orders}
                    updateViewOrder={updateViewOrder}
                />
            )} */}
        </div>
    );
}
export default ViewOrdersAdmin;
