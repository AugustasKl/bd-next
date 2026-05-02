import { OAuthProviders } from "@/types";

export interface CredentialsParams {
  email: string;
  password?: string;
  provider?: string; //update this part later
  providerAccountId?: string;
  username?: string;
}

export interface AuthInfo {
  userId: string;
  bearer: string;
  isVerified: boolean;
}

export interface UserData {
  data: AuthInfo;
}

export interface OAuthParams {
  provider: OAuthProviders;
  idToken: string;
}
