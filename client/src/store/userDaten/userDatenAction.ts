
import { Dispatch } from 'redux';
import { authError } from '../auth/authAction';


import { AppActions } from '../model';

import {
    USER_DATEN_SAVE,USER_DATEN_LOADING
} from './models/actions';

export const BASE_URL = "http://localhost:5000";



const userDatenLoading = ():  AppActions => ({
  type:  USER_DATEN_LOADING,
  error:"",
  firstName: "",
  lastName: "",
 
});

const userDatenSave = (firstName:string,lastName:string):  AppActions => ({
  type:  USER_DATEN_SAVE,
  error:"",
  firstName: firstName,
  lastName: lastName,
 
});

export const userDatenDelete = ():  AppActions => ({
    type:  USER_DATEN_SAVE,
    error:"",
    firstName:"",
    lastName: "",
   
  });




export const getUserDaten = () => {

  return (dispatch: Dispatch<AppActions>) => {
 
    return fetch(`${BASE_URL}/api/userDaten/loading`,{
        method:"GET",
        headers:{ "Content-Type": "application/json",
        authorization: `Baerer ${localStorage.getItem("token")}`,},
  
    })
      .then((res) => res.json())
      .then((json) =>{
     if(json.firstName){
         console.log(json)
         dispatch(userDatenSave(json.firstName,json.lastName))

     }
     else {
         console.log(json.error)
         dispatch(authError(json.error.message))
     
  
        
     }
      })
 
  };
};


