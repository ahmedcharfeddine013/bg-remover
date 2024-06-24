"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

const Footer = () => {
  return (
    <footer className=" flex flex-col gap-4 lg:grid lg:grid-cols-4 border-t-2 p-10">
      <div className="lg:col-span-2 space-y-2">
        <FooterSectionHeader text="About BGR.AI" />
        <p className="text-sm text-gray-600">
          BGR.AI is an A.I. powered tool that uses advanced computer vision
          algorithms to detect the foreground pixel and separates the background
          completely from the foreground.
        </p>
      </div>
      <div className="space-y-2">
        <FooterSectionHeader text="Company" />
        <div className="flex items-start flex-col gap-1">
          <FooterLink href={"/"}>About Us</FooterLink>
          <FooterLink href={"/"}>Blog</FooterLink>
        </div>
      </div>
      <div className="space-y-2">
        <FooterSectionHeader text="Support" />
        <div className="flex items-start flex-col gap-1">
          <FooterLink href={"/"}>Contact Us</FooterLink>
          <FooterLink href={"/"}>Terms & Conditions</FooterLink>
          <FooterLink href={"/"}>Privacy Policy</FooterLink>
          <FooterLink href={"/"}>Refund Policy</FooterLink>
          <FooterLink href={"/"}>Cancellation Policy</FooterLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

function FooterSectionHeader({ text }: { text: string }) {
  return <h1 className="font-bold text-md">{text}</h1>;
}

function FooterLink(props: Omit<ComponentProps<typeof Link>, "className">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      className={cn(
        "text-gray-600 text-sm hover:text-black duration-100 transition-all ease-in  focus-visible:text-black ",
        pathname === props.href && ""
      )}
    />
  );
}
