import Image from "next/image";
import React from "react";
import { Inter } from 'next/font/google'
import Navbar from "@/components/navbar/navbar";
import Herosection from "@/components/banner";

// import Footer from "@/components/footer/footer";


const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function Homeindex() {

  return (
    <main className={`${inter.variable}  flex min-h-screen flex-col w-[100%]`}>
    <Navbar/>
     <div className="w-[100%]">
      <Herosection/>
     </div>
     {/* <Footer/> */}
    </main>
  );
}
