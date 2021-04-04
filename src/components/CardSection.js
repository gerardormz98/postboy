import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faChevronRight, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import HeaderKeyValueForm from "./HeaderKeyValueForm";
import BodyKeyValueForm from "./BodyKeyValueForm";
import { addTabHeader, clearTabHeader, addTabBody, clearTabBody } from "../actions/tab";

const CardSection = ({ title, emptyMessage, type }) => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);
    const [ isCollapsed, setIsCollapsed ] = useState(false);

    const handleAddHeader = () => {
        setIsCollapsed(false);
        dispatchTabs(addTabHeader(tab.id));
    };

    const handleAddBody = () => {
        setIsCollapsed(false);
        dispatchTabs(addTabBody(tab.id));
    };

    const handleClearHeader = () => {
        setIsCollapsed(false);
        dispatchTabs(clearTabHeader(tab.id));
    };

    const handleClearBody = () => {
        setIsCollapsed(false);
        dispatchTabs(clearTabBody(tab.id));
    };

    const isEmpty = () => {
        if (type === "Header") {
            return tab.headers.length === 0;
        }
        else if (type === "Body") {
            return tab.bodyParams.length === 0;
        }
    }

    const renderForms = () => {
        if (isEmpty()) {
            return <em className="text-muted">{emptyMessage}</em>
        }
        else {
            if (type === "Header") {
                return tab.headers.map((header) => {
                    return  <HeaderKeyValueForm 
                                key={header.id} 
                                id={header.id}
                                headerKey={header.key} 
                                headerValue={header.value} 
                            />
                });
            }
            else if (type === "Body") {
                return tab.bodyParams.map((body) => {
                    return  <BodyKeyValueForm 
                                key={body.id}
                                id={body.id}
                                bodyKey={body.key} 
                                bodyType={body.type} 
                                bodyValue={body.value}
                                bodyFile={body.file} />
                });
            }
        }
    };

    const getItemsCount = () => {
        if (!isEmpty()) {
            if (type === "Header") {
                return <span>({tab.headers.length})</span>;
            }
            else if (type === "Body") {
                return <span>({tab.bodyParams.length})</span>;
            }
        }
    };

    return (
        <div className="mb-3">
            <Accordion defaultActiveKey="0" activeKey={isCollapsed ? undefined : "0"}>
                <Card>
                    <Card.Header className={`d-flex align-items-center justify-content-between ${isCollapsed ? "border-bottom-0" : ""}`}>
                        <div className="d-flex align-items-center">
                            <Accordion.Toggle eventKey="0" className="card-header-collapse p-0" onClick={() => setIsCollapsed(!isCollapsed)}>
                                <FontAwesomeIcon icon={faChevronRight} className={`card-header-collapse-icon ${isCollapsed ? undefined : 'fa-rotate-90'}`}/>
                            </Accordion.Toggle>
                            <span className="card-header-title ml-3">{title} {getItemsCount()}</span>
                        </div>
                        <div className="card-header__buttons">
                            {
                                !isEmpty() &&
                                <Button 
                                    variant="secondary" 
                                    size="sm"
                                    className="btn-clear"
                                    onClick={() => {
                                        if (type === "Header") {
                                            handleClearHeader();
                                        }
                                        else if (type === "Body") {
                                            handleClearBody();
                                        }
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMinusCircle}/> Clear
                                </Button>
                            }
                            <Button 
                                variant="success" 
                                size="sm"
                                className="ml-2 btn-add"
                                onClick={() => {
                                    if (type === "Header") {
                                        handleAddHeader();
                                    }
                                    else if (type === "Body") {
                                        handleAddBody();
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faPlus}/> Add new
                            </Button>
                        </div>
                    </Card.Header>
                    <Accordion.Collapse className={`${isCollapsed ? "d-none" : ""}`} eventKey="0">
                        <Card.Body>
                        {
                            renderForms()
                        }
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
};

export default CardSection;