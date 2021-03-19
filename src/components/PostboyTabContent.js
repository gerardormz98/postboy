import React, { useReducer, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import RequestForm from "./RequestForm";
import CardSection from "./CardSection";
import Response from './Response';
import PostboyTabContext from "../context/postboyTabContext";
import PostboyContext from "../context/postboyContext";
import RequestReducer from "../reducers/request";
import HeadersReducer from "../reducers/headers";
import BodyReducer from "../reducers/body";
import ResponseReducer from "../reducers/response";
import { setResponse } from "../actions/response";
import { setIsLoadingTab } from "../actions/tab";

const PostboyTabContent = ({ tabId }) => {
    const requestDefaultState = { method: 'GET', url: 'https://jsonplaceholder.typicode.com/posts' };
    const responseDefaultState = { statusCode: null, responseData: {} };

    const [request, dispatchRequest] = useReducer(RequestReducer, requestDefaultState);
    const [headers, dispatchHeaders] = useReducer(HeadersReducer, []);
    const [bodyParams, dispatchBodyParams] = useReducer(BodyReducer, []);
    const [response, dispatchResponse] = useReducer(ResponseReducer, responseDefaultState);

    const { tabs, dispatchTabs } = useContext(PostboyContext);

    const handleSendRequest = () => {
        dispatchTabs(setIsLoadingTab(tabId, true));
        dispatchResponse(setResponse(null, {}));

        switch (request.method) {
            case "GET":
                axios.get(request.url, { headers: getHeaderParams() }).then((res) => {
                    dispatchResponse(setResponse(res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchResponse(setResponse(err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchResponse(setResponse("Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setIsLoadingTab(tabId, false));
                });
                break;
            case "POST":
                axios.post(request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchResponse(setResponse(res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchResponse(setResponse(err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchResponse(setResponse("Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setIsLoadingTab(tabId, false));
                });
                break;
            case "PUT":
                axios.put(request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchResponse(setResponse(res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchResponse(setResponse(err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchResponse(setResponse("Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setIsLoadingTab(tabId, false));
                });
                break;
            case "PATCH":
                axios.patch(request.url, getBodyParams(), { headers: getHeaderParams() }).then((res) => {
                    dispatchResponse(setResponse(res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchResponse(setResponse(err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchResponse(setResponse("Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setIsLoadingTab(tabId, false));
                });
                break;
            case "DELETE":
                axios.delete(request.url, { headers: getHeaderParams() }).then((res) => {
                    dispatchResponse(setResponse(res.status, res.data));
                }).catch((err) => {
                    if (err.response) {
                        dispatchResponse(setResponse(err.response.status, err.response.data, err.message));
                    }
                    else {
                        dispatchResponse(setResponse("Unknown", {}, err.message || "An error has ocurred"));
                    }
                }).finally(() => {
                    dispatchTabs(setIsLoadingTab(tabId, false));
                });
                break;
            default:
                break;
        }
    };

    const hasFileParam = () => bodyParams.some((param) => param.file && param.key && param.value);
    const getCurrentTab = () => tabs.find((tab) => tab.id === tabId);

    const getBodyParams = () => {

        if (!hasFileParam()) {
            let bodyObj = {};

            bodyParams.forEach((param) => {
                if (param.key && param.value) {
                    bodyObj[param.key] = param.value;
                }
            });

            return bodyObj;
        }
        else {
            let formData = new FormData();

            bodyParams.forEach((param) => {
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

        headers.forEach((param) => {
            if (param.key && param.value) {
                headersObj[param.key] = param.value;
            }
        });

        if (hasFileParam()) {
            headersObj['Content-Type'] = 'multipart/form-data';
        }

        return headersObj;
    };

    return (
        <PostboyTabContext.Provider value={{
            tabId,
            request,
            dispatchRequest,
            headers,
            dispatchHeaders,
            bodyParams,
            dispatchBodyParams,
            response,
            dispatchResponse
        }}>
            <div className="p-3 bg-white border-bottom border-left border-right rounded-bottom">
                <Form onSubmit={(e) => {
                    e.preventDefault();
                    handleSendRequest();
                }}>
                    <RequestForm />
                    <CardSection type="Header" title="Headers" emptyMessage="Click the button to add a new header." />
                    {
                        (request.method !== "GET" && request.method !== "DELETE") &&
                        <CardSection type="Body" title="Body" emptyMessage="Click the button to add a new body parameter." />
                    }
                    <Button className="mb-3" type="submit" disabled={getCurrentTab().isLoading}>
                    {
                        getCurrentTab().isLoading ? 
                            <span>Sending...</span>
                        : 
                            <span>Send request</span>
                    }
                    </Button>
                </Form>
                <Response />
            </div>
        </PostboyTabContext.Provider>
    );
};

export default PostboyTabContent;