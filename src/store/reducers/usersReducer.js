import { initialState } from "../initialStore";
import { GET_USERS_SUCCESS, AUTHENTICATE_USER } from "../types/index";

const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_USERS_SUCCESS:
            return {
                ...state,
                users: payload
            }
        case AUTHENTICATE_USER:
            return {
                ...state,
                authUser: payload
            }
        default:
            return state;
    }
}

export default usersReducer