import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { editTabBody, removeTabBody } from "../actions/tab";

const KeyValueForm = ({ id, bodyKey, bodyType, bodyValue, bodyFile }) => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);

    const handleKeyChange = (key) => {
        dispatchTabs(editTabBody(tab.id, id, key, bodyType, bodyValue, bodyFile));
    };

    const handleTypeChange = (type) => {
        dispatchTabs(editTabBody(tab.id, id, bodyKey, type, "", null));
    };

    const handleEditValue = (value, file) => {
        dispatchTabs(editTabBody(tab.id, id, bodyKey, bodyType, value, file));
    };

    const handleDeleteBody = () => {
        dispatchTabs(removeTabBody(tab.id, id));
    };

    return (
        <div className="d-flex mb-2">
            <Form.Control 
                size="sm"
                placeholder="Key"
                className="w-auto mr-2"
                onChange={(e) => handleKeyChange(e.target.value)}
                onKeyPress={(e) => {
                    if (e.charCode === 13 || e.key === 13 || e.keyIdentifier === 13 || e.keyCode === 13) 
                        e.preventDefault();
                }}
                value={bodyKey} />

            <Form.Control 
                as="select" 
                size="sm" 
                className="mr-2 w-auto"
                value={bodyType}
                onChange={(e) => handleTypeChange(e.target.value)}
            >
                <option value="Text">Text</option>
                <option value="File">File</option>
            </Form.Control>
        
            {
                bodyType === "File" ?
                    <Form.File 
                        size="sm"
                        className="flex-grow-1 mr-2"
                        onChange={(e) => handleEditValue(e.target.value, e.target.files[0])}
                        value={bodyValue} /> 
                :
                    <Form.Control 
                        size="sm"
                        placeholder="Value"
                        className="flex-grow-1 mr-2"
                        onChange={(e) => handleEditValue(e.target.value, null)}
                        onKeyPress={(e) => {
                            if (e.charCode === 13 || e.key === 13 || e.keyIdentifier === 13 || e.keyCode === 13) 
                                e.preventDefault();
                        }}
                        value={bodyValue} />
            }

            <Button 
                variant="danger" 
                size="sm"
                onClick={() => handleDeleteBody()}
            >
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>
        </div>
    );
};

export default KeyValueForm;