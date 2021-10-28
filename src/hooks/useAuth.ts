import React from 'react';
import { loginSchema, registerSchema } from '../utils/validation';


export interface IRegisterUser {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  website?: string;
  company?: string;
}

export interface IUser {
  _id: number;
  firstname: string;
  lastname: string;
  email: string;
  website?: string;
  company?: string;

}

export default () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [error, setError] = React.useState()
  const [user, setUser] = React.useState<IUser>()

  /**
   * Login a user
   * @param email 
   * @param password 
   */
  const onLogin = React.useCallback(async (email: string, password: string) => {
    try {
      await loginSchema.isValid({email, password});

    } catch (error) {
      console.log(error);
      
    }
  }, [])

  /**
   * Register new user
   * @param payload 
   */
  const registerUser = React.useCallback(async (payload: IRegisterUser) => {
    try {
      await registerSchema.isValid(payload)
    } catch (error) {
      console.log(error);
      
    }
  }, [])

  const onLogOut = () => setIsLoggedIn(false)
  return [isLoggedIn, onLogin, onLogOut, registerUser, error]
}