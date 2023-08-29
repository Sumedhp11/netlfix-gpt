import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=> store.user);

  const handleSignOut = () =>{
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
         navigate("/error");
      });
  }
  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b w-full from-black z-10">
      <Link to={"/"}>
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-l-lg"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt=""
          />
          <button
            onClick={handleSignOut}
            className=" bg-red-700 w- h-12 p-1 font-bold text-white rounded-r-lg"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
