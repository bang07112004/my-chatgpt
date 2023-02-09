"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
import google from "../public/assets/google.png";
import github from "../public/assets/github.png";

function Login() {
  return (
    <div className="bg-[#4a9f80] h-screen flex flex-col items-center justify-center text-center space-y-3">
      <Image src={logo} width={300} height={300} alt="logo" />
      <button
        onClick={() => signIn("google")}
        className="bg-blue-400 text-white px-5 py-3 rounded-2xl flex items-center gap-2 text-2xl"
      >
        <Image
          src={google}
          width={45}
          height={45}
          alt="logo"
          className="bg-white p-1"
        />
        Sign In with Google
      </button>
      <button
        onClick={() => signIn("github")}
        className="bg-white px-5 py-3 rounded-2xl flex items-center gap-2 text-2xl"
      >
        <Image src={github} width={45} height={45} alt="logo" />
        Sign In with Github
      </button>
    </div>
  );
}

export default Login;
