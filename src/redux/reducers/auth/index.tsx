interface Auth {
  id: string;
  email: string;
  password?: string;
  token?: string;
}

const initialState: Auth = {
  id: '',
  email: ''
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'SIGN_IN') {
    return {
      ...state,
      id: payload.id,
      email: payload.email
    };
  }

  if (type === 'SIGN_OUT') {
    return initialState;
  }

  return state;
};

export default reducer;
