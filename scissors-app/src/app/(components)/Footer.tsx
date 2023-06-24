import React from 'react'
import {TiLink} from 'react-icons/ti'
import {FaTwitter, FaInstagram} from 'react-icons/fa';
import {SiFacebook,  SiLinkedin} from 'react-icons/si';
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer">
      <div className="flex md:flex-row lg:flex-row flex-col justify-start">
        <div className='socialsLogo p-10 mt-10 flex flex-col'>
          <div className='logo flex flex-row'>
            <Link href='/' ><TiLink className='w-[34px] h-[34px]' /></Link>
            <Link href='#' className='font-bold text-xl '> | SCISSOR</Link>
          </div>
          <div className='socials flex flex-row p-6 gap-3'>
            <Link href='#'><SiFacebook className='w-[24px] h-[24px]'/></Link>
            <Link href='#'><FaTwitter className='w-[24px] h-[24px]'/></Link>
            <Link href='#'><FaInstagram className='w-[24px] h-[24px]'/></Link>
            <Link href='#'><SiLinkedin className='w-[24px] h-[24px]'/></Link>
          </div>
        </div>

      <div className='contentContainer grid grid-flow-row p-10 mt-10 '>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Why Scissor?</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>Scissor 101</p>
           <p>Integrations and API</p>
           <p>Pricing</p>
         </div>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Resources</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>Blog</p>
           <p>Resource Library</p>
           <p>Developers</p>
           <p>App connectors</p>
           <p>Support</p>
           <p>Trust Center</p>
           <p>Mobile App</p>
         </div>
        </div>

        <div className='contentContainer grid grid-flow-row p-10 mt-10 '>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Products</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>QR Codes</p>
           <p>Link Management</p>
           <p>Link-in-bio</p>
         </div>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Solutions</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>Social Media</p>
           <p>For developers</p>
           <p>Digital Marketing</p>
           <p>Customer</p>
         </div>
        </div>
        <div className='contentContainer grid grid-flow-row p-10 mt-10 '>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Features</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>Branded Links</p>
           <p>Mobile Links</p>
           <p>QR Code generation</p>
         </div>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Legal</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-1'>
           <p>Privacy Policy</p>
           <p>Cookie Policy</p>
           <p>Terms of Service</p>
           <p>Acceptable Use Policy</p>
         </div>
        </div>
        <div className='contentContainer grid grid-flow-row p-10 mt-10 '>
         <div className='heading flex flex-row'>
           <h1 className='font-bold text-sm'>Company</h1>
         </div>
         <div className='Content flex font-medium text-sm flex-col gap-2'>
           <p>Partners</p>
           <p>Contact</p>
           <p>Reviews</p>
           <p>About Scissors</p>
         </div>
        </div>
    </div>
      


      <div>
        <p className="text-sm text-[#112232] text-end p-10 mt-16 font-medium">
          Term of Service | Security | @ Scissor 2023
        </p>
      </div>
    </footer>
  )
}

export default Footer;