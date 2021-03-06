import { Guid } from "js-guid";

export const defaultTabTitle = "Untitled request";
export const defaultTabURL = "https://jsonplaceholder.typicode.com/posts";

export const getTabResponseDefaultState = () => ({ 
    statusCode: 0,
    reponseData: {},
    errorMessage: null
});

export const getTabDefaultState = (hideExampleURL) => ({ 
    id: Guid.newGuid().toString(), 
    title: hideExampleURL ? defaultTabTitle : defaultTabURL,
    isCustomTitle: false,
    isLoading: false, 
    request: {
        method: 'GET',
        url: hideExampleURL ? '' : defaultTabURL
    },
    headers: [],
    bodyParams: [],
    response: getTabResponseDefaultState()
});

export const getTabHeaderDefaultState = () => ({ 
    id: Guid.newGuid().toString(), 
    key: "", 
    value: "" 
});

export const getTabBodyParamDefaultState = () => ({ 
    id: Guid.newGuid().toString(), 
    key: "", 
    type: "Text", 
    value: "", 
    file: null 
});