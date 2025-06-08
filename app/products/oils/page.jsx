"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/newMainPage/nav";
import Image from "next/image";

const Oils = () => {
  return (
    <div>
      <Navbar navbarColor={"primary"} section="products" />
      <div className="w-80% m-auto py-36 text-lg content-center MCCcontainer text-black">
        <div className="MCCTitle py-36 font-bold">
          OILS
          <br />
          <br /> Certified Cannabis full, spectrum Oils
        </div>
        <div className="w-3/4">
          
          All our oils are developed from certified genetics under controlled
          conditions, with full traceability from seed to extract. Each batch is
          lab-tested and accompanied by complete documentation for export,
          regulatory review, and formulation use. Our most popular formulations,
          developed from certified genetics and fully traceable.
        </div>
        <div className="font-bold">Custom profiles available upon request </div>
      </div>
      <div className="grid grid-cols-2 w-1/2 sm:w-[85%] pb-24 md:w-[85%] m-auto pt-16">
        <Image src="/oil.png" alt="" width={300} height={300} />
        <div className="my-auto">
          <div className="text-left MCCTitle text-primary font-bold">
            CBD Oils
          </div>
          <div className="text-lg text-primary">
            
            <b> {`Available Concentration: 3% and 1.5%`} </b>
            — Decarboxylated cannabidiol (CBD). Retains minor cannabinoids and
            terpenes while keeping THC levels under 0.3%.
            <br />
            <br />
            <b> CBD</b> is the activated form of CBDA, offering high stability
            and bioavailability for wellness and pharmaceutical formulations..
          </div>
        </div>

        <Image
          src="/oil.png"
          alt=""
          width={300}
          height={300}
          className="pt-12"
        />
        <div className="my-auto pb-36 pt-20 ">
          <div className="text-left MCCTitle text-primary font-bold">
            
            CBDA Oil
          </div>
          <div className="text-lg text-primary">
            
            <b> {`Available Concentration: 1.5% `} </b>— Cannabidiolic acid
            (CBDA) preserved in its natural, raw form through cold extraction.
            Ideal for advanced formulations and mental diseases
            <br />
            <br />
            <b> CBDA</b> is the acidic precursor to CBD—non-activated,
            heat-sensitive, and supported by emerging scientific studies for its
            distinct properties
          </div>
        </div>

        <Image src="/oil.png" alt="" width={300} height={300} />
        <div className="my-auto">
          <div className="text-left MCCTitle text-primary font-bold">
            THC Oils
          </div>
          <div className="text-lg text-primary">
            
            <b> {`Available concentrations: 3% and 1.5%`} </b>
            — Delta-9 tetrahydrocannabinol (THC), fully activated through decarboxylation. Designed for use in medical and licensed production environments.
            <br />
            <br />
            <b> THC</b>  is the active, psychoactive cannabinoid derived from THCA, suitable for controlled therapeutic applications.

          </div>
        </div>

        <Image src="/oil.png" alt="" width={300} height={300} />
        <div className="my-auto">
          <div className="text-left MCCTitle text-primary font-bold">
            THCA Oils
          </div>
          <div className="text-lg text-primary">
            
            <b> {`Available concentration: 1.5%`} </b>
            — Raw tetrahydrocannabinolic acid (THCA), extracted at low temperatures to maintain its non-psychoactive, natural structure.

            <br />
            <br />
            <b> THCA</b>   is the precursor to THC, offering a non-activated cannabinoid profile for specialized use supported by emerging scientific studies for its distinct properties.


          </div>
        </div>


      </div>
      <Footer language="en" />
    </div>
  );
};

export default Oils;
