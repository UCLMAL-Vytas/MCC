"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/newMainPage/nav";
import Image from "next/image";

const Flowers = () => {
  return (
    <div>
      <Navbar navbarColor={"primary"} section="products" />
      <div className="w-80% sm:w-full md:w-fullm-auto py-36 text-lg content-center MCCcontainer text-black">
        <div className="MCCTitle py-36 font-bold">
          FLOWERS
          <br />
          <br /> High-Quality Cannabis Flowers – Certified & Traceable
        </div>
        <div className="w-3/4">
          
          The demand for premium cannabis flowers is rapidly growing worldwide,
          driven by expanding medicinal and wellness markets. Our flowers are
          cultivated under strict quality controls from certified genetics to
          ensure consistency and potency.
        </div>
        <div className="font-bold">
          Custom cannabinoid and terpene profiles can be tailored to meet
          specific client requirements and market needs.
        </div>
      </div>
      <div className="grid grid-cols-2 w-1/2 sm:w-[85%] pb-24 md:w-[85%] m-auto pt-16">

      <Image
        src="/16.png"
        alt=""
        width={300}
        height={300}/>
        <div className="my-auto">
            <div className="text-left MCCTitle text-primary font-bold">CBD Flower Premium</div>
            <div className="text-lg text-primary"> <b> 16% CBD | 0.5% THC </b> — Rich terpene profile 
            with intense aromas, ideal for specialised 
            formulations.</div>
        </div>

        <Image
        src="/16.png"
        alt=""
        width={300}
        height={300}/>
        <div className="my-auto">
            <div className="text-left MCCTitle text-primary font-bold">CBD Flower EU</div>
            <div className="text-lg text-primary"> <b> {`8% CBD | <0.3% THC`} </b> — Compliant with 
European regulations, suitable for broad 
distribution
            formulations.</div>
        </div>

 <Image
        src="/22thc3.png"
        alt=""
        width={300}
        height={300}/>
        <div className="my-auto">
            <div className="text-left MCCTitle text-primary font-bold">22% THC Flower</div>
            <div className="text-lg text-primary"> <b> {`8% CBD | <0.3% THC`} </b>  — Aromas of kush and lemon, offering a balanced profile for patient use.
</div>
        </div>

 <Image
        src="/24thc3.png"
        alt=""
        width={300}
        height={300}/>
        <div className="my-auto">
            <div className="text-left MCCTitle text-primary font-bold">24% THC Flower</div>
            <div className="text-lg text-primary"> <b> {`8% CBD | <0.3% THC`} </b> — Notes of haze and metallic aromas, designed for therapeutic applications.
            </div>
        </div>

        </div>
    <Footer language="en" />
    </div>

    
  );
};

export default Flowers;
