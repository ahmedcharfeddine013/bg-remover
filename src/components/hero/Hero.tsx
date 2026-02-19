import { hero_bg } from "@/constants";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 place-items-start  w-full gap-20 px-[10%]">
      <div className="flex flex-col items-start justify-start  gap-5 text-start text-gray-800 ">
        <h1 className="text-2xl md:text-6xl ">AI Background Remover</h1>
        <p className="text-lg md:text-xl text-gray-600">
          Remove background from image instantly, fully automated and{" "}
          <span className="text-primary font-bold">FREE</span>
        </p>
        <div className="flex items-center justify-center">
          <Button className="p-8 text-lg" asChild>
            <Link href={"/upload"}>CHOOSE A PHOTO</Link>
          </Button>
        </div>
        <div className="pt-1 bg-gray-300 rounded-xl"></div>
      </div>
      <div className="rounded-xl overflow-hidden">
        {/* <Image src={hero_bg} alt="hero" width={600} height={600} /> */}
        <video
          width="450"
          height="240"
          autoPlay
          muted
          playsInline
          preload="auto"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
