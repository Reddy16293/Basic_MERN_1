import React, { useState } from "react";
import toast from "react-hot-toast";

const Signup = () => {
  const [formdata, setformdata] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(formdata.password !== formdata.confirmPassword){
        toast.error('Password and Confirm Password should be same');}
    console.log(formdata);
    // Add your signup logic here (e.g., API call, validation)
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-gray-700 w-80 h-auto flex justify-center items-center rounded-lg shadow-lg p-6">
        <form onSubmit={submitHandler} className="w-full max-w-xs">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="fullname">
              Full Name
            </label>
            <input
              onChange={changeHandler}
              value={formdata.fullname}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="fullname"
              type="text"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={changeHandler}
              value={formdata.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={changeHandler}
              value={formdata.password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              onChange={changeHandler}
              value={formdata.confirmPassword}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
