import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <div className="footer bg-dark">
            <Container className="h-100 d-flex align-items-center justify-content-between">
                <span className="text-white-50 brand">Postboy</span>
                <span className="text-white-50">Built by Gerardo Ramírez</span>
            </Container>
        </div>
    );
};

export default Header;