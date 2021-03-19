import { Guid } from "js-guid";

export const getTabResponseDefaultState = () => ({ 
    statusCode: 0,
    reponseData: {},
    errorMessage: null
});

export const getTabDefaultState = () => ({ 
    id: Guid.newGuid().toString(), 
    title: "New request", 
    isLoading: false, 
    request: {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts'
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