// import React from 'react';
// import Image from 'next/image';
// import student1img from "../../public/images/testimonialsimg/testistudentimg1.webp";
// import testi1img from "../../public/images/testimonialsimg/testmakemytripimg.webp";
// import testil2 from "../../public/images/testimonialsimg/testl2.png";
// import tests2 from "../../public/images/testimonialsimg/tests2.png";
// import testil3 from "../../public/images/testimonialsimg/testil3.webp";
// import testis3 from "../../public/images/testimonialsimg/tests3.webp";
// import testil4 from "../../public/images/testimonialsimg/testil4.webp";
// import testis4 from "../../public/images/testimonialsimg/testis4.webp";
// import testil5 from "../../public/images/testimonialsimg/testil5.webp";
// import testis5 from "../../public/images/testimonialsimg/testis5.webp";
// import testibtn5 from "../../public/images/testimonialsimg/testibutn5.svg";
// import testil6 from "../../public/images/testimonialsimg/testil6.webp";
// import testis6 from "../../public/images/testimonialsimg/testis6.webp";
// import testil7 from "../../public/images/testimonialsimg/testil7.webp";
// import testis7 from "../../public/images/testimonialsimg/testis7.webp";
// import testil8 from "../../public/images/testimonialsimg/testil8.webp";
// import testis8 from "../../public/images/testimonialsimg/testis8.webp";
// import testil9 from "../../public/images/testimonialsimg/testil9.webp";
// import testis9 from "../../public/images/testimonialsimg/testis9.webp";
// import testil10 from "../../public/images/testimonialsimg/testil10.svg";
// import testis10 from "../../public/images/testimonialsimg/tests10.svg";


// const Testmonial = () => {
//   return (
//    <>
//    <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-10'>
//     <h4 className='banergradienttext text-xl mb-2'>Student Testimonials</h4>
//       <h1 className='text-[36px] font-bold mb-8'>Don’t just take our word for it, Go <br/> through AccioJob's Student Reviews</h1>
//       <div className='w-[100%]'>
//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testi1img} alt='testi1img' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={student1img} alt='student1img' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5 '>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#ff7169] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>
       
//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil2} alt='testil2' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={tests2} alt='tests2' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5 '>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#945ff6] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil3} alt='testil3' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis3} alt='testis3' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5 '>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil4} alt='testil4' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis4} alt='testis4' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5 '>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper'>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil5} alt='testil5' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis5} alt='testis5' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <span className='flex'>
//                <button className='bg-[#ff7169] rounded text-[#fff] p-3 flex items-center'><Image src={testibtn5} alt='testibtn5' className='mx-1'/>NON-TECH</button>
//             <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             </span>
           
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#dcc9ff] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil6} alt='testil6' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis6} alt='testis6' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#945ff6] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#945ff6] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#cde2ff] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil7} alt='testil7' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis7} alt='testis7' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#ffdcad] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil8} alt='testil8' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis8} alt='testis8' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#f8b35c] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#f8b35c] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#febab5] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil9} alt='testil9' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis9} alt='testis9' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#ff7169] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#ff7169] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>

//         <div className='testimonialwrapper '>
//           <div className='grid grid-cols-1 lg:grid-cols-12  '>
//           <div className='col-span-1 lg:col-span-4 bg-[#e0fff9] p-5 flex flex-col text-center justify-center items-center'>
//             <h1 className='font-semibold text-xl mb-7'>Pradyot <br/>Kumar Verma</h1>
//             <span><Image src={testil10} alt='testil10' className='mb-4'/></span>
//             <div className='flex '>
//             <button className='testbutton'><svg stroke="currentColor" fill="currentColor"  viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></button>
//             <button className='testbutton ml-2'>
//             <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
//             </button>
//             </div>
//             <span><Image src={testis10} alt='testis10' className='my-6'/></span>
//           </div>
//           <div className='col-span-1 lg:col-span-8 p-5'>
//             <h1 className='text-[36px] fonr-bold mb-4'>From Mechanical Engineering to SDE at MakeMyTrip</h1>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3'>NON-TECH</button>
//             <button className='bg-[#3081ed] rounded text-[#fff] p-3 ml-4'>FRESHER</button>
//             <p className='my-5 text-gray-400'>In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!</p>
//           </div>
//         </div>
//         </div>
//       </div>
//    </div>
//    </>
//   )
// }

// export default Testmonial

import React from 'react';
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

const testimonials = [
  {
    id: 1,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#febab5",
    companyImage: testi1img,
    studentImage: student1img,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  },
  {
    id: 2,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#dcc9ff",
    companyImage: testil2,
    studentImage: tests2,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  },
  {
    id: 3,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#cde2ff",
    companyImage: testil3,
    studentImage: testis3,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  },
  {
    id: 4,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#ffdcad",
    companyImage: testil4,
    studentImage: testis4,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  },
  {
    id: 5,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#febab5",
    companyImage: testil5,
    studentImage: testis5,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  },
  {
    id: 6,
    name: "Pradyot Kumar Verma",
    backgroundColor: "#febab5",
    companyImage: testil6,
    studentImage: testis6,
    tags: ["NON-TECH", "FRESHER"],
    title: "From Mechanical Engineering to SDE at MakeMyTrip",
    description: `In 2021, I graduated from Mechanical Engineering, seeking a high-paying job. Despite poor college placements, I pursued opportunities in technical firms. Self-study didn't enhance my coding skills, but AccioJob changed that. Friends had completed DSA and Full-stack courses there, so I joined. AccioJob's online classes were interactive, accessible, and taught by exceptional instructors. I relocated to Kanpur mid-course due to hometown internet issues, ensuring seamless learning. Ultimately, AccioJob refined my coding and technical abilities, securing me an SDE position at MakeMyTrip!`
  }
];

const Testimonial = () => {
  return (
    <div className='2xl:mx-24 xl:mx-20 lg:mx-20 md:mx-20 sm:mx-10 mx-5 mb-16 mt-10'>
      <h4 className='banergradienttext text-xl mb-2'>Student Testimonials</h4>
      <h1 className='text-[36px] font-bold mb-8'>Don’t just take our word for it, Go <br/> through AccioJob's Student Reviews</h1>
      <div className='w-[100%]'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='testimonialwrapper mb-8'>
            <div className='grid grid-cols-1 lg:grid-cols-12'>
              <div className={`col-span-1 lg:col-span-4 p-5 flex flex-col text-center justify-center items-center`} style={{ backgroundColor: testimonial.backgroundColor }}>
                <h1 className='font-semibold text-xl mb-7'>{testimonial.name}</h1>
                <Image src={testimonial.companyImage} alt={`${testimonial.name}'s company`} className='mb-4'/>
                <div className='flex'>
                  <button className='testbutton'>
                    <svg stroke="currentColor" fill="currentColor" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
                    </svg>
                  </button>
                  <button className='testbutton ml-2'>
                    <svg stroke="currentColor" fill="currentColor" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <title></title>
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.96-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.229-.616c-.054 2.28 1.581 4.415 3.946 4.89a4.935 4.935 0 0 1-2.224.084 4.927 4.927 0 0 0 4.6 3.419A9.874 9.874 0 0 1 0 19.54a13.955 13.955 0 0 0 7.548 2.212c9.058 0 14.01-7.514 14.01-14.01 0-.213-.004-.425-.014-.636A10.025 10.025 0 0 0 24 4.557z"></path>
                    </svg>
                  </button>
                </div>
                <Image src={testimonial.studentImage} alt={`${testimonial.name}'s company`} className='mt-7'/>
              </div>
              <div className='col-span-1 lg:col-span-8 p-5'>
                <div className='flex mb-7'>
                  {testimonial.tags.map((tag, index) => (
                    <button key={index} className='blackbutton mr-3'>{tag}</button>
                  ))}
                </div>
                <h1 className='font-bold text-[28px] mb-7 leading-[38px]'>{testimonial.title}</h1>
                <p className='text-lg'>{testimonial.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
