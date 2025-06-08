"use client";

import { Footer } from '@/components/footer';
import Navbar from '@/components/newMainPage/nav';
import AccordionText from '@/components/newMCC/accordiontext';
const Page=()=> {
    return (
      <div className='relative'>
        <Navbar navbarColor={"primary"} section='mcc' />
        <AccordionText />
        <Footer language="en" />
      </div>
    )
  
}

export default Page