'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IconContext, Eye, EyeSlash } from '@phosphor-icons/react';

type Props = {}

const LandingPage = (props: Props) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email,
      password
    }

    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        setEmail('');
        setPassword('');
      }
      )
      .catch((error) => {
        console.error('Error:', error);
      }
      );
  };

  return (
    <section className="flex flex-row justify-center items-center  order-1 grow-0 p-0 h-screen">
      
      <div className='backGround bg-blue-100 bg-no-repeat bg-cover w-full h-full'>
        <div className='border-blue-600 flex flex-col mt-[15%] items-center h-screen '>
          <h1 className='text-xxl font-bold text-[#000] flex flex-col items-center text-center'>
            Optimize Your Online Experience with Our Advanced 
            <span className='bg-gradient-to-l text-sky-400'>URL Shortening</span> 
            Solution.
          </h1>
          <p className='gap-6 text-black  mt-[5%] flex flex-col items-center justify-center p-5 '>
          Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.
          </p>
          <button className='bg-gradient-to-r from-blue-700 to-sky-200 rounded-lg w-[250px] h-[50px] mt-[10%] flex flex-col items-center justify-center p-5'>
            <Link href='/signup' className='text-xl font-bold text-[#FFF]'>
              Get Started
            </Link>
          </button>
        </div>
      </div>
      <div className="formInputs w-1/2 bg-white flex gap-5 flex-col items-center h-screen p-0">
        <div className="loginInput flex flex-col p-10 items-center gap-2 w-[400px] h-[342px]">
          <div className="loginText flex flex-row items-center gap-1 p-0">
            <h1 className="not-italic font-bold text-2xl leading-[34px] mt-[105%] text-[#00120E]">Welcome to Scissors</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="inputField flex flex-col items-start gap-8 w-[400px] h-[276px] flex-none grow-0 p-0">
           <div>
            <label className="label w-[41px] h-[22px] not-italic font-normal text-base leading-[22px] text-[#596663] flex-none order-none grow-0">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="bg-gray-200 flex flex-row items-center gap-48 w-[400px] h-[54px] border flex-none order-1 grow-0 p-4 rounded-lg border-solid focus:outline-green-800 border-gray-800"
              placeholder="Enter email"
            />
          </div>
          <div className="password">
            <label className="label w-[41px] h-[22px] not-italic font-normal text-base leading-[22px] text-[#596663] flex-none order-none grow-0">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? 'password' : 'text'}
              className="focus:outline-green-800 bg-gray-200 flex flex-row items-center gap-48 w-[400px] h-[54px] border flex-none order-1 grow-0 p-4 rounded-lg border-solid border-gray-800"
              placeholder="Enter password"
            />
            <div onClick={() => setShowPassword(!showPassword)} className=" relative eyeIcon cursor-pointer">
              <IconContext.Provider value={{ color: '#90A8A2', size: '1em' }}>
                {showPassword ? <EyeSlash /> : <Eye />}
              </IconContext.Provider>
            </div>
          </div>
          <button
            disabled={!password}
            type="submit"
            className="loginBtn hover:bg-blue-900 bg-gradient-to-r from-blue-700 to-sky-200 focus:bg-green-1000 active:bg-blue-600 m-auto flex flex-row justify-center items-center gap-4 w-[400px] h-[52px] order-2 grow-0 p-4 rounded-lg"
          >
            <Link href='/dashboard' className='text-xl font-bold text-[#FFF]'>
                  Login
            </Link>
          </button>
        </form>

        <div className="forgotPassword flex justify-center items-center">
          <Link href="/forgot-password" className="passwordReset w-[226px] h-[21px] not-italic font-normal text-[15px] leading-[21px] underline text-[#596663] gap-2 order-1 grow-0" passHref>
            Forgot password?
          </Link>
        </div>
      </div>
    


    </section>
  );
};

export default LandingPage