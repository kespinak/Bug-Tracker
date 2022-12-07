import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { combineReducers } from 'redux';

const reducer = combineReducers({

});

const store = configureStore({
    reducer
});

export default store;