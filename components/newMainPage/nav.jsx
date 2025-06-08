import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";

export default function Navbar({ navbarColor, section = "home" }) {
  const [isSelected, setIsSelected] = useState(section);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} fixed w-full pb-12 z-50`}>
      <div className="xs:hidden sm:hidden  w-screen py-4">
<ul className={`flex justify-evenly gap-6 w-full text-[5vw] flex-shrink-0 ${styles.navLinks}`}>          <li onClick={() => setIsSelected("mcc")}>
            <Link className={`text-[5vw] ${isSelected === "mcc" ? ` border-b-8 border-${navbarColor}` : ""} text-${navbarColor}`} href="/mcc"><b>MCC</b></Link>
          </li>
          <li onClick={() => setIsSelected("products")}>
            <Link className={`text-[5vw] ${isSelected === "products" ? ` border-b-8 border-${navbarColor}` : ""} text-${navbarColor}`} href="/products"><b>Products</b></Link>
          </li>
          <li onClick={() => setIsSelected("distribution")}>
            <Link className={` text-[5vw] ${isSelected === "distribution" ? ` border-b-8 border-${navbarColor}` : ""} text-${navbarColor}`} href="/distribution"><b>Distribution</b></Link>
          </li>
          <li>
              <Link href="/" className={` hover:border-b-8 border-${navbarColor} ${isSelected=== "home" ? `border-b-8 ${navbarColor} border-${navbarColor}` : ""} ${styles.logoContainer}`}>
              <div className="flex items-center justify-center h-full">
  <Image 
    src={navbarColor === "white" ? "/logow.png" : "/logobl.png"} 
    alt="MCC Logo" 
    width={300} 
    height={300} 
    className="w-[7vw] h-auto"
  />
</div>

                      </Link>
          </li>
        </ul>

        
      </div>

      <div className="lg:hidden xl:hidden md:hidden scale-[200%] flex justify-between items-center px-6 py-4">
        <button onClick={() => setMenuOpen(!menuOpen)} className={`text-xl text-${navbarColor}`}>
        </button>

        
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-white text-black flex flex-col justify-center items-center text-3xl">
          <button onClick={() => setMenuOpen(false)} className="absolute top-5 right-5 text-4xl">✕</button>
          <Link href="/" className={`${styles.logoContainer}`}>
          <div className={styles.logo}>
            <Image src="/logob.png" alt="MCC Logo" width={60} height={60} className="justify-center m-auto" />
          </div>
        </Link>
          <Link className="text-black"href="/mcc" onClick={() => setMenuOpen(false)}>MCC</Link>
          <Link className="text-black" href="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link className="text-black"href="/distribution" onClick={() => setMenuOpen(false)}>Distribution</Link>
        </div>
      )}
    </nav>
  );
}