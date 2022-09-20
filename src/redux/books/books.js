import { v4 as uuid4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
export const initialState = [
  {
    id: uuid4(),
    title: 'book1',
    author: 'author1',
  },
  {
    id: uuid4(),
    title: 'book2',
    author: 'author2',
  },
  {
    id: uuid4(),
    title: 'book3',
    author: 'author3',
  },
  {
    id: uuid4(),
    title: 'book4',
    author: 'author4',
  },
];

const addAndRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return () => {
        let temp = state;
        temp = temp.filter((ID) => ID !== action.id);
        return temp;
      };
    default:
      return state;
  }
};

export const addBookAction = (title, author) => ({
  type: ADD_BOOK,
  id: uuid4(),
  title,
  author,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default addAndRemoveReducer;
