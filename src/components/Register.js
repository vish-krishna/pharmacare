import React, { useState, useEffect } from "react";
import {
    Button,
    Form,
    Container,
    Input,
    Col,
    Row,
    FormGroup,
    Card,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../api's/base_url";

const Register = () => {
    const [Users, setUsers] = useState({});

    const navigate = useNavigate();

    const handleForm = (e) => {
        if (Users.userName === undefined) {
            alert("User Name cannot be null");
        } else if (Users.userEmail === undefined) {
            alert("User Email cannot be null");
        } else if (Users.userPassword === undefined) {
            alert("User Password cannot be null");
        } else if (Users.userContact === undefined) {
            alert("User Contact cannot be null");
        } else {
            axios
                .get(
                    baseUrl + "/user/email/" + Users.userEmail,
                    Users.userEmail
                )
                .then(
                    (response) => {
                        alert(
                            "This Email id has already been Registered. Try with another Email Id."
                        );
                    },
                    (error) => {
                        AddUser(Users);
                    }
                );
        }
        e.preventDefault();
    };

    const AddUser = (data) => {
        axios.post(`${baseUrl}/createUser`, data).then(
            (response) => {
                alert("You are Registered. An mail has been send to your mail");
                navigate("/login");
            },
            (error) => {
                alert("Not Registered. Check Inputs");
            }
        );
    };

    useEffect(() => {
        document.title = "Register";
    }, []);

    return (
        <div className="register my-2">
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card className="p-4" color="secondary">
                            <Form onSubmit={handleForm}>
                                <FormGroup>
                                    <label className="m-2">Name</label>
                                    <Input
                                        className="m-2"
                                        type="text"
                                        placeholder="Enter Full Name"
                                        id="Name"
                                        name="userName"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                userName: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Email</label>
                                    <Input
                                        className="m-2"
                                        type="email"
                                        placeholder="Enter Email Id"
                                        id="Email"
                                        name="userEmail"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                userEmail: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Password</label>
                                    <Input
                                        className="m-2"
                                        type="password"
                                        placeholder="Enter Password"
                                        id="Pass"
                                        name="userPassword"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                userPassword: e.target.value,
                                            });
                                        }}
                                    ></Input>

                                    <label className="m-2">Contact</label>
                                    <Input
                                        className="m-2"
                                        type="text"
                                        placeholder="Enter Contact Number"
                                        id="Contact"
                                        name="userContact"
                                        onChange={(e) => {
                                            setUsers({
                                                ...Users,
                                                userContact: e.target.value,
                                            });
                                        }}
                                    ></Input>
                                    <label className="m-2">Role</label>
                                    <Input
                                        className="m-2"
                                        type="select"
                                        id="userRole"
                                        name="userRole"
                                        placeholder="select role"
                                        onSelect={(e) => {
                                            setUsers({
                                                ...Users,
                                                userRole: e.option.value,
                                            });
                                        }}
                                    >
                                        <option value="ROLE_DOCTOR">
                                            Doctor
                                        </option>
                                        <option value="ROLE_ADMIN">
                                            Admin
                                        </option>
                                    </Input>

                                    <Button
                                        color="dark"
                                        type="submit"
                                        className="m-2"
                                    >
                                        Register
                                    </Button>
                                    <Link to="/login">
                                        <Button color="dark" className="m-2">
                                            Login
                                        </Button>
                                    </Link>
                                </FormGroup>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
