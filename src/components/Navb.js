import React from "react";
import "../App.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

function Navb() {
    return (
        <div>
            <Navbar color="secondary" light expand container="lg">
                <NavbarBrand>PHARMACARE</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="/doctor-menu">SignIn</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/">SignUp</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
}

export default Navb;
