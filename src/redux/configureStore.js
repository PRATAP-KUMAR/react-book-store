import { combineReducers, createStore } from '@reduxjs/toolkit';

import addAndRemoveReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({ addAndRemoveReducer, checkStatusReducer });

const store = createStore(reducer);

export default store;
