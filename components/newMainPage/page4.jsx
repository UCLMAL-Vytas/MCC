"use client";

import Image from "next/image";

const Page3 = () => {
  return (
    <div className={`   bg-cover  h-[100vh] w-[100vw] items-center justify-center overflow-hidden`} >
        <div className="flex flex-col container items-left justify-left h-screen pt-[10%] flex-wrap gap-8">
            <Image src="/test2.png" alt="" width={500} height={500} />
            <Image src="/test3.png" alt="" width={300} height={300} className="justify-right ml-[10%]" />
            <Image src="/test 1.png" alt="" width={500} height={500} className="pt-[100px]" />

        </div>
      {/* <div className="absolute text-white text-8xl top-[60%] right-[10%]">بغار بلق وه حتفنلما بلقلا.</div>
      <div className="absolute  text-white text-[3rem] pt-8 top-[63%] right-[10%]"><i>An open heart is a willing heart</i></div> */}
    </div>
  );
};

export default Page3;
