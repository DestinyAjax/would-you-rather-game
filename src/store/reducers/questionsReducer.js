import { GET_ALL_QUESTIONS } from "../types";
import { initialState } from "../initialStore";

const questionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: payload
            }
        default:
            return state;
    }
}

export default questionsReducer;