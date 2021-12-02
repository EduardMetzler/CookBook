
import { Dispatch } from 'redux';


import { AppActions } from '../model';

import {
  REGISTER_FAIL,

    REGISTER,
    REGISRER_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    AUTH_ERROR
} from './models/actions';

export const BASE_URL = "http://localhost:5000";



const registerFormSend = ():  AppActions => ({
  type:  REGISTER,
     isAuthenticated: false,
    isLoading: false,
    error:""
 
});

const registerFail = (error:string):  AppActions => ({
  type: REGISTER_FAIL,
     isAuthenticated: false,
    isLoading: false,
    error:error
 
});

const registerSuccess = ():  AppActions => ({
  type:  REGISRER_SUCCESS ,
     isAuthenticated: false,
    isLoading: false,
    error:""
 
});


const login = ():  AppActions => ({
  type:  LOGIN ,
     isAuthenticated: false,
    isLoading: false,
    error:""
 
});

export const loginSuccess = ():  AppActions => ({
  type:  LOGIN_SUCCESS ,
     isAuthenticated: false,
    isLoading: false,
    error:""
 
});

export const loginFail = (error:string):  AppActions => ({
  type:  LOGIN_FAIL ,
     isAuthenticated: false,
    isLoading: false,
    error:error
 
});

export const logoutSuccess = ():  AppActions => ({
  type:  LOGOUT_SUCCESS ,
     isAuthenticated: false,
    isLoading: false,
    error:""
 
});

export const authError = (error:string):  AppActions => ({
  type:  AUTH_ERROR ,
     isAuthenticated: false,
    isLoading: false,
    error:error
 
});


export const newUserRegister = (firstName:string, lastName:string, email:string, password:string, repeatedPassword:string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(registerFormSend());
    return fetch(`${BASE_URL}/api/register`,{
        method:"POST",
        headers:{ "Content-Type": "application/json",},
        body:JSON.stringify({firstName, lastName, email, password, repeatedPassword})
    })
      .then((res) => res.json())
      .then((json) =>{
     if(json.token){
        localStorage.setItem('token',json.token);
   
        dispatch(registerSuccess())
    
     }
     else {
         console.log(json.error)
         dispatch(registerFail(json.error.message))
  
        
     }
      })
 
  };
};


export const userLogin = ( email:string, password:string) => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch(login());
    return fetch(`${BASE_URL}/api/login`,{
        method:"POST",
        headers:{ "Content-Type": "application/json",},
        body:JSON.stringify({ email, password, })
    })
      .then((res) => res.json())
      .then((json) =>{
     if(json.token){
        localStorage.setItem('token',json.token);
   console.log(json)
        dispatch(loginSuccess())
    
     }
     else {
         console.log(json.error)
         dispatch(loginFail(json.error.message))
  
        
     }
      })

  };
};
