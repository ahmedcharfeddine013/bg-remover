import { hero_bg } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 w-full md:w-[80%] gap-6">
      <div className="rounded-xl overflow-hidden">
        <Image src={hero_bg} alt="hero" width={600} height={600} />
      </div>
      <div className="flex flex-col gap-5 text-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          Remove Background From Image for Free Using Artificial Intelligence
        </h1>
        <div className="flex items-center justify-center">
          <Button className="p-8 text-lg"> CHOOSE A PHOTO</Button>
        </div>
        <div className="pt-1 bg-gray-300 rounded-xl"></div>
        <p className="text-xs">
          By uploading an image or URL you agree to our Terms of Service . This
          site is protected by reCaptcha and its Privacy Policy and Terms of
          Service apply.
        </p>
      </div>
    </div>
  );
};

export default Hero;
