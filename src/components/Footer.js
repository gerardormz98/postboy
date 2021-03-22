import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="footer bg-dark">
            <Container className="h-100 d-flex align-items-center justify-content-between">
                <span className="text-white-50 brand">Postboy</span>
                <span className="text-white-50">Made with <FontAwesomeIcon icon={faHeart} /> by Gerardo Ramírez</span>
            </Container>
        </div>
    );
};

export default Header;