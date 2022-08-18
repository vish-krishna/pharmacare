import React from "react";
import { Container } from "reactstrap";
import OrderAdmin from "./OrderAdmin";
function ViewNewOrder({ orders, updateViewOrder }) {
    return (
        <div>
            <h1>Picked up Order</h1>
            <Container>
                {orders.length > 0
                    ? orders.map((o) => {
                          return !o.verified ? (
                              <OrderAdmin
                                  key={o.orderId}
                                  order={o}
                                  updateViewOrder={updateViewOrder}
                              />
                          ) : (
                              ""
                          );
                      })
                    : "No order"}
            </Container>
        </div>
    );
}

export default ViewNewOrder;
