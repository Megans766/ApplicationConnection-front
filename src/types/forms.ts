/* ---------==== custom forms ====--------- */

export interface AppEntryFormData {
  id?: number;
  date?: string;
  company: string;
  position: string;
  followUp: string;
  interview: string;
  response: string;
}

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
