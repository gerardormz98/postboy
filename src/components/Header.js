import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" className="navbar-main py-2">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src="/postboy-logo.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Postboy logo"
                    />
                    <h4 className="ml-2 mb-0">Postboy</h4>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className="text-light">Home</Nav.Link>
                    <Nav.Link className="text-light">About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;