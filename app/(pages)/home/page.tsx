"use client";

import { ShimmerButton } from "@/components/magicui/shimmer-button";
import Link from "next/link";
import "./page.css";
import { LogoCarousel } from "@/components/cultui/LogoCarousel";
import { GradientHeading } from "@/components/cultui/GradientHeading";
import { Typewriter } from "@/components/cultui/typewriter";
import { ReactNode } from "react";

export default function Home() {
  return (
    <section
      className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto border-gray-200 md:mt-0 mt-[5vh]"
      aria-label="Homepage Call to Action"
    >
      {/* Hero Text */}
      <div
        className="w-auto md:w-[40vw] h-fit text-center text-amber-50 text-[20px] mt-[15vh] mb-[10vh] p-5 maintext"
        role="region"
        aria-labelledby="hero-heading"
      >
        <p id="hero-heading" className="font-bold">
          At <strong>LocalBoss</strong>, we deliver more than just groceries —
          we bring your entire neighborhood market to your doorstep. From
          farm-fresh produce and daily essentials to home & kitchen must-haves,
          beauty products, and electronics, we’ve got everything you need, all
          in one place, at unbeatable prices.
        </p>
      </div>

      {/* Call to Action Button */}
      <Link href="/shop" aria-label="Go to shop page">
        <ShimmerButton className="shadow-2xl">
          <span aria-label="Go to shop page" className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white bg-[255,0,100,1] lg:text-lg">
            Shop Now!
          </span>
        </ShimmerButton>
      </Link>

      {/* Investor Section */}
      <section
        className="space-y-8 my-24 bg-amber-50 rounded-lg p-10"
        aria-label="Investor Callout Section"
      >
        <div className="w-full max-w-screen-lg mx-auto flex flex-col items-center space-y-8">
          <div className="text-center">
            <GradientHeading variant="secondary">
              The best investors are already here
            </GradientHeading>
            <GradientHeading size="xl">
              Join Us!
            </GradientHeading>
          </div>

          <LogoCarousel columnCount={3} aria-label="Investor logos" />
        </div>
      </section>
    </section>
  );
}

const texts = [
  "you tryna save? 👀",
  "check out localboss rn fr 🔥",
  "add to cart, checkout, chill 😌",
  "now you’re the local MVP 🛒💯",
];

function IosOgShellCard({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-xs md:max-w-xl md:min-w-80 mx-auto flex flex-col rounded-lg bg-neutral-900 px-px pb-px shadow-inner-shadow">
      <div className="p-4 flex flex-col md:px-5">
        <div className="mb-2 text-sm md:text-neutral-500 text-neutral-500">
          iMessage
        </div>
        <div className="mb-3 text-xs md:text-sm text-neutral-500">
          Today 11:29
        </div>
        <div className="ml-auto px-4 py-2 mb-3 text-white bg-blue-500 rounded-2xl">
          <span>Hey!</span>
        </div>
        <div className="mr-auto px-4 py-2 mb-3 text-white bg-neutral-700 rounded-2xl">
          <span>Whats up bretheren?!</span>
        </div>
        {children}
        <div className="mt-3 text-xs md:text-sm text-neutral-500">
          Delivered
        </div>
      </div>
    </div>
  );
}
