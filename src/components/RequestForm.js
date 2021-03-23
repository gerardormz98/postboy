import React, { useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { setTabRequest, setTabTitle } from "../actions/tab";

const RequestForm = () => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);

    useEffect(() => {
        if (!tab.isCustomTitle) {
            dispatchTabs(setTabTitle(tab.id, tab.request.url));
        }
        // eslint-disable-next-line
    }, [tab.request.url]);

    const handleChangeMethod = (method) => {
        dispatchTabs(setTabRequest(tab.id, method, tab.request.url));
    };

    const handleChangeUrl = (url) => {
        url = url.replace(/\s/g, '');
        dispatchTabs(setTabRequest(tab.id, tab.request.method, url));
    };

    return (
        <div className="d-flex mb-3">
            <Form.Control 
                as="select" 
                className="font-weight-bold mr-2 w-auto" 
                value={tab.request.method}
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
                value={tab.request.url}
                onChange={(e) => handleChangeUrl(e.target.value)} />
        </div>
    );
};

export default RequestForm;