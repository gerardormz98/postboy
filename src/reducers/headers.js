import { Guid } from "js-guid";

const headersReducer = (state, action) => {
    switch (action.type) {
        case "ADD_HEADER":
            return [...state, { id: Guid.newGuid().toString(), key: "", value: "" }];
        case "EDIT_HEADER":
            return state.map((header) => {
                if (header.id === action.id) {
                    return { 
                        id: header.id, 
                        key: action.key, 
                        value: action.value 
                    };
                }

                return header;
            });
        case "REMOVE_HEADER":
            return state.filter((header) => header.id !== action.id);
        case "CLEAR_HEADER":
            return [];
        default:
            return state;
    }
};

export default headersReducer;