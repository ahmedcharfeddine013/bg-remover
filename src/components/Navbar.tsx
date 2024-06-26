"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { SignedIn } from "@clerk/nextjs";
import { SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={cn(
        "bg-background z-50 fixed top-0 w-full border-b-2 transition-all px-4 duration-200 ease-in shadow-md",
        scrolled ? "py-2" : "py-6"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <div className="text-2xl font-bold">
            <Logo />
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href={"/pricing"}>Pricing</NavLink>
            <NavLink href={"/upload"}>Remove Background</NavLink>
            <NavLink href={"/examples"}>Examples</NavLink>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <span className="text-2xl">☰</span>
          </Button>
          <div className="hidden md:block">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
          <SignedOut>
            <Button className="bg-white text-primary hover:bg-gray-300 px-4 py-2 hidden md:block">
              <Link href={"/auth/sign-in"}>Login</Link>
            </Button>
            <Button className="px-4 py-2 hidden md:block">
              <Link href={"/auth/sign-up"}>Sign up</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 bg-background rounded-lg shadow-lg">
          <div className="flex flex-col space-y-2 p-4">
            <NavLink href={"/pricing"}>Pricing</NavLink>
            <NavLink href={"/upload"}>Remove Background</NavLink>
            <NavLink href={"/examples"}>Examples</NavLink>
          </div>

          <div className="flex flex-col  space-y-2 p-4 border-t border-gray-700">
            <div className="flex items-center justify-center">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <SignedOut>
              <Button className="bg-white text-primary hover:bg-gray-300 px-4 py-2  md:block">
                <Link href={"/auth/sign-in"}>Login</Link>
              </Button>
              <Button className="px-4 py-2  md:block">
                <Link href={"/auth/sign-up"}>Sign up</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

export function NavLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:text-primary text-sm duration-100 transition-all ease-in font-bold focus-visible:text-primary ",
        pathname === props.href && "text-primary"
      )}
    />
  );
}
