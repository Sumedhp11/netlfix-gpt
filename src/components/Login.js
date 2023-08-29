import React, { useRef, useState } from "react";
import Header from "./Header";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile } from "firebase/auth";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate()
  const name = useRef()
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
            .then(() => {
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message)
            });

         
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-" + errorMessage)
          // ..
        });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+ "-"+ errorMessage)
        });


    }



  };
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt=""
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute p-12 bg-black w-3/12 my-36 rounded-lg bg-opacity-80 text-white mx-auto right-0 left-0"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
          ref={name}
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="email"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-4 my-4 w-full  bg-gray-700"
          type="password"
          placeholder="password"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-6  w-full bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New To Netlix? Sign Up Now"
            : "Already register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
