import { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    isVerified?: boolean;
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    bearer?: string;
    isVerified?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    isVerified?: boolean;
  }
}
