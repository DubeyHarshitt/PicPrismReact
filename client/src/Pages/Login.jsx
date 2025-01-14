import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

import { login } from "../../Store/slices/authSlice"
import { useDispatch } from "react-redux"

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e)=>{
    
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
        email,
        password,
      });
      const data =  res.data;
    // console.log(data);
    
      toast.success(data.message);
      // dispatch karna hai login ko -> jo bhi data aa rha h sab push karna hai state me
      dispatch(login(data));
      navigate(`/${data.role}/profile`);

    }catch (error) {
      toast.error(error.response.data.message || "An unexpected error occurred");
    }
  }

  return (
    <div className="mt-20 sm:mt-10 min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-3xl px-5 py-6 w-full sm:w-[30vw]">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Let's Connect!
        </h1>

        <form method="post" onSubmit={handleLogin}>

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

          {/* Forgot Password */}
          <div className="flex justify-start ">
          <Link to={"#"} className="text-xs text-gray-600 mx-1 hover:cursor-pointed hover:text-black">Forgot Password</Link>
          </div>

          {/* Redirect to SignUp Page */}
          <div className="flex justify-end">
          <Link to="/signup" className="text-xs text-gray-600 mx-1 hover:cursor-pointed hover:text-black">Create Account</Link>
          </div>
          <button type='submit' className="w-full bg-black text-white px-3 py-2 shadow-lg text-sm font-medium hover:cursor-pointer rounded-lg my-2">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login