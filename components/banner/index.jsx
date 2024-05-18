import React from 'react';
import Image from 'next/image';
import banerlogo1 from "../../public/svg/banerlogo1.svg";
import banerlogo2 from "../../public/svg/banerlogo2.svg";
import banerlogo3 from "../../public/svg/banerlogo3.svg";
import banerlogo4 from "../../public/svg/banerlogo4.svg";
import linkdinsvg from "../../public/svg/linkdin1.svg";

const Herosection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-12 mx-28 '>
    <div className='col-span-1 lg:col-span-8 '>
      <div className='mt-32'>
           <h1 className='text-[54px] font-bold '>Ignite Your <span className='text-[#51a9ff]'>Tech Career</span> <br/> Today: Learn, Grow, and Get <br/>Placed</h1>
           <p className='text-[25px] banergradienttext '>Full Stack Development | Cyber Security | Data Science & AI</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 border banerlogosection text-center gap-10'>
        <div className='flex justify-center items-center'>
        <div>
        <Image src={banerlogo1} alt='banerlogo1'/>
        </div>
        <div className='ml-4 text-start'>
           <h1 className='text-2xl font-bold'>1500+</h1>
          <p>Students Placed</p>
        </div>
         
        </div>
        <div className='flex justify-center items-center'>
        <div>
        <Image src={banerlogo2} alt='banerlogo2'/>
        </div>
        <div className='ml-4 text-start'>
          <h1 className='text-2xl font-bold'>41LPA</h1>
          <p>Highest Salary</p>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
        <Image src={banerlogo3} alt='banerlogo3'/>
        </div>
        <div className='ml-4 text-start'>
          <h1 className='text-2xl font-bold'>450+</h1>
          <p>Partner companies</p>
        </div>
        </div>
        <div className='flex justify-center items-center'>
        <div>
        <Image src={banerlogo4} alt='banerlogo4'/>
        </div>
        <div className='ml-4 text-start'>
          <h1 className='text-2xl font-bold'>7.2 LPA</h1>
          <p>Average Salary</p>
        </div>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-center just'>
        <button className='bg-[#2f80ed] flex px-8 py-4 text-[#fff] rounded-full  items-center banerbtnshadow font-bold text-lg w-[350px]'>
          <span><Image src={linkdinsvg} alt='linkdinsvg' className='w-7 h-7'/></span>{" "}
          Linkdin Top 20 Startups
        </button>
        <button className='bg-[#fff] flex px-8 py-4 text-[#2f80ed] rounded-full  items-center banerbtnshadow font-bold text-lg w-[400px]'>
         Made with by 💙 an AccioJob Student
        </button>
      </div>
    </div>
    <div className='col-span-1 lg:col-span-4'>
    <div className="min-h-screen flex items-center justify-center rounded-lg shadow-lg bg-[#fff] p-4">
      <div className="">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Start learning for FREE</h2>
        <form>
          <div className="mb-4">
            <input
              type="text"
              id="fullName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-6">
            <input
              type="tel"
              id="phoneNumber"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Start learning for FREE
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Herosection