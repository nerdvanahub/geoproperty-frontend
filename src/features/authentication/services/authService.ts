import { AxiosInstance } from "axios";
import axiosIntance from "../../../lib/axios";
import { ILoginResponse } from "../type/user-type";

type TLoginParams = {
  email: string;
  password: string;
};

type TRegisterParams = TLoginParams & {
  name: string;
};

class AuthService {
  axiosIntance: AxiosInstance;

  constructor() {
    this.axiosIntance = axiosIntance;
  }
  public async login({
    email,
    password,
  }: TLoginParams): Promise<ILoginResponse> {
    const reesponse = await this.axiosIntance.post<ILoginResponse>(
      "auth/login",
      {
        email,
        password,
      }
    );

    return reesponse.data;
  }
  public async register({
    email,
    password,
    name,
  }: TRegisterParams): Promise<ILoginResponse> {
    return this.axiosIntance.post("/auth/register", {
      email,
      password,
      name,
    });
  }
}

const authService = new AuthService();
export default authService;
