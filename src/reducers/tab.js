import { getTabDefaultState, getTabHeaderDefaultState, getTabBodyParamDefaultState, getTabResponseDefaultState } from "../utils/defaults";
import { isJsonParsable } from "../utils/utils";

/*------------------------TAB STATE EXAMPLE------------------------
[
    {
        id: '1',
        title: 'New Request',
        isLoading: false,
        request: {
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts'
        },
        headers: [
            {
                id: '1',
                key: 'Accept',
                value: 'Test'
            }
        ],
        bodyParams: [
            {
                id: '1',
                key: 'Test',
                type: 'Text',
                value: '123',
                file: null
            }
        ],
        response: {
            statusCode: 0,
            reponseData: {},
            errorMessage: null
        }
    }
]
-------------------------------------------------------------------*/


const tabReducer = (state, action) => {
    switch (action.type) {

        // Tab

        case "ADD_TAB":
            return [...state, getTabDefaultState()];
        case "SET_TAB_TITLE":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    const tabLimitChars = 20;
                    const title = action.title.substring(0, tabLimitChars) + (action.title.length > tabLimitChars ? "..." : "")
                    return { 
                        ...tab,
                        title
                    };
                }
                return tab;
            });
        case "SET_TAB_IS_LOADING":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        isLoading: action.isLoading
                    };
                }
                return tab;
            });
        case "REMOVE_TAB":
            return state.filter((tab) => tab.id !== action.tabId);
        case "RESET_TABS":
            return [getTabDefaultState()];

        // Request

        case "SET_TAB_REQUEST":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        request: {
                            method: action.method,
                            url: action.url
                        }
                    };
                }
                return tab;
            });
        
        // Headers

        case "ADD_TAB_HEADER":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        headers: [...tab.headers, getTabHeaderDefaultState()]
                    };
                }
                return tab;
            });
        case "EDIT_TAB_HEADER":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    const headers = tab.headers.map((header) => {
                        if (header.id === action.headerId) {
                            return { 
                                id: header.id, 
                                key: action.key, 
                                value: action.value,
                            };
                        }
                        return header;
                    });

                    return { 
                        ...tab,
                        headers
                    };
                }
                return tab;
            });
        case "REMOVE_TAB_HEADER":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    const headers = tab.headers.filter((header) => header.id !== action.headerId);

                    return { 
                        ...tab,
                        headers
                    };
                }
                return tab;
            });
        case "CLEAR_TAB_HEADER":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        headers: []
                    };
                }
                return tab;
            });

        // Body
        
        case "ADD_TAB_BODY":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        bodyParams: [...tab.bodyParams, getTabBodyParamDefaultState()]
                    };
                }
                return tab;
            });

        case "EDIT_TAB_BODY":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    const bodyParams = tab.bodyParams.map((body) => {
                        if (body.id === action.bodyId) {
                            return { 
                                id: body.id, 
                                key: action.key, 
                                type: action.valueType, 
                                value: action.value,
                                file: action.file
                            };
                        }
                        return body;
                    });

                    return { 
                        ...tab,
                        bodyParams
                    };
                }
                return tab;
            });
        case "REMOVE_TAB_BODY":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    const bodyParams = tab.bodyParams.filter((body) => body.id !== action.bodyId);

                    return { 
                        ...tab,
                        bodyParams
                    };
                }
                return tab;
            });
        case "CLEAR_TAB_BODY":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        bodyParams: []
                    };
                }
                return tab;
            });

        // Response

        case "SET_TAB_RESPONSE":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        response: {
                            statusCode: action.statusCode,
                            responseData: isJsonParsable(action.responseData) ? action.responseData : { message: action.responseData },
                            errorMessage: action.errorMessage
                        }
                    };
                }
                return tab;
            });
        case "CLEAN_TAB_RESPONSE":
            return state.map((tab) => {
                if (tab.id === action.tabId) {
                    return { 
                        ...tab,
                        response: getTabResponseDefaultState()
                    };
                }
                return tab;
            });
        
        default:
            return state;
    }
};

export default tabReducer;