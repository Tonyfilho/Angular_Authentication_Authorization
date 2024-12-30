export interface IUserLogin {
  user: {
    email: string;
    username: string;
  };
}
export interface IUserRegistration {
 
    email: string;
    username: string;
    password: string;
 
}


export interface IUserAutenticated {
  email:string;
  token:string;
  username:string;
}