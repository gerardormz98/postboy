import { isJsonParsable } from "../utils/utils";

const responseReducer = (state, action) => {
    switch (action.type) {
        case "SET_RESPONSE":
            return { 
                statusCode: action.statusCode,
                responseData: isJsonParsable(action.responseData) ? action.responseData : { message: action.responseData },
                errorMessage: action.errorMessage
            };
        default:
            return state;
    }
};

export default responseReducer;