// export const USER_LOADED = "USER_LOADED";
// export const USER_LOADING = "USER_LOADING";
export const AUTH_ERROR = "AUTH_ERROR";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REGISRER_SUCCESS = "REGISRER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

export const ERRORS_DELETE = "ERRORS_DELETE";







interface AuthAsync {
    isAuthenticated: boolean;
    isLoading: boolean;
    error:string
  }

interface FetchRegister extends AuthAsync {
    type: typeof  REGISTER
  }
  interface FetchRegisterFail extends AuthAsync {
    type: typeof REGISTER_FAIL;
  }

  interface FetchRegisterSuccess extends AuthAsync {
    type: typeof REGISRER_SUCCESS;
  }

  interface FetchLogin extends AuthAsync {
    type: typeof LOGIN;
  }
  interface FetchLoginSuccsess extends AuthAsync {
    type: typeof LOGIN_SUCCESS
  }
  interface FetchLoginFail extends AuthAsync {
    type: typeof LOGIN_FAIL
  }
  interface FetchLogoutSuccsess extends AuthAsync {
    type: typeof LOGOUT_SUCCESS
  }

  interface FetchAuthError extends AuthAsync {
    type: typeof AUTH_ERROR
  }

  interface FetchErrorsDelete extends AuthAsync {
    type: typeof ERRORS_DELETE
  }


export type AuthActionTypes = FetchRegister | 
FetchRegisterFail |
 FetchRegisterSuccess|
 FetchLogin|FetchLoginSuccsess|
 FetchLoginFail|
 FetchLogoutSuccsess|
 FetchAuthError|
 FetchErrorsDelete

