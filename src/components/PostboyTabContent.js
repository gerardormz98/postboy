import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import RequestForm from "./RequestForm";
import CardSection from "./CardSection";
import Response from './Response';
import PostboyContext from "../context/postboyContext";
import PostboyTabContext from "../context/postboyTabContext";
import { setTabIsLoading, setTabResponse, cleanTabResponse } from "../actions/tab";

const PostboyTabContent = () => {
    const { dispatchTabs } = useContext(PostboyContext);
    const { tab } = useContext(PostboyTabContext);

    const handleSendRequest = () => {
        dispatchTabs(setTabIsLoading(tab.id, true));
        dispatchTabs(cleanTabResponse(tab.id));

        switch (tab.request.method) {
            case "GET":
                axios.get(tab.request.url, { headers: getHeaderParams() }).then((res) => {
                    dispatchTabs(setTabResponse(tab.id, res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setTabIsLoading(tab.id, false));
                });
                break;
            case "POST":
                axios.post(tab.request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchTabs(setTabResponse(tab.id, res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setTabIsLoading(tab.id, false));
                });
                break;
            case "PUT":
                axios.put(tab.request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchTabs(setTabResponse(tab.id, res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setTabIsLoading(tab.id, false));
                });
                break;
            case "PATCH":
                axios.patch(tab.request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchTabs(setTabResponse(tab.id, res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setTabIsLoading(tab.id, false));
                });
                break;
            case "DELETE":
                axios.delete(tab.request.url, { headers: getHeaderParams() }).then((res) => {
                    dispatchTabs(setTabResponse(tab.id, res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchTabs(setTabResponse(tab.id, err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchTabs(setTabResponse(tab.id, "Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setTabIsLoading(tab.id, false));
                });
                break;
            default:
                break;
        }
    };

    const tabHasFileParam = () => tab.bodyParams.some((param) => param.file && param.key && param.value);

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

    return (
        <div className="p-3 bg-white border-bottom border-left border-right rounded-bottom">
            <Form onSubmit={(e) => {
                e.preventDefault();
                handleSendRequest();
            }}>
                <RequestForm />
                <CardSection type="Header" title="Headers" emptyMessage="Click the button to add a new header." />
                {
                    (tab.request.method !== "GET" && tab.request.method !== "DELETE") &&
                    <CardSection type="Body" title="Body" emptyMessage="Click the button to add a new body parameter." />
                }
                <Button className="mb-3" type="submit" disabled={tab.isLoading}>
                {
                    tab.isLoading ? 
                        <span>Sending...</span>
                    : 
                        <span>Send request</span>
                }
                </Button>
            </Form>
            <Response />
        </div>
    );
};

export default PostboyTabContent;