import { Guid } from "js-guid";

const bodyReducer = (state, action) => {
    switch (action.type) {
        case "ADD_BODY":
            return [...state, { id: Guid.newGuid().toString(), key: "", type: "Text", value: "", file: null }];
        case "EDIT_BODY":
            return state.map((body) => {
                if (body.id === action.id) {
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
        case "REMOVE_BODY":
            return state.filter((body) => body.id !== action.id);
        case "CLEAR_BODY":
            return [];
        default:
            return state;
    }
};

export default bodyReducer;