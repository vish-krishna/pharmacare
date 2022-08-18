import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navb from "./components/Navb";

import { Col, Container, Row } from "reactstrap";

import AdminMenu from "./components/Admin/AdminMenu";
import WelcomeAdmin from "./components/Admin/WelcomeAdmin";
import ViewDrugsAdmin from "./components/Admin/ViewDrugsAdmin";
import ViewOrdersAdmin from "./components/Admin/ViewOrdersAdmin";

import DoctorMenu from "./components/Doctor/DoctorMenu";
import Photos from "./components/Doctor/Photos";
import ViewDrugs from "./components/Doctor/ViewDrugs";
import ViewOrders from "./components/Doctor/ViewOrders";
import AddDrug from "./components/Admin/AddDrug";
import ViewSupplier from "./components/Admin/ViewSupplier";
import AddSupplier from "./components/Admin/AddSupplier";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdateDrug from "./components/Admin/UpdateDrug";
function App() {
    return (
        <div className="App">
            <Router>
                <Navb />
                <Row>
                    <Routes>
                        <Route path="/" exact element={<Photos />} />
                    </Routes>
                    <Routes>
                        <Route path="/login" exact element={<Login />} />
                    </Routes>
                    <Routes>
                        <Route path="/register" exact element={<Register />} />
                    </Routes>
                    <Col md={1}></Col>

                    <Col md={2}>
                        <Routes>
                            <Route
                                path="/doctor/*"
                                exact
                                element={<DoctorMenu />}
                            />
                            <Route
                                path="/admin/*"
                                exact
                                element={<AdminMenu />}
                            />
                        </Routes>
                    </Col>
                    <Col md={9}>
                        <Routes>
                            <Route
                                path="/doctor/home"
                                exact
                                element={<Photos />}
                            />
                            <Route
                                path="/doctor/view-drugs"
                                exact
                                element={<ViewDrugs />}
                            />
                            <Route
                                path="/doctor/view-orders"
                                exact
                                element={<ViewOrders />}
                            />
                        </Routes>

                        <Routes>
                            <Route
                                path="/admin/home"
                                exact
                                element={<WelcomeAdmin />}
                            />
                            <Route
                                path="/admin/view-drugs"
                                exact
                                element={<ViewDrugsAdmin />}
                            />
                            <Route
                                path="/admin/add-drug"
                                exact
                                element={<AddDrug />}
                            />

                            <Route
                                path="/admin/update-drug/:id"
                                exact
                                element={<UpdateDrug />}
                            />
                            <Route
                                path="/admin/view-orders"
                                exact
                                element={<ViewOrdersAdmin />}
                            />

                            <Route
                                path="/admin/view-orders-new"
                                exact
                                element={<ViewOrdersAdmin flag={"new"} />}
                            />

                            <Route
                                path="/admin/view-orders-verified"
                                exact
                                element={<ViewOrdersAdmin flag={"verified"} />}
                            />

                            <Route
                                path="/admin/view-orders-pickedup"
                                exact
                                element={<ViewOrdersAdmin flag={"pickedup"} />}
                            />
                            <Route
                                path="/admin/view-supplier"
                                exact
                                element={<ViewSupplier />}
                            />
                            <Route
                                path="/admin/add-supplier"
                                exact
                                element={<AddSupplier />}
                            />
                        </Routes>
                    </Col>
                </Row>
            </Router>
        </div>
    );
}

export default App;
