import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import { useState } from "react";
import toast from "react-hot-toast"

const Signup = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleSignup = async (e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/signup`, {
        username,
        email,
        password,
        accountType,
      });

      const data = await res.data;
      if(data.success) {
        setUsername("");
        setEmail("");
        setPassword("");
        setAccountType("");
        toast.success(data.message);
        navigate("/login");
      }

    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[30vw]">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Let's Connect!
        </h1>
        <form  method="post" onSubmit={handleSignup}>

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
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
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
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
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
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
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
            <select onChange={(e)=> setAccountType(e.target.value)} className="shadow-md rounded-md w-full px-3 py-2 border-gray-300 focus:outline-none
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
