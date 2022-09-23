import React, { useState, useEffect } from "react";
import Supplier from "./Supplier";
import axios from "axios";
import baseUrl from "../../api's/base_url";
import { Navbar, NavbarBrand, Table } from "reactstrap";

function ViewSupplier() {
    let index = 0;
    const [supplier, setSupplier] = useState({});

    const getSupplierFromApi = () => {
        axios.get(baseUrl + "/supplier").then(
            (response) => {
                setSupplier(response.data);
                console.log(response.data);
            },
            (error) => {
                console.log("error");
                setSupplier({});
            }
        );
    };

    useEffect(() => {
        document.title = "Supplier";
        getSupplierFromApi();
    }, []);

    const updateSupplierView = (id) => {
        getSupplierFromApi();
    };

    return (
        <div>
            <Navbar className="my-2" color="secondary" dark>
                <NavbarBrand href="/">Supplier</NavbarBrand>
            </Navbar>
            {supplier.length > 0 ? (
                <Table responsive>
                    <thead>
                        <tr>
                            <th>S.N.</th>
                            <th>Supplier Id</th>
                            <th>Name</th>

                            <th>Email</th>
                            <th>Contact</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {supplier.map((s) => {
                            return (
                                <Supplier
                                    key={s.supplierId}
                                    supplier={s}
                                    deletionView={updateSupplierView}
                                    index={++index}
                                />
                            );
                        })}
                    </tbody>
                </Table>
            ) : (
                "No Suplier available"
            )}
        </div>
    );
}

export default ViewSupplier;
