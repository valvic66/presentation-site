import { createStore } from 'redux';
import { addItem } from '../reducers/fetchItems';

export const store = createStore(addItem);
