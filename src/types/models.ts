/* ---------===== custom props ====--------- */



/* ---------===== auth models =====--------- */

export interface Connect {
  date: Date;
  company: string;
  position: string;
  followUp: boolean;
  interview: boolean;
  response: boolean;
}
export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}
