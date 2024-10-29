import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[30vw]">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Let's Connect!
        </h1>
        <form action="#" method="post">

          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="Username"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Harshit Dubey"
              name="name"
              id="name"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Email Address */}
          <div className="mb-4">
            <label
              htmlFor="Email"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="text"
              placeholder="your@email.com"
              name="email"
              id="email"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="Password"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              name="password"
              id="password"
              className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black"
            />
          </div>

          {/* For Account Selection */}
          <div className="mb-4">
            <label
              htmlFor="accountType"
              className="mb-2 mx-2 block text-sm font-medium text-gray-700"
            >
              Select your Account type
            </label>
            <select className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
            focus:ring-black focus:border-black">
              {/* <option value="">Select Account Type</option> */}
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
            </select>
          </div>

          {/* Redirect to Login Page */}
          <div className="flex justify-end">
          <Link to={"/login"} className="text-xs text-gray-600 mx-1 hover:cursor-pointed hover:text-black">Login With Account</Link>
          </div>
          <button type='submit' className="w-full bg-black text-white px-3 py-2 shadow-lg text-sm font-medium hover:cursor-pointer rounded-lg my-2">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
