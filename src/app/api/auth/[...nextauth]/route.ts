import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth, { NextAuthOptions } from "next-auth";
import { api } from "../../api";
import Facebook from "next-auth/providers/facebook";
import { OAuthProviders } from "@/types";

const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const user = await api.signIn({
            email: credentials?.email,
            password: credentials?.password,
          });

          if (!user) {
            throw new Error("No such user found");
          }

          return {
            id: user.data.userId,
            email: credentials.email,
            bearer: user.data.bearer,
            isVerified: user.data.isVerified,
          };
        } catch (err) {
          throw new Error("authentication failed" + `Error message: ${err}`);
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID!,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account }) {
      console.log(account);
      if (account?.provider === "google") {
        if (!account.id_token) {
          throw new Error("No token data Google auth was provided");
        }

        try {
          await api.oAuthLogin({
            provider: OAuthProviders.Google,
            idToken: account.id_token,
          });
        } catch (err) {
          return false;
        }
      }

      return true;
    },

    async jwt({ token, user, account }) {
      if (user) {
        token.accessToken = user.bearer;
        token.isVerified = user.isVerified;
        token.userId = user.id;
      }

      if (account?.provider === OAuthProviders.Google) {
        token.isVerified = true;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.isVerified = token.isVerified;
      session.user.id = token.userId;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
