"use client";
import { FC, useState } from "react";
import { SignUpForm } from "./signUp/SignUpForm";
import { LoginForm } from "./login";
import { signIn } from "next-auth/react";
import { OAuthProviders } from "@/types";
import { ProtectedLayouts } from "@/lib";

export const AuthPage: FC = () => {
  const [isSignUpFormShown, setIsSignUpFormShown] = useState(false);

  const loginWithGoogle = async () => {
    await signIn(OAuthProviders.Google, {
      callbackUrl: ProtectedLayouts.Dashboard,
    });
  };

  return (
    <>
      {isSignUpFormShown ? (
        <SignUpForm />
      ) : (
        <LoginForm onSingUp={() => setIsSignUpFormShown(true)} />
      )}
      <div className="flex flex-col">
        <button type="button" onClick={loginWithGoogle}>
          Sign in with Google
        </button>
      </div>
    </>
  );
};
