import React, { useState } from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
=======
import { useDispatch } from "react-redux";
import { logout } from "../../store/actions/auth.js";

>>>>>>> Muel
import {
  Navbar,
  Nav,
  Container,
  Offcanvas,
  Button,
  Modal,
} from "react-bootstrap";
import Login from "../User/Login/Login";
import brand from "../../assets/images/logo.svg";
import "./navbar.scss";
import DropdownNav from "./DropdownNav.jsx";

const NavigationBar = () => {
  const token = window.localStorage.getItem("token");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="container-fluid mb-3 fixed-top">
      <Navbar expand="lg" className="justify-content-center bg-white rounded shadow-sm">
        <Container fluid className="navbar-content">
          <Link to={"/"}>
          <img
            src={brand}
            alt="Logo"
            width="70"
            className="d-inline-block align-text-top"
          />
          </Link>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title className="fw-bold" id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1">
                <div className="navbar-nav ms-0">
                  <Nav.Link className="me-4" href="#main">
                    Penerbangan
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#destinasi">
                    Destinasi
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#testimonial">
                    Testimonial
                  </Nav.Link>
                  <Nav.Link className="me-4" href="#aboutus">
                    Tentang Kami
                  </Nav.Link>
                </div>
              </Nav>
<<<<<<< HEAD
              {token ?
                <div className="d-flex align-items-center">
                  <Nav.Link href="/" className="me-3">
                    <i className="bi bi-bell-fill"></i>
                  </Nav.Link>
                  <Nav.Link href="/" className="me-3">
                    <img src={window.localStorage.getItem("avatar")} alt="foto profil" width={"40px"} height={"40px"} className="rounded-circle" />
                  </Nav.Link>
                  <DropdownNav />
                </div>
                : <Button variant="primary" onClick={handleShow}> Daftar/Masuk </Button>}
=======
              {token ? (
                <Button
                  className="bg-danger"
                  onClick={() => {
                    dispatch(logout());
                    window.location.reload();
                  }}
                >
                  Logout
                </Button>
              ) : (
                <Button variant="primary" onClick={handleShow}>
                  {" "}
                  Datar/masuk{" "}
                </Button>
              )}
>>>>>>> Muel
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
 <Modal.Body className="softblue text-center">
          <Modal.Title className="mb-3">Masuk</Modal.Title>
<<<<<<< HEAD
          <Login onHide={handleClose} />
          <p>Belum punya akun? Silakan <a href="/register">Daftar</a></p>

=======
          <Login />
          <p>
            Belum punya akun? Silakan <a href="/register">Daftar</a>
          </p>
>>>>>>> Muel
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default NavigationBar;
