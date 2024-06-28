"use client";

import Hero from "@/components/hero/Hero";
import { finger_tick } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturesList = [
  "Automatically detect subjects on photos",
  "Neat, clear & smooth cutout edges",
  "Capable of handling hair or any other fur edges",
  "Process over 1,000 of images in a single upload",
];

export default function Home() {
  useGSAP(() => {
    gsap.to("#features_title", {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".features_title",
        start: "top 0%",
        end: "bottom 0%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.to(".feature_item", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power2.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".feature_item",
        start: "top 80%",
        end: "bottom 0%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <Hero />
      <div className="mt-48 gap-20 flex items-center justify-center flex-col">
        <h1
          id="features_title"
          className="opacity-0 translate-y-20 text-2xl md:text-4xl font-bold"
        >
          What BGR.AI Can Do For You...
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full md:w-[70%] gap-8">
          <div className="flex items-center justify-center">
            <Image src={finger_tick} alt="" height={200} width={200} />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">
              Remove The Background From Your Image Instantly
            </h3>
            <p>
              Get images in a transparent, white or customized background in 3
              seconds or less for free.
            </p>
            <ul>
              {FeaturesList.map((item) => (
                <li
                  key={item}
                  className="feature_item flex translate-x-48 opacity-0 flex-row items-center gap-2 "
                >
                  <div className="p-1 w-fit h-fit rounded-full bg-primary"></div>{" "}
                  {item}
                </li>
              ))}
            </ul>
            <Link href={"/upload"} className="text-primary font-bold text-xs">
              Try Our Free Background Removal
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
