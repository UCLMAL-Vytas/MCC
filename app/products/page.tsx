"use client"

import { Footer } from "@/components/footer"
import Navbar from "@/components/newMainPage/nav"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return(
        <div>
            <Navbar navbarColor={"primary"} section='products' />
            <div className="flex justify-center items-center h-screen">
  <div className="grid grid-cols-2 lg:w-[25%] sm:w-3/4 pt-24">
    <Image
      src="/flower.jpeg"
      alt=""
      width={200}
      height={200}
      className="justify-end pt-8"
    />
    <div className="my-auto">
      <Link href="/products/flowers">  <div className="MCCTitle text-[2rem] text-left  font-bold text-primary">Flowers</div>
      <div className="text-lg" >CBD, THC</div>
        </Link>
    </div>
  

  <Image
      src="/hash.jpg"
      alt=""
      width={200}
      height={200}
      className="justify-end pt-8"
    />
    <div className="my-auto">
      <Link href="/products/pollen">  <div className="MCCTitle text-[2rem] text-left  font-bold text-primary">Pollen / Hash</div>
      <div className="text-lg" >CBD Pollen, Rosin, Hash</div>
        </Link>
    </div>
  

  <Image
      src="/oils.jpg"
      alt=""
      width={200}
      height={200}
      className="justify-end pt-8"
    />
    <div className="m-auto">
      <Link href="/products/oils">  <div className="MCCTitle text-[2rem] text-left  font-bold text-primary">Oils</div>
      <div className="text-lg" >CBD, CBD-A, THC, THC-A, THCV-A</div>
        </Link></div>
  

</div>

        </div>
        <Footer language="en" />
        </div>
    )
}

export default Page