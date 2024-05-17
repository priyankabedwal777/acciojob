import React from "react";
import Link from "next/link";

const  NavLink = ({href, title}) => {
    
  return  (
    <>
     <Link href={href} 
        className='block text-[#1e336a] text-lg sm:text-sm md:text-sm lg:text-sm xl:text-lg 2xl:text-xl rounded hover:text-[#93BDFF] nav-link nav-link-ltr'> {title}
    </Link>
    </>
  );
};

export default NavLink;