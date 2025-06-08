"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/newMainPage/nav";
import Image from "next/image";

const Flowers = () => {
  return (
    <div>
      <Navbar navbarColor={"primary"} section="products" />
      <div className="w-80% m-auto pt-36 text-lg content-center MCCcontainer text-black">
        <div className="MCCTitle py-36 font-bold">
          Resins / Hash
          <br />
          <br /> Resins / Hash – High Potency Extracts for Medical & Industrial
          Use
        </div>
        <div className="w-3/4">
          
          All resins are produced from certified genetics under controlled
          post-harvest conditions. Each type offers distinct cannabinoid and
          terpene profiles for targeted applications, with full traceability and
          compliance documentation available.Our most popular formulations,
          developed from certified genetics and fully traceable.
        </div>
        <div className="font-bold">Custom profiles available upon request</div>
      </div>
      <div className="grid grid-cols-2 w-1/2 sm:w-[85%]  pb-24 md:w-[85%] m-auto pt-16">
        <Image src="/hash.jpg" alt="" width={300} height={300} />
        <div className="my-auto">
          <div className="text-left MCCTitle text-primary font-bold">
            CBD Premium Resin
          </div>
          <div className="text-lg text-primary">
            
            <b> {`30% CBD | <1% THC`} </b>— High-grade CBD resin with
            exceptional terpene concentration and rich aromatic profile. Slight
            bubbling indicates purity and minimal processing. Ideal for
            specialized formulations and high-value B2B clients.
            
          </div>
          <div className="pt-8 text-lg text-primary">
            <ul>
                <li>- Full-spectrum profile</li>
                <li>- Extracted from trichome-rich biomass</li>
                <li>- Premium quality</li>
            </ul>
          </div>
        </div>

        <Image
          src="/test pollen image 1.png"
          alt=""
          width={300}
          height={300}
          className="pt-12"
        />
        <div className="my-auto pb-12 pt-12">
          <div className="text-left MCCTitle text-primary font-bold">
            
            CBD EU Resin
          </div>
          <div className="text-lg text-primary">
            
            <b> {` 7% CBD | <0.3% THC`} </b>— Optimized for EU distribution,
            this compliant resin balances cannabinoid content with excellent
            processability. Suitable for wholesale, white-label, and formulation
            markets.
            <div className="pt-8 text-lg text-primary">
              <ul>
                  <li>- EU-compliant {"(<0.3% THC)"}</li>
                  <li>- Stable and easy to handle</li>
                  <li>- Ideal for bulk resale</li>
              </ul>
            </div>
          </div>
        </div>
        <Image src="/hash.jpg" alt="" width={300} height={300} />
        <div className="my-auto pb-12">
          <div className="text-left MCCTitle text-primary font-bold">
            THC Medicinal Resin – High Potency
          </div>
          <div className="text-lg text-primary">
            
            <b> {`40% THC | Trace CBD`} </b>— Powerful medical-grade resin with
            high THC concentration for pharmaceutical or clinical formulations.
            Developed for licensed environments requiring concentrated delivery.
          </div>
          <div className="pt-8 text-lg text-primary">
            <ul>
                <li>- High purity</li>
                <li>- Full documentation for export under license</li>
                <li>- Suitable for decarboxylation and formulations</li>
            </ul>
          </div>
        </div>

        <Image src="/hash.jpg" alt="" width={300} height={300} />
        <div className="my-auto">
          <div className="text-left MCCTitle text-primary font-bold">
            THC: CBD Balanced Medicinal Resin
          </div>
          <div className="text-lg text-primary">
            
            <b> {`30% THC | 10% CBD`} </b>— Balanced cannabinoid profile
            offering enhanced THC absorption with modulated psychoactivity.
            Ideal for medical use where therapeutic effect and tolerability are
            both priorities.
          </div>
          <div className="pt-8 text-lg text-primary">
            <ul>
                <li>- THC-CBD synergy</li>
                <li>- Suitable for formulation into oils or capsules</li>
                <li>- Developed for clinical markets</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer language="en" />
    </div>
  );
};

export default Flowers;
