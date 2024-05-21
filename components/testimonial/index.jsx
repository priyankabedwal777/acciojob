"use client";
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';
import student1img from "../../public/images/testimonialsimg/testistudentimg1.webp";
import testi1img from "../../public/images/testimonialsimg/testmakemytripimg.webp";
import testil2 from "../../public/images/testimonialsimg/testl2.png";
import tests2 from "../../public/images/testimonialsimg/tests2.png";
import testil3 from "../../public/images/testimonialsimg/testil3.webp";
import testis3 from "../../public/images/testimonialsimg/tests3.webp";
import testil4 from "../../public/images/testimonialsimg/testil4.webp";
import testis4 from "../../public/images/testimonialsimg/testis4.webp";
import testil5 from "../../public/images/testimonialsimg/testil5.webp";
import testis5 from "../../public/images/testimonialsimg/testis5.webp";
import testibtn5 from "../../public/images/testimonialsimg/testibutn5.svg";
import testil6 from "../../public/images/testimonialsimg/testil6.webp";
import testis6 from "../../public/images/testimonialsimg/testis6.webp";
import testil7 from "../../public/images/testimonialsimg/testil7.webp";
import testis7 from "../../public/images/testimonialsimg/testis7.webp";
import testil8 from "../../public/images/testimonialsimg/testil8.webp";
import testis8 from "../../public/images/testimonialsimg/testis8.webp";
import testil9 from "../../public/images/testimonialsimg/testil9.webp";
import testis9 from "../../public/images/testimonialsimg/testis9.webp";
import testil10 from "../../public/images/testimonialsimg/testil10.svg";
import testis10 from "../../public/images/testimonialsimg/tests10.svg";


const Testmonial = () => {
  return (
   <>
   <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-10'>
    <h4 className='banergradienttext text-xl mb-2'>Student Testimonials</h4>
      <h1 className='text-[36px] font-bold mb-8'>Don’t just take our word for it, Go <br/> through AccioJob's Student Reviews</h1>
      <div className='w-[100%]'>
      <Swiper
        initialSlide={2}
        speed={2000}
        loop={true}
        roundLengths={true}
        mousewheel={true}
        grabCursor={true}
        centeredSlides={true}
       
        autoplay={{
          delay: 7000,
           pauseOnMouseEnter: true,
          disableOnInteraction: false,
          autoplayDisableOnInteraction:true,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
             <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
            <span><Image src={testi1img} alt='testi1img' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={student1img} alt='student1img' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
            <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3'>NON-TECH</button>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
            <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Bandaru Venkata Ajay Kumar</h1>
            <span><Image src={testil2} alt='testil2' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={tests2} alt='tests2' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
            <h1 className='text-[36px] fonr-bold mb-4'>2017 pass out hired as an Data Engineer at Neustar.</h1>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3'>CAREER GAP</button>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>NON IT</button>
            <p className='my-5 text-gray-400'>I graduated in 2017 with a mechanical engineering degree & never imagined I could switch to an amazing position so quickly. Although I had experience in the mechanical field, I always wanted to transition to IT but never had the chance. Determined to upskill myself, I researched and found AccioJob to be the best option. The fast-paced environment of the IT field appealed to me, and AccioJob became my guide to help me land a job and receive the perfect training. Their curriculum and teaching style made me feel on par with CS graduates, and the supportive learning environment kept me motivated.</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Saurabveer Singh</h1>
            <span><Image src={testil3} alt='testil3' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis3} alt='testis3' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
            <h1 className='text-[36px] fonr-bold mb-4'>Procurement Manager to a Software <br/> Engineer</h1>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3'>B.COM GRAD</button>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            <p className='my-5 text-gray-400'>Being from Commerce, I needed an intermediary to help me enter the software industry and I found AccioJob to be a perfect fit. Coming from a Non-Tech background, I had to work harder than students from technical backgrounds preparing for 8-12 hours a day. My batch manager was very supportive and played a crucial role in my journey. My hard work paid off when I received my first interview call after only two months of preparation and landed a job with that company. I would advise non-tech students to be prepared to put in extra effort, but with the right preparation and mindset, they can easily excel in the field.</p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Shubham Prakash Chavan</h1>
            <span><Image src={testil4} alt='testil4' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis4} alt='testis4' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5 '>
            <h1 className='text-[36px] fonr-bold mb-4'>From 60% in College to a Software Dev Engineer</h1>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>LOW CGPA</button>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>NON-TECH</button>
            <p className='my-5 text-gray-400'>I pursued my Mechanical Engineering from Satara. After graduation, there were no placements through my college, so I had to search for jobs & got one in Manufacturing & Design but I decided to switch to the IT industry in 2020. I did a quick Google search and stumbled upon AccioJob. I contacted some former students who had secured placements and they assured me that AccioJob would teach me everything I needed to know about programming. When I started learning DSA, it was difficult at first, but with the help of my Mentors, Instructors & Batch Manager, I was able to improve my skills and secure a job.</p>
          </div>
        </div>
        </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper'>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Praveen Gupta</h1>
            <span><Image src={testil5} alt='testil5' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis5} alt='testis5' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>Assistant System Engineer to an SDET at Gainsight</h1>
            <span className='flex'>
               <button className='bg-[#ff7169] rounded text-[#fff] p-3 flex items-center'><Image src={testibtn5} alt='testibtn5' className='mx-1'/>400% HIKE</button>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            </span>
           
            <p className='my-5 text-gray-400'>I was interested in math, so I chose electrical engineering. However, during my final semester, I realised that I wasn't interested in the traditional career paths for electrical engineers, such as government jobs or PSUs. That's when I discovered competitive programming and how it relates to real-life maths. I reached out to seniors who were in the same field and they suggested me to join AccioJob. With the help of AccioJob, I improved my skills and landed a job at Gainsight with a package of 12 LPA. I would encourage others to explore different fields, like I did, and not be afraid to change their career path.</p>
          </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Kabita Mondal</h1>
            <span><Image src={testil6} alt='testil6' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis6} alt='testis6' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>Tier 3 College Graduate to earning 11 Lakhs per year</h1>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3'>FRESHER</button>
            <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>B.SC GRADUATE</button>
            <p className='my-5 text-gray-400'>I highly recommend AccioJob for anyone looking to improve their DSA skills & land their dream job. As a recent B.Sc graduate, my DSA knowledge was limited, but with their comprehensive course, I was able to understand coding and secure a job in IT. Their program and placement process were top-notch and helped me gain confidence through mock interviews. The mentors were knowledgeable and supportive, and the focus on projects was instrumental in preparing me for interviews. My experience was truly transformative, and I am grateful for the opportunity to take my career to the next level</p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Lalit K Tiwari</h1>
            <span><Image src={testil7} alt='testil7' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis7} alt='testis7' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>3 LPA to working as a Full Stack Developer at 15+ LPA</h1>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3'>
               500% HIKE</button>
            <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>WORKING PROF</button>
            <p className='my-5 text-gray-400'>Before joining AccioJob, my experience with coding was limited and I was stuck in an unsatisfying core job. But with AccioJob's full-stack program and the guidance of their dedicated mentors, I was able to land a job as an SDE with a 15 LPA salary. The course not only focuses on technical skills, but also on important soft skills like networking and resume building. The industry relevance of the curriculum and the support provided by the mentors helped me progress at a much faster pace. If you're ready for a challenging and fulfilling experience, AccioJob is the place for you. P.S. Lalit is now working as a Mentor with us</p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Shubham Bhardwaj</h1>
            <span><Image src={testil8} alt='testil8' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis8} alt='testis8' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>2 yrs gap JEE Preparation to a Software Engineer</h1>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>CAREER GAP</button>
            <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>TIER 3 COLLEGE</button>
            <p className='my-5 text-gray-400'>I had taken a 2-year gap for JEE prep and after graduating with a B.tech in 2019, I joined AccioJob. Their course structure was great as they started from scratch. The experience with the mentors was fantastic as doubt sessions were held on a regular basis to prepare students for interviews and coding rounds. I gave 2-3 mock and HR interviews as they're good for improving communication skills. The main difficulty I faced was 'Direction' and not knowing what to do as there are many fields like big data, web development, AI/ML, etc. AccioJob helped me here and I was able to improve my DSA and get hired by Cerner.</p>
          </div>
        </div>
        </div>
         </SwiperSlide>
        <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
            <h1 className='font-semibold text-xl mb-7'>Aditi Singh</h1>
            <span><Image src={testil9} alt='testil9' className='mb-4'/></span>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis9} alt='testis9' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>Arts Graduate to a Software Engineer at Converj</h1>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3'>HUMANITIES STUDENT</button>
            <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
            <p className='my-5 text-gray-400'>I had chosen BA as I was looking for a government job. However, during the lockdown, I realised that the IT sector is one that is growing rapidly and I became more and more interested in it. I spent my time researching and learning more about coding, taking free courses on YouTube and other platforms but it wasn't enough. That's when I came across AccioJob. I found the program to be very affordable as compared to other similar courses & found the classes and the Instructors to be very useful & to the point. I would like to say that it's never too late to pursue your passion, even if you have a non-tech background like me.</p>
          </div>
        </div>
        </div>
           </SwiperSlide>
         <SwiperSlide>
        <div className='testimonialwrapper '>
          <div className='grid grid-cols-1 lg:grid-cols-12  '>
          <div className='col-span-1 lg:col-span-4 bg-[#e0fff9] p-5 flex flex-col text-center justify-center items-center'>
                      <span><Image src={testil10} alt='testil10' className='mb-4'/></span>
          <h1 className='font-bold'>6000+</h1>
            <h1 className='font-semibold text-xl mb-7'>happy students!</h1>
            <div className='flex '>
            <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
            <button className='testbutton ml-2'>
            <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
            </button>
            </div>
            <span><Image src={testis10} alt='testis10' className='my-6'/></span>
          </div>
          <div className='col-span-1 lg:col-span-8 p-5'>
            <h1 className='text-[36px] fonr-bold mb-4'>We have an <br/>endless <br/>count of <br/>inspirational<br/> stories....</h1>
            <p className='my-5 text-gray-400'>Till date, we have impacted the lives of over 6000+ students by helping them secure various roles such as Frontend Developer, Backend Developer, SDE, Full-Stack Developer, and more. In 2022 alone, we've successfully placed over 1000 students in these positions. If you want to learn more about our success stories and the students that we have helped, click on "read more" below for more information.</p>
             <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>Raed More</button>
          </div>
        </div>
        </div>
        </SwiperSlide>
         </Swiper> 
      </div>
   </div>
   </>
  )
}

export default Testmonial