import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function DoctorMenu() {
    return (
        <ListGroup>
            <Link
                className="list-group-item list-group-item-action"
                to="/doctor-menu/home"
            >
                Home
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/doctor-menu/view-drugs"
            >
                View Drugs
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/doctor-menu/view-orders"
            >
                View Orders
            </Link>
        </ListGroup>
    );
}
export default DoctorMenu;
