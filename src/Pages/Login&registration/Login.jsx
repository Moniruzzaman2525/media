import React, { useContext, useState } from 'react';
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from '../../Context/UserContext';
import { useCreateUserAcMutation, useLoginUserMutation } from '../../redux/EndPoints/ApiEndpoints';

const Login = () => {
  const [email, setEmail] = useState('')
  const [checked, setChecked] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [loginUser, resLoginUser] = useLoginUserMutation();
  const [createUserAc, resCreateUserAc] = useCreateUserAcMutation();
  const {

    setLoading,
    logInUser,
    setUser,
    googleLogIn,
    githubLogIn,
    logOutUser,
    updateUserPassword
  } = useContext(UserAuth);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;


    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(result);
        setUser(user);
        const data = {
          uid: user.uid,
          email: user.email
        }
        loginUser(data)
        console.log(resCreateUserAc.status);
        toast.success("Login Successful!");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        const data = {
          displayName: user?.displayName,
          uid: user.uid,
          email: user.email
        }
        createUserAc(data)
        navigate('/');
      })
      .catch((e) => toast.error(e.message));
  };

  const handleGithubLogin = () => {
    githubLogIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((e) => toast.error(e.message));
  };

  const handleLogOut = () => {
    logOutUser()
      .then(() => { })
      .catch((e) => toast.error(e.message));
  };

  const getEmail = (e) => {
    setEmail(e.target.value)
  }


  const handleForgotPassword = (email) => {
    updateUserPassword(email)
      .then(() => {
        toast.success('Password Reset Link Sent To Your Email !')
      })
      .catch(e => toast.error(e.message))
  }





  const handleCheckBox = (event) => {
    setChecked(event.target.checked);
  };



  return (
    <div className="w-full bg-gray-200 mx-auto  mt-6 overflow-hidden shadow-md sm:max-w-lg sm:rounded-lg">
      <form onSubmit={handleSubmit} action="" className="bg-gray-200 py-4 px-6 ">
        <div className="mt-4">
          <div className="flex flex-col items-start">
            <input
              onBlur={getEmail}
              type="email"
              name="email"
              placeholder="Email"
              required
              className="block w-full p-3  rounded-md shadow-sm text-gray-700"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col items-start">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="block w-full mt-1 p-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>
        {/* <div>
          <button
          className='bg-red-100'
            type="submit"
            title="Log In"
          >Login</button>
        </div> */}

        <div className="flex align-center mt-3">
          <input
            onClick={handleCheckBox}
            type="checkbox"
            className="checkbox checkbox-primary"
          />
          <p className="mx-3 font-medium text-white">
            Accept Our{" "}
            <Link to="/terms">
              <span className=" text-secondary font font-medium hover:underline">
                Terms & Condition's
              </span>
            </Link>
          </p>
        </div>

        <div className="flex items-center mt-4">
          <button
            className="btn btn-success"
            type="submit"
            title='Register'
            disabled={!checked}
          >
            Login
          </button>
        </div>
      </form>
      <div className="bg-gray-200 py-4 px-6 rounded-b-lg">
        <button
          onClick={() => handleForgotPassword(email)}
          href="#"
          className="text-md text-secondary font-medium hover:underline"
        >
          Forget Password?
        </button>
        <div className="mt-4 text-gray-300">
          Don't Have An Account?{" "}
          <span>
            <Link
              className="text-secondary  font-medium hover:underline"
              to="/register"
            >
              Register Now!
            </Link>
          </span>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR</p>
          <hr className="w-full" />
        </div>

        <div className="my-6 space-y-2">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="text-white w-full justify-center bg-[#4285F4] hover:bg-[#4285F4]/80 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
          >
            <svg
              className="mr-2 -ml-1 w-4 h-4"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="google"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 488 512"
            >
              <path
                fill="currentColor"
                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
              ></path>
            </svg>
            Sign in with Google
          </button>
          {/* <button
              onClick={handleGithubLogin}
              type="button"
              className="text-white w-full justify-center bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
            >
              <svg
                className="mr-2 -ml-1 w-4 h-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="github"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                ></path>
              </svg>
              Sign in with Github
            </button> */}
        </div>
      </div>
    </div>
  );
};

export default Login;