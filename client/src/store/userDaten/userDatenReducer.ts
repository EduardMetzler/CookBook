import { UserDatenActionTypes, USER_DATEN_DELETE, USER_DATEN_LOADING, USER_DATEN_SAVE } from "./models/actions";


  
  interface UserDatenState {
    error:string,
    firstName: string,
    lastName: string,
  }
  
  const defaultState: UserDatenState = {
    error:"",
    firstName: "",
    lastName: ""
  };
  
  export const userDatenReducer = (
    state = defaultState,
    action: UserDatenActionTypes
  ): UserDatenState => {
    switch (action.type) {
      case   USER_DATEN_SAVE:
        
        return {  
          error:"",
            firstName:action.firstName ,
            lastName:action.lastName
         };
         case   USER_DATEN_DELETE:
        
          return {  
            error:"",
              firstName:"" ,
              lastName:""
           };

      default:
        return state;
    }
  };
  