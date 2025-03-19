"use client"

import Link from "next/link";
import { Title } from "../Title";
import { TextAnimate } from "@/components/magicui/text-animate";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
export function HomePage() {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto border-gray-200">
            <Title />
            <div
                className="w-[40vw] h-fit text-center text-black text-[20px] mt-[15vh] mb-[10vh]"
            >
                At <b>LocalBoss</b>, we bring the freshest groceries straight to your doorstep.
                From farm-fresh vegetables and juicy fruits to daily essentials, snacks, and
                beverages, we make sure you get the best quality at unbeatable prices.
            </div>

            <Link href="/shop">
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white bg-[255,0,100,1] lg:text-lg">
                        Shop Now !
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    );
}
