import React, {createContext, useReducer} from 'react';
//import {Usuario} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  //user: Usuario | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  singIn: () => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  //user: null,
  token: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state] = useReducer(authReducer, authInitialState);
  const singIn = () => {};
  const logOut = () => {};
  const removeError = () => {};

  return (
    <AuthContext.Provider
      value={{
        ...state,
        singIn,
        logOut,
        removeError,
      }}>
      { children }
    </AuthContext.Provider>
  );
};
