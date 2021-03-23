import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import TabTitleForm from "./TabTitleForm";
import RequestForm from "./RequestForm";
import CardSection from "./CardSection";
import Response from './Response';
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { setTabIsLoading, setTabResponse, cleanTabResponse } from "../actions/tab";

const PostboyTabContent = () => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);
    const [ axiosSource, setAxiosSource ] = useState(axios.CancelToken.source());

    useEffect(() => {
        return () => {
            axiosSource.cancel();
        };
        // eslint-disable-next-line
    }, []);

    const tabHasFileParam = () => tab.bodyParams.some((param) => param.file && param.key && param.value);

    const handleSendRequest = () => {
        dispatchTabs(setTabIsLoading(tab.id, true));
        dispatchTabs(cleanTabResponse(tab.id));

        switch (tab.request.method) {
            case "GET":
                axios.get(tab.request.url, getAxiosConfig())
                    .then(requestSuccessHandler)
                    .catch(requestErrorHandler)
                    .finally(requestFinallyHandler);
                break;
            case "POST":
                axios.post(tab.request.url, getBodyParams(), getAxiosConfig())
                    .then(requestSuccessHandler)
                    .catch(requestErrorHandler)
                    .finally(requestFinallyHandler);
                break;
            case "PUT":
                axios.put(tab.request.url, getBodyParams(), getAxiosConfig())
                    .then(requestSuccessHandler)
                    .catch(requestErrorHandler)
                    .finally(requestFinallyHandler);
                break;
            case "PATCH":
                axios.patch(tab.request.url, getBodyParams(), getAxiosConfig())
                    .then(requestSuccessHandler)
                    .catch(requestErrorHandler)
                    .finally(requestFinallyHandler);
                break;
            case "DELETE":
                axios.delete(tab.request.url, getAxiosConfig())
                    .then(requestSuccessHandler)
                    .catch(requestErrorHandler)
                    .finally(requestFinallyHandler);
                break;
            default:
                break;
        }
    };

    const requestSuccessHandler = (res) => {
        dispatchTabs(setTabResponse(tab.id, res.status, res.data));
    };

    const requestErrorHandler = (err) => {
        if (!axios.isCancel(err)) {
            if (err.response) {
                dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
            }
            else {
                dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
            }
        }   
    };

    const requestFinallyHandler = () => {
        dispatchTabs(setTabIsLoading(tab.id, false));
    };

    const getAxiosConfig = () => ({
        headers: getHeaderParams(), 
        cancelToken: axiosSource.token
    });

    const getBodyParams = () => {

        if (!tabHasFileParam()) {
            let bodyObj = {};

            tab.bodyParams.forEach((param) => {
                if (param.key && param.value) {
                    bodyObj[param.key] = param.value;
                }
            });

            return bodyObj;
        }
        else {
            let formData = new FormData();

            tab.bodyParams.forEach((param) => {
                if (param.key && param.value) {
                    if (param.type === "File") {
                        formData.append(param.key, param.file);
                    }
                    else {
                        formData.append(param.key, param.value);
                    }
                }
            });
            
            return formData;
        }
    };

    const getHeaderParams = () => {
        let headersObj = {};

        tab.headers.forEach((param) => {
            if (param.key && param.value) {
                headersObj[param.key] = param.value;
            }
        });

        if (tabHasFileParam()) {
            headersObj['Content-Type'] = 'multipart/form-data';
        }

        return headersObj;
    };

    const handleCancelClick = () => {
        axiosSource.cancel();
        setAxiosSource(axios.CancelToken.source());
        dispatchTabs(setTabIsLoading(tab.id, false));
    };

    return (
        <div className="p-3 bg-white border-bottom border-left border-right rounded-bottom">
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleSendRequest();
            }}>
                <TabTitleForm />
                <RequestForm />
                <CardSection type="Header" title="Headers" emptyMessage="Click the button to add a new header." />
                {
                    (tab.request.method !== "GET" && tab.request.method !== "DELETE") &&
                    <CardSection type="Body" title="Body" emptyMessage="Click the button to add a new body parameter." />
                }

                <div className="mb-4 mt-2">
                    <Button type="submit" disabled={tab.isLoading}>
                    {
                        tab.isLoading ? 
                            <span>Sending...</span>
                        : 
                            <span>Send request</span>
                    }
                    </Button>
                    {   
                        tab.isLoading &&
                        <Button variant="link" onClick={handleCancelClick}>Cancel</Button>
                    }
                </div>
            </Form>
            <Response />
        </div>
    );
};

export default PostboyTabContent;