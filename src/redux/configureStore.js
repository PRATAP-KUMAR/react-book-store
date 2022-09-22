import { combineReducers, configureStore } from '@reduxjs/toolkit';
import addAndRemoveReducer from './books/books';
import checkStatusReducer from './categories/categories';

const reducer = combineReducers({ addAndRemoveReducer, checkStatusReducer });

const store = configureStore({ reducer });

export default store;
