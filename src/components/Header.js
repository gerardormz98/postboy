import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" fixed="top" className="navbar-main py-2">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        src="/img/postboy-logo.png"
                        width="35"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Postboy logo"
                    />
                    <h4 className="ml-2 mb-0">Postboy</h4>
                </Navbar.Brand>
                <Nav>
                    <NavLink to="/" exact activeClassName="active" className="text-light nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" exact activeClassName="active" className="text-light nav-link">
                        About
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;