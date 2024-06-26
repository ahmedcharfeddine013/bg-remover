"use client";

import FaqSection from "@/components/pricing/Faq";
import { Button } from "@/components/ui/button";
import { icons } from "@/constants";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PricingPage = () => {
  useGSAP(() => {
    gsap.to("#free_plan", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      scale: 1,
      ease: "power4.out",
      delay: 0.5,
    });
    gsap.to("#premium_plan", {
      opacity: 1,
      scale: 1,
      ease: "power4.out",
      duration: 0.5,
      delay: 0.2,
    });
    gsap.to("#pro_plan", {
      opacity: 1,
      x: 0,
      duration: 0.5,
      scale: 1,
      ease: "power4.out",
      delay: 0.5,
    });
  });

  return (
    <div>
      <div className="flex items-center flex-col gap-4  justify-center  mx-10">
        <h1 className="text-2xl md:text-4xl font-bold">
          Get Full Resolution images
        </h1>
        <p className="text-center">
          Take photo editing to the next level with an affordable background
          remover.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 m-20 ">
        {/* Free Plan */}
        <div
          id="free_plan"
          className="border-2  -translate-x-48 opacity-0 rounded-xl overflow-auto h-fit shadow-lg"
        >
          <div className="p-6">
            <div className="space-y-3">
              <h4>New Account</h4>
              <h1 className="text-4xl font-bold">Free</h1>
              <div className="pt-1 rounded-3xl bg-gray-200"></div>
            </div>
            <div className="my-10 flex flex-col items-center gap-5">
              <div className="flex flex-row gap-2">
                <Image
                  src={icons.favorite_gallery}
                  alt=""
                  height={24}
                  width={24}
                />
                <p>1 free high-res download</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.loop} alt="" height={24} width={24} />
                <p>Unlimited free previews on BGR.AI</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.eye} alt="" height={24} width={24} />
                <p>50 free previews via API and app</p>
              </div>
            </div>
            <div>
              <Button className="w-full bg-background text-gray-700 border-2 border-gray-700 hover:bg-gray-100">
                Sign up free
              </Button>
            </div>
          </div>
          <div className="py-4 bg-gray-100 flex flex-col text-gray-700 text-center text-sm px-6 ">
            <p className="font-bold">Free forever</p>
            <p>Recommended for personal use</p>
          </div>
        </div>
        {/* Premium Plan */}
        <div
          id="premium_plan"
          className="border-2 opacity-0 rounded-xl h-fit shadow-lg overflow-auto"
        >
          <div className="p-6">
            <div className="space-y-3">
              <h4>Premium Plan</h4>
              <h1 className="text-4xl font-bold">
                $19.99<span className="font-normal text-sm">/Monthly</span>
              </h1>
              <div className="pt-1 rounded-3xl bg-gray-200"></div>
            </div>
            <div className="my-10 flex flex-col items-center gap-5">
              <div className="flex flex-row gap-2">
                <Image
                  src={icons.favorite_gallery}
                  alt=""
                  height={24}
                  width={24}
                />
                <p>500 high-res download</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.loop} alt="" height={24} width={24} />
                <p>Unlimited free previews on BGR.AI</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.eye} alt="" height={24} width={24} />
                <p>Unlimited free previews via API and app</p>
              </div>
            </div>
            <div>
              <Button className="w-full">Subscribe now</Button>
            </div>
          </div>
          <div className="py-4 bg-gray-100 flex flex-col text-gray-700 text-center text-sm px-6 ">
            <p>
              <span className="font-bold">Risk free: </span>14 Days Money Back
              Guarantee
            </p>
            <p>
              <span className="font-bold">Flexible: </span>upgrade, downgrade or
              cancel anytime
            </p>
            <p>
              <span className="font-bold">Fair: </span>unused credits roll over
              as long as you keep subscribing
            </p>
          </div>
        </div>
        {/* Pro Plan */}
        <div
          id="pro_plan"
          className="border-2 opacity-0 translate-x-48 rounded-xl h-fit shadow-lg overflow-auto"
        >
          <div className="p-6">
            <div className="space-y-3">
              <h4>Pro Plan</h4>
              <h1 className="text-4xl font-bold">
                $49.99<span className="font-normal text-sm">/Monthly</span>
              </h1>
              <div className="pt-1 rounded-3xl bg-gray-200"></div>
            </div>
            <div className="my-10 flex flex-col items-center gap-5">
              <div className="flex flex-row gap-2">
                <Image
                  src={icons.favorite_gallery}
                  alt=""
                  height={24}
                  width={24}
                />
                <p>Unlimited high-res download</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.loop} alt="" height={24} width={24} />
                <p>Unlimited free previews on BGR.AI</p>
              </div>
              <div className="flex flex-row gap-2">
                <Image src={icons.eye} alt="" height={24} width={24} />
                <p>Unlimited free previews via API and app</p>
              </div>
            </div>
            <div>
              <Button className="w-full">Subscribe now</Button>
            </div>
          </div>
          <div className="py-4 bg-gray-100 flex text-sm flex-col text-gray-700 text-center px-6 ">
            <p>
              <span className="font-bold">Pay Only Once. </span>Credits
              available for use within 3 year
            </p>
          </div>
        </div>
      </div>
      {/* FAQ ection */}
      <FaqSection />
    </div>
  );
};

export default PricingPage;
