const requestReducer = (state, action) => {
    switch (action.type) {
        case "SET_REQUEST":
            return { 
                method: action.method, 
                url: action.url
            };
        default:
            return state;
    }
};

export default requestReducer;