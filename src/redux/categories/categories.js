const CHECK_STATUS = 'CHECK_STATUS';
const initialState = [];

const checkStatusReducer = (state = initialState, action) => {
  if (action.type === CHECK_STATUS) {
    return 'Under construction';
  }
  return state;
};

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default checkStatusReducer;
