import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const[isSignInForm,setIsSignInForm] = useState(true)
  const toggleSignIn = ()=>{
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form className=" absolute p-12 bg-black w-3/12 my-36 rounded-lg bg-opacity-80 text-white mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (<input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />)}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full  bg-gray-700"
          type="password"
          placeholder="password"
        />
        <button className="p-4 my-6  w-full bg-red-700 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm ? "New To Netlix? Sign Up Now" : "Already register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
