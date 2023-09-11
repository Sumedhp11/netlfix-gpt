import { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANG, USER_ICON } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import { showMovieDetails } from "../utils/movieDetailSlice";
import { toggleWatchPage } from "../utils/watchlistSlice";
import { collection, addDoc } from "firebase/firestore";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const user = useSelector((store) => store.user);
  const uid = user?.uid;
  const Username = user?.displayName;
  const email = user?.email;
  // console.log(user);

  const SendUserData = async () => {
    const userRef = await addDoc(collection(db, "usersData"), {
      uid: uid,
      UserName: Username,
      email: email,
    });
    console.log("Stored successfully", userRef.id);
  };
  // console.log(WatchList);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    if (user) {
      SendUserData();
    }
  }, [user]);

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

  const handleGptSearchclick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleClick = () => {
    dispatch(showMovieDetails());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleWatchList = () => {
    dispatch(toggleWatchPage());
  };
  return (
    <div className="flex justify-between absolute  px-8 py-2 bg-gradient-to-b w-screen from-black z-10 flex-col md:flex-row  ">
      <Link to={"/browse"}>
        <img
          className="w-44 mx-auto lg:mx-0"
          src={LOGO_URL}
          alt="logo"
          onClick={handleClick}
        />
      </Link>

      {user && (
        <div className="flex justify-center lg:p-2 items-center">
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 m-2 bg-gray-900 text-white"
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleWatchList}
            className="py-2 h-12 px-4 mx-4 my-2 bg-red-800 text-white rounded-lg"
          >
            WatchList
          </button>

          <button
            onClick={handleGptSearchclick}
            className="py-2 h-12 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
          >
            {showGptSearch ? "HomePage" : "GPT Search"}
          </button>
          <img className="w-12 h-12 rounded-l-lg" src={USER_ICON} alt="" />
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
