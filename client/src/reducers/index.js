import { combineReducers } from 'redux';
import dealReducer from './dealReducer';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  dealReducer,
  commentReducer
});

export default rootReducer;