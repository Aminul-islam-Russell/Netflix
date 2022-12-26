import { auth } from "../utils/firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/slices/authSlice";
import { useState } from "react";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function LoginPage() {
  const user = useSelector(selectUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const continueWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  // const continueWithFacebook = async () => {
  //   const provider = new firebase.auth.FacebookAuthProvider();
  //   auth.signInWithPopup(provider).catch((err) => alert(err.message));
  // };

  // const continueWithTwitter = async () => {
  //   const provider = new firebase.auth.TwitterAuthProvider();
  //   auth.signInWithPopup(provider).catch((err) => alert(err.message));
  // };

  const logout = () => {
    auth.signOut()
    .catch((err) => alert(err.message));
  };

  const emailSignup = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  const emailLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div className="container mx-auto md:w-5/6 pt-5 pb-7 px-2 md:px-0">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {user ? (
            <div className="max-w-md text-center w-full space-y-8">
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
                {user?.displayName}
              </h2>
              <p className="text-sm text-gray-600">{user?.email}</p>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                onClick={logout}
              >
                <span className="ml-3 text-indigo-700 font-semibold">
                  Logout
                </span>
              </button>
            </div>
          ) : (
            <div className="max-w-md w-full space-y-8">
              <div className="text-center">
                <div className="flex items-center justify-center">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-12 h-12 text-blue-500"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <span className="text-sm text-black ">
                  or{" "}
                  <a href="#" className="text-blue-500">
                    register a new account
                  </a>
                </span>
              </div>
              <form
                onSubmit={emailSignup}
                className="mt-8 space-y-6"
                action="#"
                method="POST"
               >
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="sr-only">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a
                      href="#!"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                      <BsFillShieldLockFill
                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        aria-hidden="true"
                      />
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
              {/* Social login */}
              <div className="mt-5">
                <div className="text-center">
                  <p className="text-sm leading-5 text-gray-500">
                    Or sign in with
                  </p>
                </div>

                {/* <div className="mt-5">
                                <button
                                    type="button"
                                    className="flex items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                                    onClick={continueWithGoogle}
                                >
                                    <FcGoogle size={30} />
                                    <span className="ml-3 text-indigo-700 font-semibold">Continue with Google</span>
                                </button>
                            </div> */}

                {/*  */}

                {/* <div className="mt-2 flex items-center w-full "> */}
                <div className="flex items-center w-full mt-2 ">
                  <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                    <button
                      type="button"
                      // className=" items-center justify-center w-full p-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 bg-opacity-10 hover:bg-opacity-20"
                      className="appearance-none items-center justify-center  w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                      onClick={continueWithGoogle}
                    >
                      <FcGoogle size={40} />
                      {/* <div>
                      <span className="ml-3 text-indigo-700 font-thin text-sm">
                        Continue with Google
                      </span>
                    </div> */}
                    </button>
                  </div>
                  <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                    <button
                      type="button"
                      className="appearance-none flex items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                      // onClick={continueWithFacebook}
                    >
                      <FaFacebookF size={40} />
                      <span className="h-6 w-6 fill-current text-gray-700"></span>
                    </button>
                  </div>
                  <div className="w-full md:w-1/3 px-3 pt-4 mx-2 border-t border-gray-400">
                    <button
                      type="button"
                      className="appearance-none  items-center justify-center block w-full bg-gray-100 text-gray-700 shadow border border-gray-500 rounded-lg py-3 px-3 leading-tight hover:bg-gray-200 hover:text-gray-700 focus:outline-none"
                      // onClick={continueWithTwitter}
                    >
                      <BsTwitter size={40} />
                    </button>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
