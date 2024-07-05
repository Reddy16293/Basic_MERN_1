import React, { useState } from "react";

const Login = () => {
  const [formdata, setformdata] = useState({
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formdata);
    // Add your login logic here
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-gray-700 w-80 h-80 flex flex-col justify-center items-center rounded-lg shadow-lg p-3">
        <form onSubmit={submitHandler} className="w-full m-4">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Username/Email
            </label>
            <input
              onChange={changeHandler}
              value={formdata.email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              type="text"
              placeholder="Enter your username or email"
            />
          </div>
          <div className="mb-6">
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
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
