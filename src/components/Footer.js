import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="footer bg-dark py-4">
            <Container className="h-100 d-flex align-items-center justify-content-between">
                <span className="text-white-50 brand">Postboy</span>

                <span className="text-white-50 ml-3">
                    <span>Made with <FontAwesomeIcon icon={faHeart} /> by </span>
                    <a href="https://github.com/gerardormz98/" target="_blank" rel="noreferrer">
                        <span className="d-none d-sm-inline-block">Gerardo Ramírez</span>
                        <span className="d-inline-block d-sm-none">GR</span>
                    </a>
                </span>
            </Container>
        </div>
    );
};

export default Header;