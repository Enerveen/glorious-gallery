const initialState = 'Creators';

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCATION':
      return action.payload;
    default:
      return state;
  }
};

export default locationReducer;
