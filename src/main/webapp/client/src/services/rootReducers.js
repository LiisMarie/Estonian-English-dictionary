import {combineReducers} from 'redux';
import entryReducer from './entry/entryReducer';

const rootReducer = combineReducers({
    entry: entryReducer
});

export default rootReducer