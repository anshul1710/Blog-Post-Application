import {combineReducers} from 'redux';
import getPostReducer from './getPostReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  posts:getPostReducer,
  users:usersReducer
});
