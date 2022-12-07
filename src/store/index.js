import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';
import { combineReducers } from 'redux';

const store = configureStore({ reducer: rootReducer });

export default store;

// HERE IS THE ORIGINAL CODE:
// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from '../reducers';
// import { combineReducers } from 'redux';
// const reducer = combineReducers({
// });
// const store = configureStore({
//     reducer
// });
// export default store;