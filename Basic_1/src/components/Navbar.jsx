import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate('/login');
  };

  const signupHandler = () => {
    navigate('/signup');
  };

  return (
    <div className='flex justify-center items-center gap-40 bg-black h-[40px] w-full'>
      <div>
        <button onClick={loginHandler} className='font-bold text-white'>Login</button>
      </div>
      <div>
        <button onClick={signupHandler} className='font-bold text-white'>Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
