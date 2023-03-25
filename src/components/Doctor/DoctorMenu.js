import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";

function DoctorMenu() {
    return (
        <ListGroup>
            {/* <Link
                className="list-group-item list-group-item-action"
                to="/doctor/home"
            >
                Home
            </Link> */}

            <Link
                className="list-group-item list-group-item-action"
                to="/doctor/view-drugs"
            >
                View Drugs
            </Link>

            <Link
                className="list-group-item list-group-item-action"
                to="/doctor/view-orders"
            >
                View Orders
            </Link>
        </ListGroup>
    );
}
export default DoctorMenu;
