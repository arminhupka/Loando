const initialState = {};

const userReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'USER_LOGIN': {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
