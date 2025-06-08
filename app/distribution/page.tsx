"use client";

import { Footer } from "@/components/footer";
import Navbar from "@/components/newMainPage/nav";

const Distro = () => {
  return (
    <div>
      <Navbar navbarColor={"primary"} section="distribution" />
      <div className="w-80% m-auto text-lg py-36 content-center MCCcontainer">
        <div className="MCCTitle py-24 font-bold">
          Distribution& Brokerage – Certified, Transparent, Scalable
          <br />
          <br />
          <br />
          <br /> Pharmaceutical-Grade Product Distribution
        </div>
        <div className="w-3/4 py-8">
          We operate a pharmaceutical distribution model that meets{" "}
          <b>GACP and GMP standards</b>, depending on the product and
          destination market. Our process ensures{" "}
          <b>high quality, consistency, and full traceability</b>, from harvest
          to final delivery
        </div>
        <div className="font-bold MCCTitle py-12">
          Transparent Brokerage Model
        </div>
        <div className="w-3/4 py-8">
          We offer a <b> fair and transparent brokerage system</b>, connecting
          farmers directly with clients. Our model
          <b>promotes profit-sharing</b>, supports small producers, and
          simplifies <b>logistics and contract handling</b> to streamline
          large-scale B2B operations.
        </div>
        <div className="font-bold MCCTitle py-12">
          Certifications & Licensing
        </div>
        <div className="w-3/4 py-8">
          We hold all required <b>licenses and certifications</b> for:
        </div>
        <div className=" text-lg">
          <ul>
            <li>
              <li>- Cultivation (including narcotic crops)</li>
              <li>- Extraction and transformation</li>
              <li>- Packaging and labeling</li>
              <li>- Domestic and international expor</li>
            </li>
          </ul>
        </div>
      </div>
      <Footer language="en" />
    </div>
  );
};

export default Distro;
