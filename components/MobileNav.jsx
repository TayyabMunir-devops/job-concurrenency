"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries
          size={24}
          className=" cursor-pointer text-2xl font-extrabold text-accent"
        />
      </SheetTrigger>
      <SheetContent>
        <div className=" mt-16 mb-16 text-center">
          <h1 className=" text-2xl text-white font-bold">Haseeb<span className=" text-accent">.</span></h1>
        </div>
        <nav className=" flex flex-col justify-center items-center gap-8">
            {links.map((link, index)=> {
                return(
                    <a
                        key={index}
                        href={link.path}
                        className={`text-lg capitalize hover:text-accent transition-all duration-300 ${link.path === pathname && 'flex text-accent font-semibold border-b-2 border-accent'}`}
                    >
                        {link.name}
                    </a>
                )
            })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
