// @flow
import {MAKEUP_FINISHED} from '../actions/makeup_action';

const initialState = {
    convertedCode: '',
    resourceCode: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MAKEUP_FINISHED:
            return {
                ...state,
                convertedCode: action.payload.convertedCode,
                resourceCode: action.payload.resourceCode
            };
        default:
            return state;
    }
}