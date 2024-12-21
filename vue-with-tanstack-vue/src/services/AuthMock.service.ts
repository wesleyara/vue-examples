/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import {
  CreateAccountProps,
  GetAccountProps,
  LoginAccountProps,
} from "./models/auth-service.model";

export class AuthMockService {
  private readonly accountMock = {
    id: "d180f8bf-e40d-465d-8f72-f7e86ca8835b",
    email: "teste@gmail.com",
    name: "teste",
    max_amount: 0,
  };

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async createAccount(data: CreateAccountProps): Promise<any> {
    try {
      await this.delay(1000);

      return { message: "Account created", ...data };
    } catch (error) {
      const err = error as AxiosError & {
        response: { data: { message: string } };
      };

      throw new Error(err.response.data.message);
    }
  }

  async loginAccount(data: LoginAccountProps): Promise<any> {
    try {
      await this.delay(1000);

      return { token: "fakeAccessToken", ...data };
    } catch (error) {
      const err = error as AxiosError & {
        response: { data: { message: string } };
      };

      throw new Error(err.response.data.message);
    }
  }

  async getAccount({ token }: GetAccountProps): Promise<any> {
    try {
      await this.delay(1000);

      console.log("token", token);
      return this.accountMock;
    } catch (error) {
      const err = error as AxiosError & {
        response: { data: { message: string } };
      };

      throw new Error(err.response.data.message);
    }
  }
}
