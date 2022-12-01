import { createStoreHook } from 'react-redux';
import rootReducer from '../reducers';

const store = createStoreHook(rootReducer);

export default store;