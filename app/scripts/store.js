import { createStore, combineReducers } from 'redux';
import searchReducer from './reducers/searchReducer';

const rootReducer = combineReducers({
    search: searchReducer
});

export default createStore(rootReducer);