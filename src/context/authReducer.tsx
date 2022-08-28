export interface AuthState {
  status: 'checking' | 'authenticated' | 'not-authenticated';
  token: string | null;
  errorMessage: string;
  // user: Usuario | null;
}

type AuthAction =
  | {type: 'SingIn'; payload: {token: string /*user: Usuario*/}}
  | {type: 'addError'; payload: string}
  | {type: 'removeError'}
  | {type: 'notAuthenticated'}
  | {type: 'logout'};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'addError':
      return {
        ...state,
        //user: null
        errorMessage: action.payload,
        token: null,
        status: 'not-authenticated',
      };
    case 'removeError':
      return {
        ...state,
        //user: null
        errorMessage: '',
      };
    case 'SingIn':
        return {
            ...state,
            errorMessage: '',
            status: 'authenticated',
            token: action.payload.token,
            //user: action.payload.user,
        };
    case 'logout':
    case 'notAuthenticated':
        return {
            ...state,
            status: 'not-authenticated',
            token: null,
            //user: null,
        };
    default:
      return state;
  }
};
