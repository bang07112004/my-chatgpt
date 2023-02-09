"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import logo from "../public/assets/logo.png";
import google from "../public/assets/google.png";
import github from "../public/assets/github.png";

function Login() {
  return (
    <div className="bg-[#4a9f80] min-h-screen flex flex-col items-center justify-center text-center space-y-3">
      <Image src={logo} width={250} height={250} alt="logo" />
      <div className="py-3">
        <h1 className="text-4xl font-bold select-none">
          Sign In to use ChatGPT
        </h1>
      </div>
      <div className="space-y-3 shadow-md shadow-black px-5 py-7 mb-5">
        <button
          onClick={() => signIn("google")}
          className="bg-white font-bold hover:scale-105 transition-all duration-300  text-black px-5 py-3 rounded-2xl flex items-center gap-2 text-2xl min-w-full select-none"
        >
          <Image
            src={google}
            width={60}
            height={60}
            alt="logo"
            className="bg-white m-auto "
          />
          Sign In with Google
        </button>
        <button
          onClick={() => signIn("github")}
          className="select-none bg-black hover:scale-105 transition-all duration-300 text-white font-bold px-5 py-3 rounded-2xl flex items-center gap-2 text-2xl min-w-full"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
            width={60}
            height={60}
            alt="logo"
            className="m-auto "
          />
          Sign In with Github
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="select-none hover:scale-105 transition-all duration-300 text-white font-bold flex items-center text-2xl gap-2 px-5 py-3 rounded-2xl bg-[#3a5699] min-w-full "
        >
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/450px-Facebook_icon_2013.svg.png?20161223201621"
            width={60}
            height={60}
            alt="logo"
            className="m-auto "
          />
          Sign In with Facebook
        </button>
      </div>
    </div>
  );
}

export default Login;
