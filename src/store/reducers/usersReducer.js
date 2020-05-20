import { initialState } from "../initialStore";

const usersReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}

export default usersReducer