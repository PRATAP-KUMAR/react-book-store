const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const initialState = [];

const addAndRemoveReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
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

export const addBookAction = (id, title) => ({
  type: ADD_BOOK,
  id,
  title,
});

export const removeBookAction = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default addAndRemoveReducer;
