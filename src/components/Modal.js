import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalComponent = ({ show, handleClose, title, body, footer}) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                {title}
            </Modal.Header>

            <Modal.Body>
                {body}
            </Modal.Body>

            <Modal.Footer>
                {footer}
            </Modal.Footer>
      </Modal>
    );
};

export default ModalComponent;