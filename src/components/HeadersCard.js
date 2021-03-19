import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const HeadersCard = () => {
    return (
        <div className="mb-3">
            <Card>
                <Card.Header className="d-flex align-items-center justify-content-between">
                    <span className="card-header-title">Headers</span>
                    <Button variant="success" size="sm"><FontAwesomeIcon icon={faPlus}/> Add new</Button>
                </Card.Header>
                <Card.Body>
                    <i>Click the button to add a new header.</i>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HeadersCard;