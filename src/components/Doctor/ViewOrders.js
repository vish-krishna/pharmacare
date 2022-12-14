import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, NavbarBrand, Navbar } from "reactstrap";
import baseUrl from "../../api's/base_url";
import Order from "./Order";

function ViewOrders({ user }) {
    const [orders, setOrders] = useState({});

    const getOrdersFromApi = () => {
        axios.get(baseUrl + "/order/byDoctorId/" + user.userId).then(
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

    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand>All Your Orders</NavbarBrand>
            </Navbar>
            <Container>
                {console.log("view all  orders")}
                {console.log(orders.length)}
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          return <Order key={o.orderId} order={o} />;
                      })
                    : "No order"}
            </Container>
        </div>
    );
}
export default ViewOrders;
