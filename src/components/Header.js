import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, USER_ICON } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex justify-between absolute px-8 py-2 bg-gradient-to-b w-full from-black z-10 ">
      <Link to={"/"}>
        <img
          className="w-44"
          src={LOGO_URL}
          alt="logo"
        />
      </Link>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-l-lg"
            src={USER_ICON}
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
