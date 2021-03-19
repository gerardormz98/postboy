import React, { useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import PostboyTabContext from "../context/postboyTabContext";
import PostboyContext from "../context/postboyContext";
import { setRequest } from "../actions/request";
import { editTab } from "../actions/tab";

const RequestForm = () => {
    const { tabId, request, dispatchRequest } = useContext(PostboyTabContext);
    const { dispatchTabs } = useContext(PostboyContext);

    useEffect(() => {
        dispatchTabs(editTab(tabId, request.method, request.url));
    }, [request, tabId, dispatchTabs]);

    const handleChangeMethod = (method) => {
        dispatchRequest(setRequest(method, request.url));
    };

    const handleChangeUrl = (url) => {
        dispatchRequest(setRequest(request.method, url));
    };

    return (
        <div className="d-flex mb-3">
            <Form.Control 
                as="select" 
                className="font-weight-bold mr-2 w-auto" 
                value={request.method}
                onChange={(e) => handleChangeMethod(e.target.value)}
            >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
            </Form.Control>

            <Form.Control 
                className="flex-grow-1"
                required
                placeholder="URL"
                value={request.url}
                onChange={(e) => handleChangeUrl(e.target.value)} />
        </div>
    );
};

export default RequestForm;