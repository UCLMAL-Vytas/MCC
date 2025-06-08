"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Page1 from "@/components/newMainPage/page1";
import Page2 from "@/components/newMainPage/page2";
import Page3 from "@/components/newMainPage/page3";
// import Page4 from "@/components/newMainPage/page4";
import Page5 from "@/components/newMainPage/page5";
import Page6 from "@/components/newMainPage/page6";
import Page7 from "@/components/newMainPage/page7";
import Page8 from "@/components/newMainPage/page8";
import Page9 from "@/components/newMainPage/page9";
import Page10 from "@/components/newMainPage/page10";
import Navbar from "@/components/newMainPage/nav";
import { Footer } from "@/components/footer";



export default function Home() {
  
  const [navbarColor, setNavbarColor] = useState("white");


  useEffect(() => {
    window.scrollTo(0, 0);
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(".section-1", { yPercent: 0 });
    gsap.set(".section-2", { yPercent: 0 });
    gsap.set(".section-3", { yPercent: 0 });
    // gsap.set(".section-4", { yPercent: 0 });
    gsap.set(".section-5", { yPercent: 0 });
    gsap.set(".section-6", { yPercent: 0 });
    gsap.set(".section-7", { yPercent: 0 });
    gsap.set(".section-8", { yPercent: 0 });
    gsap.set(".section-9", { yPercent: 0 });
    gsap.set(".section-10", { yPercent: 0 });
    
    const sections = [
      { selector: ".section-1", color: "white" },
      { selector: ".section-2", color: "white" },
      { selector: ".section-3", color: "white" },
      // { selector: ".section-4", color: "primary" },
      { selector: ".section-5", color: "white" },
      { selector: ".section-6", color: "white" },
      { selector: ".section-7", color: "white" },
      { selector: ".section-8", color: "white" },
      { selector: ".section-9", color: "white" },
      { selector: ".section-10", color: "white" },
    ];

    sections.forEach(({ selector, color }) => {
      ScrollTrigger.create({
        trigger: selector,
        start: "top center",
        end: "bottom center",
        scrub: 1,
        onEnter: () => setNavbarColor(color),
        onLeaveBack: () => setNavbarColor(color),
      });
    });


    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Cleanup on unmount
  }, []);

  return (
    <div className="w-[100vw] overflow-x-hidden">
    
      <Navbar navbarColor={navbarColor} />

      
      <div className="relative h-[900vh] ">
        <div className="scroll-container ]">
          <section className="section-1 relative left-0 w-full ">
            <Page1 />
          </section>
          <section className="section-2 relative left-0 w-full ">
            <Page2 />
          </section>
          <section className="section-3 relative left-0 w-full ">
            <Page3 />
          </section>
          {/* <section className="section-4 relative left-0 w-full "> */}
            {/* <Page4 /> */}
          {/* </section> */}
          <section className="section-5 relative left-0 w-full ">
            <Page5 />
          </section>
          <section className="section-6 relative left-0 w-full ">
            <Page6 />
          </section>
          <section className="section-7 relative left-0 w-full ">
            <Page7 />
          </section>
          <section className="section-8 relative left-0 w-full ">
            <Page8 />
          </section>
          <section className="section-9 relative left-0 w-full ">
            <Page9 />
          </section>
          <section className="section-10 relative left-0 w-full ">
            <Page10 />
          </section>
        </div>
        <div>
          <Footer language="en" />
        </div>
      </div>
    </div>
  );
}