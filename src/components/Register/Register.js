import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/login.webp'
const Register = () => {
    return (
      <div>
        <body>
          <div class="container mx-auto">
            <div class="flex justify-center px-6 my-12">
              <div class="w-full xl:w-3/4 lg:w-11/12 flex">
                <div
                  class="w-full h-auto bg-gray-400 hidden lg:block lg:w-full bg-cover rounded-l-lg"
                  style={{
                    backgroundImage: `url(${login})`,
                  }}
                >
                    
                </div>

                <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none border shadow-2xl">
                  <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
                  <form>
                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="fullName"
                        className="inline-block mb-1 font-medium"
                      >
                        Full Name
                      </label>

                      <input
                        placeholder="Enter Your Full Name"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="fullName"
                        name="fullName"
                      />
                    </div>

                    <div className="mb-1 sm:mb-2">
                      <label
                        htmlFor="photoURL"
                        className="inline-block mb-1 font-medium"
                      >
                        PhotoURL
                      </label>
                      <input
                        placeholder="Enter Your Photo URL"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        id="photoURL"
                        name="photoURL"
                      />
                    </div>
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
                    <div className="mb-1 sm:mb-2 text-error">
                      There are Error Showing
                    </div>
                    <div className="mt-4 mb-2 sm:mb-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white btn btn-primary"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-xs text-gray-600 sm:text-sm">
                      All ready have an account?{" "}
                      <Link to="/login" className="btn btn-link">
                        Please Login
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
};

export default Register;