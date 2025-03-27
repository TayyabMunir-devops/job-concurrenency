import Link from "next/link";
import React from "react";
import { Nav } from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className=" py-5 lg:py-10">
      <div className="container mx-auto flex items-center justify-between">
        <div>
        <Link href="/">
          <h1 className="text-white text-2xl lg:text-4xl font-bold">
            Haseeb<span className="text-accent">.</span>
          </h1>
        </Link>
        </div>
        <div className="flex gap-5 items-center">
          <div className=" hidden lg:flex">
            <Nav />
          </div>
          <Link href='/contact'>
            <Button className='bg-accent text-primary duration-500 hover:text-accent'>Hire Me</Button>
          </Link>
          <div className="lg:hidden flex">
            <MobileNav/>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
