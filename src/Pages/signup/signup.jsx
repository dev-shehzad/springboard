import React from "react";

const Signup = () => {
  return (
    <div className="bg-[#2E1065]">
      <div className="container  mx-auto p-4 flex items-center justify-center h-screen">
        <div className="w-[500px] max-tab:w-[80%] max-md:w-[95%] bg-white bg-opacity-[0.1] rounded-[20px] shadow-md  p-8 text-white">
          <h1 className="text-2xl text-center font-bold mb-8">Sign Up</h1>
          <form action="">
          <div className="mb-4 flex gap-[10px]">
              <label htmlFor="username" className="sr-only">
                Full Name
              </label>
              <input
                type="text"
                id="username"
                placeholder="First Name"
                required
                className="w-1/2 px-4 py-2 border-[0.01px] border-white border-opacity-[0.2] rounded-md text-white bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
              />
               <input
                type="text"
                id="username"
                placeholder="Last Name"
                required
                className="w-1/2 px-4 py-2 border-[0.01px] border-white border-opacity-[0.2] rounded-md text-white bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
              />
              <i className="bx bxs-user absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border-[0.01px] border-white border-opacity-[0.2] rounded-md text-white bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
              />
              <i className="bx bxs-user absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                required
                className="w-full px-4 py-2 border-[0.01px] border-white border-opacity-[0.2] rounded-md text-white bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
              />
              <i className="bx bxs-user absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                className="w-full px-4 py-2  border-[0.01px] border-white border-opacity-[0.2] rounded-md text-white bg-transparent focus:ring-2 focus:ring-white focus:outline-none"
              />
              <i className="bx bxs-lock-alt absolute right-3 top-1/2 transform -translate-y-1/2"></i>
            </div>
            <div className="flex items-center mb-6">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-white border-gray-300 focus:ring-2 focus:ring-white rounded"
                />
                <span className="ml-2 text-sm text-white">Remember Me</span>
              </label>
              <a
                href="#"
                className="ml-auto text-sm text-white hover:underline"
              >
                Forgot Password
              </a>
            </div>
            <button
              type="submit"
              className="w-full mt-[20px] px-4 py-2 bg-white text-gray-800 rounded-md font-semibold shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Sign Up
            </button>
            <div className="text-center mt-4">
              <p className="text-sm text-white">
                Forgot Password?{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  Recover
                </a>
              </p>
            </div>
          </form>

          <div className="google text-center text-[13px] mt-3">
            <p>Or Sign Up with</p>

            <div className="googlebutton">
              <div className="flex items-center justify-center mt-3 ">
                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 bg-white bg-opacity-[0.1] rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <img
                    className="w-6 h-6"
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                  />
                  <span>SignUp with Google</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;