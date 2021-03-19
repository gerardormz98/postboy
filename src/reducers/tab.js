import { Guid } from "js-guid";

/*

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

*/

const tabReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TAB":
            return [...state, { id: Guid.newGuid().toString(), method: "GET", title: "New request", isLoading: false }];
        case "EDIT_TAB":
            return state.map((tab) => {
                if (tab.id === action.id) {
                    const tabLimitChars = 20;
                    const title = action.title.substring(0, tabLimitChars) + (action.title.length > tabLimitChars ? "..." : "")

                    return { 
                        id: tab.id, 
                        method: action.method, 
                        title,
                        isLoading: tab.isLoading
                    };
                }

                return tab;
            });
        case "REMOVE_TAB":
            return state.filter((tab) => tab.id !== action.id);
        case "SET_IS_LOADING_TAB":
            return state.map((tab) => {
                if (tab.id === action.id) {
                    return { 
                        ...tab,
                        isLoading: action.isLoading
                    };
                }

                return tab;
            });
        default:
            return state;
    }
};

export default tabReducer;