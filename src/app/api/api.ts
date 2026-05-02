import { config } from "../config";
import {
  AuthInfo,
  CredentialsParams as CredentialsParams,
  OAuthParams,
  UserData,
} from "./types";

// reiks pasikeist i axios + react query atitinkamai
const createApi = ({
  baseUrl,
}: //   isDevelopment,
{
  baseUrl: string;
  //   isDevelopment: boolean;
}) => {
  async function signUp(params: CredentialsParams) {
    const url = `${baseUrl}/signup`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: params.email,
        password: params.password,
        username: params.username,
        provider: params.provider,
        providerId: params.providerAccountId,
      }),
    });

    const data = await res.json();

    return data;
  }

  async function signIn(params: CredentialsParams): Promise<UserData> {
    const url = `${baseUrl}/signin`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: params.email,
        password: params.password,
        provider: params.provider,
        username: params.username,
        providerAccountId: params.providerAccountId,
      }),
    });

    if (!res.ok) {
      throw new Error("Something went wrong with signIn");
    }

    const data = await res.json();

    console.log(data)

    return data;
  }

  async function oAuthLogin(params: OAuthParams): Promise<AuthInfo> {
    const url = `${baseUrl}/oauth-login`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        provider: params.provider,
        idToken: params.idToken,
      }),
    });

    const { data } = await res.json();

    return data;
  }

  return {
    signUp,
    signIn,
    oAuthLogin,
  };
};

export const api = createApi({
  baseUrl: config.apiUrl,
  //   isDevelopment: config.appEnv === AppEnvEnum.Development,
});
