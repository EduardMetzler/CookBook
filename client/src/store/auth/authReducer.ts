import { AuthActionTypes,REGISTER_FAIL, LOGIN_FAIL, AUTH_ERROR, LOGOUT_SUCCESS, REGISTER, REGISRER_SUCCESS, LOGIN_SUCCESS, LOGIN } from './models/actions';
  

  
  interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    error:string
  }
  
  const defaultState: AuthState = {
    isAuthenticated:false,
    isLoading: false,
    error:""
  };
  
  export const authReducer = (
    state = defaultState,
    action: AuthActionTypes
  ): AuthState => {
    switch (action.type) {
      case  REGISTER:
        
        return {    isAuthenticated:false,
            isLoading: true,
          error:"" };
     case  LOGIN:
        return {    isAuthenticated:false,
             isLoading: true,
            error:"" };
          case LOGIN_FAIL:
            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGOUT_SUCCESS:
              localStorage.removeItem('token');
            
            return {    
              isAuthenticated:false,
                isLoading: false,
              error:action.error };

              
              case LOGIN_SUCCESS:
              case REGISRER_SUCCESS:
         
                
                return {    
                  isAuthenticated:true,
                    isLoading: false,
                  error:"" };
 
      default:
        return state;
    }
  };
  