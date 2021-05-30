interface Auth {
  id: string;
  isAuthenticated: boolean;
  email: string;
  password?: string;
  token?: string;
}

const initialState: Auth = {
  id: '',
  email: '',
  isAuthenticated: false
};

//@ts-ignore
const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  if (type === 'SIGN_IN') {
    const s = {
      ...state,
      ...payload,
      isAuthenticated: true
    };
    console.log(s);
    return s;
  }

  if (type === 'SIGN_OUT') {
    return initialState;
  }

  return state;
};

export default reducer;
