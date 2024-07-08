"use server";

import { signIn, signOut } from "@/auth";


export const handleGithubLogin = async()=> {
  "use server";
  await signIn("github", {redirectTo: "/dashboard"});
}

export const handleGoogleLogin = async()=> {
  "use server";
  await signIn("google", {redirectTo: "/dashboard"});
}

export const handleLogout  = async()=> {
  "use server";
  await signOut( {redirectTo: "/login"});
}
