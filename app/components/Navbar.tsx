import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '@/public/Images/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-emerald-900 top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Link href="/">
                <p className="text-[15px] md:text-[20px] italic">ᗩᖇYᗩᑎ ᑎEᔕTI ᑭOᖇTᖴOᒪIO</p>
            </Link>
            <ul className="hidden md:flex gap-x-10 text-white">
              <li>
                <a href="/AryansResume.pdf" download="AryansResume">Resume</a>
              </li>
              <li>
                <Link href="#experience">
                  <p>Experience</p>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <p>Projects</p>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <p>About</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;