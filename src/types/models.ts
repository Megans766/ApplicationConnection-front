/* ---------===== custom props ====--------- */

export interface Connect {
  id: number;
  date?: string;
  company: string;
  position: string;
  followUp?: string;
  interview?: string;
  response?: string;
  profileId?: { 
    id: number;
    name: string;
    photo: string;
  }
}

/* ---------===== auth models =====--------- */

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
