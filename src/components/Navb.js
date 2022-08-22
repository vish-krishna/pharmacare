import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { Button, Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

function Navb({ isLogin, setData }) {
    const navigate = useNavigate();
    const setLogin = () => {
        setData(false);
        navigate("/login");
    };
    return (
        <>
            <Navbar color="secondary" light expand container="lg">
                <NavbarBrand>PHARMACARE</NavbarBrand>
                {isLogin ? (
                    <Nav>
                        <NavItem className="mx-2">
                            <Button onClick={setLogin} color="primary">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/login"
                                >
                                    Logout
                                </Link>
                            </Button>
                        </NavItem>
                    </Nav>
                ) : (
                    <Nav>
                        <NavItem className="mx-2">
                            <Button color="primary">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/login"
                                >
                                    SignIn
                                </Link>
                            </Button>{" "}
                        </NavItem>
                        <NavItem>
                            <Button color="primary">
                                <Link
                                    className="list-group-item list-group-item-action"
                                    to="/register"
                                >
                                    SignUp
                                </Link>
                            </Button>
                        </NavItem>
                    </Nav>
                )}
            </Navbar>
        </>
    );
}

export default Navb;
