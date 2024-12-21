export interface GetAccountProps {
  token: string;
}

export interface CreateAccountProps {
  name: string;
  email: string;
  password: string;
}

export interface LoginAccountProps {
  email: string;
  password: string;
}

export interface LoginAccountResponse {
  token: string;
}

export interface CreateAccountResponse {
  message: string;
}
