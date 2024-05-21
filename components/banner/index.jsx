"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import banerlogo1 from "../../public/svg/banerlogo1.svg";
import banerlogo2 from "../../public/svg/banerlogo2.svg";
import banerlogo3 from "../../public/svg/banerlogo3.svg";
import banerlogo4 from "../../public/svg/banerlogo4.svg";
import linkdinsvg from "../../public/svg/linkdin1.svg";

const stats = [
  { logo: banerlogo1, value: '1500+', label: 'Students Placed' },
  { logo: banerlogo2, value: '41LPA', label: 'Highest Salary' },
  { logo: banerlogo3, value: '450+', label: 'Partner companies' },
  { logo: banerlogo4, value: '7.2 LPA', label: 'Average Salary' },
];

const Herosection = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 gap-14'> 
      <div className='col-span-1 lg:col-span-7'>
        <div className='mt-[9rem]'>
          <h1 className='text-[60px] font-bold'>
            Ignite Your <span className='text-[#51a9ff]'>Tech Career</span> <br />
            Today: Learn, Grow, and Get Placed
          </h1>
          <p className='text-[25px] mt-5 banergradienttext'>
            Full Stack Development | Cyber Security | Data Science & AI
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 border banerlogosection text-center gap-10 '>
          {stats.map((stat, index) => (
            <div key={index} className='flex justify-center items-center'>
              <div>
                <Image src={stat.logo} alt={`banerlogo${index + 1}`} />
              </div>
              <div className='ml-4 text-start'>
                <h1 className='text-2xl font-bold'>{stat.value}</h1>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-center my-5'>
          <button className='bg-[#2f80ed] flex px-8 py-4 text-[#fff] rounded-full items-center banerbtnshadow font-bold text-lg w-[350px] justify-center'>
            <span>
              <Image src={linkdinsvg} alt='linkdinsvg' className='w-7 h-7' />
            </span>{" "}
            LinkedIn Top 20 Startups
          </button>
          <button className='bg-[#fff] flex px-8 py-4 text-[#2f80ed] rounded-full items-center banerbtnshadow font-bold text-lg w-[400px] justify-center'>
            Made with 💙 by an AccioJob Student
          </button>
        </div>
      </div>
      <div className='col-span-1 lg:col-span-5 mt-32 mb-5'>
        <div className='bg-[#fff] py-16 px-12 banerformshadow rounded-[30px] text-center'>
          <h1 className='text-[#000] text-xl font-bold mb-6'>Start learning for <span className='#2f80ed'>FREE</span></h1>
          <p className='text-gray-400 pb-8'>Lectures & Assignments curated by Top Tech <br/> Professionals</p>
          <form>
          <div className="mb-4 flex justify-center">
  <div className="relative w-full">
    <i className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6">
       <svg xmlns="http://www.w3.org/2000/svg"  className=" absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
     </svg>
    </i>
    <input
      type="text"
      id="fullName"
      className="shadow appearance-none rounded-[0.30rem] w-full py-6 pl-12 pr-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      placeholder="Full Name"
    />
  </div>
</div>
{/* <div className="mb-6 flex justify-center">
      <div className="relative w-full flex items-center">
        <input
          type="tel"
          id="phoneNumber"
          className="shadow appearance-none rounded-[0.30rem] w-full py-6 px-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Phone Number"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        {isDropdownOpen && (
          <select
            id="countryCode"
            className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-[0.30rem] py-2 px-4 shadow-lg"
            style={{ zIndex: 10 }}
          >
            <option value="+1">+1 United States</option>
            <option value="+44">+44 United Kingdom</option>
            <option value="+91">+91 India</option>
            <option value="+61">+61 Australia</option>
            <option value="+81">+81 Japan</option>
          </select>
        )}
      </div>
    </div> */}
    <div className="mb-6 flex justify-center">
  <div className="relative w-full flex items-center">
    <select
      id="countryCode"
      className="shadow appearance-none rounded-[0.30rem] py-6 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="+1">+1</option>    {/* United States */}
      <option value="+44">+44</option>  {/* United Kingdom */}
      <option value="+91">+91</option>  {/* India */}
      <option value="+61">+61</option>  {/* Australia */}
      <option value="+81">+81</option>  {/* Japan */}
      <option value="+49">+49</option>  {/* Germany */}
      <option value="+33">+33</option>  {/* France */}
      <option value="+34">+34</option>  {/* Spain */}
      <option value="+39">+39</option>  {/* Italy */}
      <option value="+86">+86</option>  {/* China */}
    </select>
    <input
      type="tel"
      id="phoneNumber"
      className="shadow appearance-none rounded-[0.30rem] w-full py-6 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
      placeholder="Phone Number"
    />
  </div>
</div>
              <div className="mt-14">
                <button
                  type="submit"
                  className="bggradient w-full text-white font-extrabold py-6 px-7 rounded-[0.30rem] focus:outline-none focus:shadow-outline flex justify-center items-center hover:shadow-xl"
                >
                 Apply Now For Free  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6"><path s d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg>
                </button>
              </div>
          </form>
          <h1 className='mt-5'>By clicking ‘Apply Now For Free’, you agree to our <br/>
          <span className='text-[#2f80ed]'>Terms & Conditions</span> </h1>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
