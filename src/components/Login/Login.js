import React, { useContext } from 'react';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import register from '../../assets/register.jpg'
import { AuthContext } from '../context/UserContext/UserContext';
const Login = () => {
  const [error, setError] = useState('')
  const { login, loginGoogle,  loginFacebook } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
  const handalLogin = (e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const confrimPassword = form.confrimPassword.value;
    if(password !== confrimPassword){
      setError("Password not Matched");
      toast.error("Password not Matched");
      return;
    }
    login(email, password)
    .then(result=>{
      const user = result.user;
      navigate(from, {replace: true})
      console.log(user);
      setError('')
      toast.success("Successfully Login Your Account", {autoClose: 500});
      form.reset();
    })
    .catch(error=>{
      setError(error.message);
      toast.error(error.message, {autoClose: 500})
    })
  }
  const handalGoogle = ()=>{
    loginGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(from, { replace: true });
      toast.success('Successfully Login With Google', {autoClose: 500})
    })
    .catch((error)=>toast.error(error.message, {autoClose: 500}))
  }
  const handalFacebook = ()=>{
    loginFacebook()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Successfully Login With Github", { autoClose: 500 });
      })
      .catch((error) => {
        toast.error(error.message, { autoClose: 500 });
        console.error(error);
      });
  }
    return (
    
        <body>
          <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
              <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                <div
                  className="w-full h-auto bg-gray-400 hidden lg:block lg:w-full bg-cover rounded-l-lg"
                  style={{
                    backgroundImage: `url(${register})`,
                  }}
                ></div>

                <div className="w-full lg:w-7/12 dark:bg-black dark:text-white bg-white p-5 rounded-lg lg:rounded-l-none border shadow-2xl">
                  <h3 className="pt-4 text-2xl text-center">Login Your Account!</h3>
                  <form onSubmit={handalLogin}>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                      >
                        E-mail
                      </label>
                      <input
                        placeholder="Enter Your Email"
                        required
                        type="email"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="password"
                        className="inline-block mb-1 font-medium"
                      >
                        Password
                      </label>
                      <input
                        placeholder="Enter Your Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="password"
                        name="password"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="confrimPassword"
                        className="inline-block mb-1 font-medium"
                      >
                        Confrim Password
                      </label>
                      <input
                        placeholder="Enter Your Confrim Password"
                        required
                        type="password"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="confrimPassword"
                        name="confrimPassword"
                      />
                    </div>
                    <div className="mb-1 sm:mb-2 text-error">{error}</div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white btn btn-primary"
                      >
                        Login
                      </button>
                    </div>
                    <p className="text-xs dark:text-white text-gray-600 sm:text-sm">
                      New in Freelancing Educare?{" "}
                      <Link to="/register" className="btn btn-link">
                        Create an account
                      </Link>
                    </p>
                  </form>
                  <div className="my-3">
                    <button
                      onClick={handalGoogle}
                      className="btn btn-outline btn-secondary mb-3"
                      style={{ marginRight: "5px" }}
                    >
                      Login With Google
                    </button>
                    <button onClick={handalFacebook} className="btn btn-outline btn-primary">
                      Login With Facebook
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      
    );
};

export default Login;