// @flow
import {combineReducers} from 'redux'
import makeup_reducer from './makeup_reducer';

const rootReducer = combineReducers({
    makeup: makeup_reducer
});

export default rootReducer;