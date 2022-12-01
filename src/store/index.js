import { createStoreHook } from 'react-redux';
import rootReducer from '../reducers';

const reducer = () => {};

const store = createStoreHook(reducer);

export default store;