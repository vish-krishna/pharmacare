import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function AdminMenu() {
    return (
        <ListGroup>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/home"
            >
                Home Admin
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-drugs"
            >
                View Drugs
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-orders"
            >
                ALL Orders
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-orders-new"
            >
                New Orders
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-orders-verified"
            >
                Verified Orders
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-orders-pickedup"
            >
                Picked Up Orders
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/add-drug"
            >
                Add Drug
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/admin/view-supplier"
            >
                View Supplier
            </Link>
            <Link
                className="list-group-item list-group-item-action"
                to="/admin/add-supplier"
            >
                Add Supplier
            </Link>
        </ListGroup>
    );
}
export default AdminMenu;
