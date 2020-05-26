import { GET_ALL_QUESTIONS, IS_POLL_SHOWN } from "../types";
import { initialState } from "../initialStore";

const questionsReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_ALL_QUESTIONS:
            return {
                ...state,
                questions: payload
            }
        case IS_POLL_SHOWN:
            return {
                ...state,
                showPollDetails: payload
            }
        default:
            return state;
    }
}

export default questionsReducer;