"use client" ;
import React,{useEffect, useState} from 'react';
import NavLink from './navlink';
import Image from 'next/image';
import acciologo from "../../public/images/aciologo.png";

const navLinks = [

    {
        title:"AccioJob Reviews",
        path:"/",

    },
    {
        title: "Placement Hightlights",
        path: "/",
    },
    {
        title: "Refer  & Earn",
        path: "/solutions",
    },
    {
        title: "More",
        path: "/",
    },
];

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);
    const toggleNavbar = () => {
        navbarOpen? setNavbarOpen(false) : setNavbarOpen(true)
    }

    const [sticky, setSticky] = useState(false)
     
    useEffect(() =>{
       window.addEventListener('scroll', ()=>{
        window.scrollY > 50 ? setSticky(true) : setSticky(false);
       }) 
    },[]);
  

    return (
        <nav className={`nav-container  ${sticky ? 'dark-nav' : ''}`}>
                <a href="/">
                <Image 
                  src={acciologo} 
                  alt='acciologo'
                  height={300}
                  width={300}
                  className='logo h-[120px] lg:w-[230px] md:w-[170px]'
                   />
                 </a>
                 <div className=''>
                     <ul className={navbarOpen ? '' : 'hide-mobile-menu'}>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>    
                        ))}
                         <li>
                        <a href="https://easycampus.co.in/">
                            <button className='bg-[#1e336a] text-[#fff] py-2 px-4 rounded hover:scale-95 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-xl'
                                style={{
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08), 0 0 2px rgba(0, 0, 255, 0.2)'
                                }}>
                                Login
                            </button>
                        </a>
                    </li>
                    </ul>
                 </div>
                    <button
                        onClick={toggleNavbar}
                        className='flex items-center px-3 py-2 rounded border font-bold border-[#4573e9] text-[#4a79ee] hover:text-[#1e336a] hover:border-[#1e336a] menu-icon'>
                        {navbarOpen ?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-5 h-5">
                                <path  d="M6 18 18 6M6 6l12 12" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                <path  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                            </svg>
                        }
                    </button>
        </nav>
    );
};

export default Navbar;

