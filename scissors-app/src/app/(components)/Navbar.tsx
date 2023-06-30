"use client";
import Link from "next/link";
import { TiLink } from "react-icons/ti";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <nav className="navbar relative bg-gradient-to-l from-blue-700 to-blue-50 flex lg:flex-row md:flex-row flex-col justify-between gap-5 lg:px-[100px] md:px-[100px] px-[50px] lg:py-10 md:py-10 py-5">
      <div className="flex md:flex-row lg:flex-row flex-col justify-between">

          <div className='logo bg-gradient-to-r from-blue-700 to-blue-50 flex flex-row'>
            <Link href='/' ><TiLink className='w-[34px] h-[34px]' /></Link>
            <Link href='#' className='font-bold text-xl '> | SCISSORS</Link>
          </div>
        <ul className="flex lg:flex-row md:flex-row flex-col lg:ml-10 md:ml-10 md:mt-1 font-normal">
          <li>
            <Link className="text-grey-1000 text-lg" href="#">
              Features
            </Link>
          </li>
          <li className="lg:ml-5 md:ml-5">
            <Link className="text-grey-1000 text-lg" href="/faqs">
              FAQs
            </Link>
          </li>
          <li className="lg:ml-5 md:ml-5">
            <Link className="text-grey-1000 text-lg" href="#">
              About
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col gap-2">
        <button className="text-black text-lg font-semibold border border-blue-50 w-[100px] h-[40px] text-center rounded-md">
          <Link href="/login">Sign Up</Link>
        </button>

        <button className="text-sky-50 text-lg font-semibold border border-black w-[100px] h-[40px] text-center rounded-md">
          <Link href="/login">Free Trial</Link>
        </button>

      </div>
    </nav>
  );
};

export default NavBar;




// import React from 'react'

// type Props = {}

// const Navbar = (props: Props) => {
//   return (
//     <div>
//       <nav className='flex flex-row justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
//         <div className='flex items-center justify-between px-4'>
          
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar