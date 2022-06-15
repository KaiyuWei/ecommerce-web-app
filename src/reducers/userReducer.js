
export function userReducer(state=null, action) {
    switch(action.type) {
        case "LOGGED_IN_USER": // case needs strings, so don't forget the double quotations
            return action.payload;
        case "LOGOUT":
            return action.payload;        
        default:
            return state;
    }
};

