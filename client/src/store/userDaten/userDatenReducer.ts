import { UserDatenActionTypes, USER_DATEN_DELETE, USER_DATEN_LOADING, USER_DATEN_SAVE } from "./models/actions";


  
  interface UserDatenState {
    error:string,
    firstName: string,
    lastName: string,
    admin:boolean
  }
  
  const defaultState: UserDatenState = {
    error:"",
    firstName: "",
    lastName: "",
    admin:false
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
            lastName:action.lastName,
            admin:action.admin

         };
         case   USER_DATEN_DELETE:
        
          return {  
            error:"",
              firstName:"" ,
              lastName:"",
            admin:false

           };

      default:
        return state;
    }
  };
  