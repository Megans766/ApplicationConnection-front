/* ---------==== custom forms ====--------- */
// export interface AppEntryFormData {
//   date: Date;
//   company: string;
//   position: string;
//   followUp: boolean;
//   interview: boolean
//   response: boolean;
//   profileId: number;
// }

/* ---------===== auth forms =====--------- */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConf: string;
}

export interface ChangePasswordFormData {
  oldPassword: string;
  newPassword: string;
  newPasswordConf: string;
}

export interface PhotoFormData {
  photo: File | null;
}
