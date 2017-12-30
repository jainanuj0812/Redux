import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility'

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => {
        if (action.id !== result.id) {
            return true;
        }
    });
    return updateObject(state, {results: updatedArray});
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case (actionTypes.STORE_RESULT):
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})
            break;
        case (actionTypes.DELETE_RESULT):
            return deleteResult(state, action);
            break;
    }

    return state;
};

export default reducer;