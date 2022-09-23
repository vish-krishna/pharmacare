import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Button,
    Container,
    Card,
    Input,
    Form,
    FormGroup,
    Row,
    Col,
} from "reactstrap";
import axios from "axios";
import baseUrl from "../api's/base_url";

const Login = ({ setData, setUserDetails }) => {
    const [userData, setUserData] = useState({});
    let navigate = useNavigate();
    useEffect(() => {
        document.title = "Login";
    }, []);

    const requestToLogin = (data) => {
        axios.post(baseUrl + "/user/login", data).then(
            (response) => {
                console.log(response);
                if (response.data.accountNonExpired) {
                    axios.get(baseUrl + "/user/email/" + data.username).then(
                        (response) => {
                            console.log(response);
                            setUserData(response.data);
                            setUserDetails(response.data);
                            setData(true);
                            if (response.data.userRole === "ROLE_DOCTOR") {
                                navigate("/doctor/home");
                            } else if (
                                response.data.userRole === "ROLE_ADMIN"
                            ) {
                                navigate("/admin/home");
                            }
                        },
                        (error) => {
                            console.log(error);
                            alert("Wrong EmailId or Password");
                        }
                    );
                }
            },
            (error) => {
                console.log(error);
                alert("Wrong EmailId or Password");
            }
        );
    };

    const loginHandler = (e) => {
        console.log(userData);
        requestToLogin(userData);
        e.preventDefault();
    };

    return (
        <div className=" login my-4">
            <Container>
                <Row>
                    <Col md={4}></Col>
                    <Col md={4}>
                        <Card className="p-4" color="secondary">
                            <Form className="" onSubmit={loginHandler}>
                                <FormGroup>
                                    <label className="m-2">Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email Id"
                                        id="username"
                                        name="username"
                                        className="m-2"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                username: e.target.value,
                                            });
                                        }}
                                    ></Input>
                                    <label className="m-2">Password</label>
                                    <Input
                                        type="password"
                                        placeholder="Enter Password"
                                        name="password"
                                        id="password"
                                        className="m-2"
                                        onChange={(e) => {
                                            setUserData({
                                                ...userData,
                                                password: e.target.value,
                                            });
                                        }}
                                    ></Input>
                                    <Button
                                        type="submit"
                                        color="dark"
                                        className="m-2"
                                    >
                                        login
                                    </Button>
                                    <Link to="/register">
                                        <Button color="dark" className="m-2">
                                            Register
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

export default Login;
