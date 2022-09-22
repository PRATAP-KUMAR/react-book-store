import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_BOOKS = 'GET_BOOKS';
const MY_ACTION = 'MY_ACTION';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XSh4538RYmdWSg0sNo8j/books';

const initialState = [];

const addAndRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [[...state[0], action.payload]];

    case `${REMOVE_BOOK}/fulfilled`:
      return [[...state[0].filter((book) => book.item_id.toString()
        !== action.payload.toString())]];

    case `${GET_BOOKS}/fulfilled`:
      return [...state, action.payload];

    case MY_ACTION:
      return [[...state[0].filter((book) => book.item_id.toString()
        !== action.payload.toString())]];

    default:
      return state;
  }
};

export const addBookAction = createAsyncThunk(ADD_BOOK, async (obj) => {
  await fetch(API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return obj;
});

export const removeBookAction = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await fetch(`${API}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

export const myAction = (payload) => ({
  type: MY_ACTION,
  payload,
});

export const getBooksFromAPIAction = createAsyncThunk(GET_BOOKS, async () => {
  const response = await fetch(API);
  const obj = await response.json();
  const data = Object.keys(obj).map((id) => ({
    item_id: id,
    ...obj[id][0],
  }));
  return data;
});

export default addAndRemoveReducer;
