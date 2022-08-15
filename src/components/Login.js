import React from "react";
import {
    Button,
    Container,
    Form,
    FormGroup,
    Input,
    Col,
    Row,
    Card,
} from "reactstrap";

const Login = () => {
    return (
        <div className="login my-2">
            <Container>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label>Email</label>
                            <Input
                                type="email"
                                placeholder="Enter Email Id"
                                id="Email"
                                name="Email"
                            ></Input>
                            <label>Password</label>
                            <Input
                                type="password"
                                placeholder="Enter Password"
                                id="Pass"
                                name="pass"
                            ></Input>
                            <Button color="dark">login</Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
            <hr />
            <Container>
                <Card className="p-4" color="secondary">
                    <Form>
                        <FormGroup>
                            <label>Name</label>
                            <Input
                                type="text"
                                placeholder="Enter Full Name"
                                id="Name"
                                name="Name"
                            ></Input>
                            <Row>
                                <Col md={6}>
                                    <label>Email</label>
                                    <Input
                                        type="email"
                                        placeholder="Enter Email Id"
                                        id="Email"
                                        name="Email"
                                    ></Input>
                                </Col>
                                <Col md={6}>
                                    <label>Password</label>
                                    <Input
                                        type="password"
                                        placeholder="Enter Password"
                                        id="Pass"
                                        name="pass"
                                    ></Input>
                                </Col>
                            </Row>
                            <label>Contact</label>
                            <Input
                                type="text"
                                placeholder="Enter Contact Number"
                                id="Contact"
                                name="Contact"
                            ></Input>

                            <label>Role</label>
                            <Input type="select" id="role" name="role">
                                <option>Doctor</option>
                                <option>Admin</option>
                            </Input>

                            <Button color="dark">Register</Button>
                        </FormGroup>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};

export default Login;
