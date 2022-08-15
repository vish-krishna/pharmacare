import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import DoctorMenu from "./components/Doctor/DoctorMenu";
import Photos from "./components/Doctor/Photos";
import Navb from "./components/Navb";
import ViewDrugs from "./components/Doctor/ViewDrugs";
import ViewOrders from "./components/Doctor/ViewOrders";
function App() {
    return (
        <div>
            <Router>
                <Container className="App">
                    <Navb />
                    <Row>
                        <Routes>
                            <Route path="/" exact element={<Photos />} />
                        </Routes>

                        <Col md={3}>
                            <Routes>
                                <Route
                                    path="/doctor-menu/*"
                                    exact
                                    element={<DoctorMenu />}
                                />
                            </Routes>
                        </Col>
                        <Col md={9}>
                            <Routes>
                                <Route
                                    path="/doctor-menu/home"
                                    element={<Photos />}
                                    exact
                                />
                                <Route
                                    path="/doctor-menu/view-drugs"
                                    element={<ViewDrugs />}
                                    exact
                                />
                                <Route
                                    path="/doctor-menu/view-orders"
                                    element={<ViewOrders />}
                                    exact
                                />
                            </Routes>
                        </Col>
                    </Row>
                </Container>
            </Router>
        </div>
    );
}

export default App;
