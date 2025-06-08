import Image from "next/image";
import React from "react";

 const Header = ({text,language}) => {
  return (
    <header id="header">
      <div className="intro">
              <div className=" intro-text">
              <Image src="/logo.png" alt="logo" width={500} height={500} className="m-auto border border-black scale-[50%]" />
                <h1  className="font-bold -translate-y-24" >
                  {text?.title[language]}
                  <span></span>
                </h1>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  {text?.learnMore[language]}
                </a>
              </div>
            </div>
    </header>
  );
};
export default Header;