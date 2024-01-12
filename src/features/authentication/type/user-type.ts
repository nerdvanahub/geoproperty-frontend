interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterUser extends ILoginUser {
  name: string;
  confirmPassword: string;
}

interface UserInformation {
  email: string;
  exp: number;
  id: number;
  name: string;
}

interface User {
  token: string;
  refresh_token: string;
  user: UserInformation;
}

interface Register {
  ID: number;
  Name: string;
  Email: string;
  Password: string;
}

interface IBaseResponse {
  status: number;
  message: string;
}

interface ILoginResponse extends IBaseResponse {
  data?: User;
}

interface IRegisterResponse extends IBaseResponse {
  data?: Register;
}

export type {
  ILoginResponse,
  ILoginUser,
  IRegisterResponse,
  IRegisterUser,
  User,
  UserInformation,
};
