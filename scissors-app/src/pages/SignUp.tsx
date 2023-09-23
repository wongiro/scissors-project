'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { TiLink } from 'react-icons/ti';

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email,
      password,
      confirmPassword 
    };

    fetch('/api/createAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Form submitted successfully:', data);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        alert('Form submitted successfully:' + data);
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };


  return (
    <section className="absolute flex flex-col w-[100%] h-screen bg-grey-100">
          <div className='logo bg-gradient-to-r from-blue-700 to-blue-50 flex flex-row'>
            <Link href='#' ><TiLink className='w-[34px] h-[34px]' /></Link>
            <Link href='#' className='font-bold text-xl '> | SCISSORS</Link>
          </div>
          <div className=" flex flex-col items-center w-[100%] h-auto">
            <div className="formContainer md:w-[684px] h-[670px] flex flex-col items-center p-8 px-8 py-12 gap-8">
              <div className="flex items-center flex-col">
                <h1 className="text-2xl font-bold text-[#00120E]">Create Your Account</h1>
                <p className="text-grey-900">Please provide your account information</p>
              </div>

              <form className="flex flex-col items-center gap-2" onSubmit={handleSubmit}>
                <div className="flex flex-col items-start gap-1">
                  <label className="text-grey-900 text-sm font-normal">Email</label>
                  <input
                    required
                    type="email"
                    className="items-center flex flex-col placeholder-text-sm p-4 bg-grey-200 md:w-[614px] h-[54px] outline-none rounded-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label className="text-grey-900 text-sm font-normal">Password</label>
                  <input
                    required
                    type="password"
                    className="items-center flex flex-col p-4 placeholder-text-sm bg-grey-200 md:w-[614px] h-[54px] rounded-lg outline-none"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <label className="text-grey-900 text-sm font-normal">Confirm Password</label>
                  <input
                    required
                    type="password"
                    className="items-center flex flex-col p-4 placeholder-text-sm bg-grey-200 md:w-[614px] h-[54px] rounded-lg outline-none"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={ !email || !password || !confirmPassword || password !== confirmPassword}
                  className="loginBtn bg-grey-500 hover:bg-green-800 mt-5 focus:bg-green-1000 active:bg-green-800 flex flex-row justify-center items-center gap-12 w-[400px] h-[52px] flex-none order-2 grow-0 p-4 rounded-lg"
                >
                  <span className="w-[176px] h-[22px] not-italic font-bold text-base leading-[22px] text-[#F4F6F5] flex-none order-1 grow-0">
                    Create account
                  </span>
                </button>
              </form>
            </div>
          </div>

    </section>
  );
};

export default SignUp;
