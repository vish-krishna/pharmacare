import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../api's/base_url";
import "../Style.css";

const Supplier = ({ supplier, deletionView, index }) => {
    const deleteSupplierHandler = () => {
        axios.delete(baseUrl + "/supplier/" + supplier.supplierId).then(
            (response) => {
                console.log(response);
                deletionView(supplier.supplierId);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    return (
        <tr>
            <td >{index}</td>
            <td>{supplier.supplierId}</td>

            <td>{supplier.supplierName}</td>
            <td>{supplier.supplierEmail}</td>
            <td> {supplier.supplierContact}</td>

            <td>
                <Link to={"/admin/update-supplier/" + supplier.supplierId}>
                    <Button color="primary" className="mx-1">
                        update
                    </Button>
                </Link>
                <Button color="danger" onClick={deleteSupplierHandler}>
                    delete
                </Button>
            </td>
        </tr>
    );
};

export default Supplier;
