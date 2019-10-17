import { items } from './reducers';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  items,
})