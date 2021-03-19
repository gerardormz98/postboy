import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Autosuggest from 'react-autosuggest';
import PostboyTabContext from "../context/postboyTabContext";
import { editHeader, removeHeader } from "../actions/headers";
import { standardHeaders } from "../utils/constants";

const KeyValueForm = ({ id, headerKey, headerValue }) => {
    const { dispatchHeaders } = useContext(PostboyTabContext);
    const [suggestions, setSuggestions] = useState([]);

    const getSuggestions = (value) => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
      
        return inputLength === 0 ? [] : standardHeaders.filter(lang =>
          lang.toLowerCase().slice(0, inputLength) === inputValue
        );
    };

    const getSuggestionValue = (suggestion) => suggestion;

    const renderSuggestion = (suggestion) => (
        <div>
            {suggestion}
        </div>
    );

    const onSuggestionsFetchRequested = ({ value }) => {
        setSuggestions(getSuggestions(value));
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    const handleEditHeader = ({ key, value }) => {
        dispatchHeaders(editHeader(id, key, value));
    };

    const handleRemoveHeader = () => {
        dispatchHeaders(removeHeader(id));
    };

    return (
        <div className="d-flex mb-2">
            <div className="mr-2">
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={{
                        className: 'form-control form-control-sm w-auto',
                        placeholder: 'Key',
                        value: headerKey,
                        onChange: (e, { newValue: newHeaderKey }) => {
                            handleEditHeader({ key: newHeaderKey, value: headerValue });
                        },
                        onKeyPress: (e) => {
                            if (e.charCode === 13) 
                                e.preventDefault();
                        }
                    }}
                />
            </div>

            <Form.Control 
                size="sm"
                placeholder="Value"
                className="flex-grow-1 mr-2"
                onChange={(e) => {
                    const newHeaderValue = e.target.value;
                    handleEditHeader({ key: headerKey, value: newHeaderValue })
                }}
                onKeyPress={(e) => {
                    if (e.charCode === 13) 
                        e.preventDefault();
                }}
                value={headerValue} />

            <Button 
                variant="danger" 
                size="sm"
                onClick={handleRemoveHeader}
            >
                <FontAwesomeIcon icon={faTrashAlt}/>
            </Button>
        </div>
    );
};

export default KeyValueForm;