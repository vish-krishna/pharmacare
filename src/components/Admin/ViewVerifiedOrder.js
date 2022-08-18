import React from "react";
import { Container } from "reactstrap";
import OrderAdmin from "./OrderAdmin";
function ViewVerifiedOrder({ orders, updateViewOrder }) {
    return (
        <div>
            <h1>Verified Orders</h1>
            <Container>
                {console.log("view all  orders")}
                {console.log(orders.length)}
                {orders.length > 0
                    ? orders.map((o) => {
                          console.log("view order in map ");
                          //   console.log(o);
                          return o.verified && o.pickedUp == false ? (
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

export default ViewVerifiedOrder;
