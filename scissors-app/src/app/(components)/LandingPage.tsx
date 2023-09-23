'use client'
import React, { useState } from 'react';
import Link from 'next/link';

type Props = {}

const LandingPage = (props: Props) => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
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
    <section className="flex flex-row justify-center items-center order-1 grow-0 p-0 h-screen">
      
      <div className='backGround bg-no-repeat bg-cover w-full border-4 border-blue-500 rounded-lg h-full'>
        <div className='flex flex-col mt-[15%] items-center h-screen '>
          <h1 className='text-xxl font-bold text-[#000] flex flex-col items-center text-center'>
            Optimize Your Online Experience with Our Advanced 
            <span className='bg-gradient-to-l text-sky-800'>URL Shortening</span> 
            Solution.
          </h1>
          <p className='gap-6 text-black  mt-[5%] flex flex-col items-center justify-center p-5 '>
          Personalize your shortened URLs to align with your brand identity. Utilize custom slugs, branded links, and domain customization options to reinforce your brand presence and enhance user engagement.
          </p>
          <button className='bg-blue-700 text-[#FFF] text-lg font-bold py-3 px-6 gap-3 rounded-lg w-[250px] h-[50px] mt-[10%] flex flex-col items-center justify-center p-5'>
            <Link href='/SignUp' className='text-xl font-bold text-[#FFF]'>
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className='flex flex-col items-center w-[100%] border-blue-500 h-screen bg-grey-100'>
        <input type='text' className='hidden' />
      </div>

    </section>
  );
};

export default LandingPage