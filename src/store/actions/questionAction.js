import { CREATE_QUESTION_FAILED, GET_ALL_QUESTIONS, GET_QUESTIONS_FAILED } from "../types";
import { _saveQuestion, _getQuestions, _saveQuestionAnswer } from "../../api";
import { isLoading } from "../actions/uiActions";

export const createNewQuestion = payload => {
    return async dispatch => {
        try {
            dispatch(isLoading(true));
            await _saveQuestion(payload);
        }
        catch(error) {
            dispatch({ type: CREATE_QUESTION_FAILED, error });
        }
        finally {
            dispatch(isLoading(false));
        }
    }
}

export const getAllQuestions = () => {
    return async dispatch => {
        try {
            dispatch(isLoading(true));
            const questions = await _getQuestions();
            dispatch({ type: GET_ALL_QUESTIONS, payload: questions });
        }
        catch(error) {
            dispatch({ type: GET_QUESTIONS_FAILED, error });
        }
        finally {
            dispatch(isLoading(false));
        }
    }
}

export const saveQuestionAnswer = payload => {
    return async dispatch => {
        try {
            await _saveQuestionAnswer(payload);
        }
        catch(err) {}
    }
}