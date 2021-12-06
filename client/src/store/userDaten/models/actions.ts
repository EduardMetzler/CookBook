export const USER_DATEN_LOADING = "USER_DATEN_LOADING";
export const USER_DATEN_SAVE = "USER_DATEN_SAVE";
export const USER_DATEN_DELETE = "USER_DATEN_DELETE";









interface UserDatenAsync {
    firstName: string,
    lastName: string,
    error:string,
    admin:boolean
  }


  interface FetchUserDatenLoading extends UserDatenAsync {
    type: typeof USER_DATEN_LOADING
  }
  interface FetchUserDatenSave extends UserDatenAsync {
    type: typeof  USER_DATEN_SAVE
  }

  interface FetchUserDatenDelete extends UserDatenAsync {
    type: typeof  USER_DATEN_DELETE
  }



export type UserDatenActionTypes = FetchUserDatenLoading  |  FetchUserDatenSave|FetchUserDatenDelete
