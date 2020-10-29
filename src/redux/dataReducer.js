const initialState = { users: [] };

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return { ...state, users: action.payload };
    default:
      return state;
  }
};

export default dataReducer;
