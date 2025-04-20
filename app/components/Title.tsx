import React from 'react'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { useTheme } from "next-themes";
import { AuroraText } from '@/components/magicui/aurora-text'
import './Title.css'

export function Title() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <h1 className="text-5xl text-black font-semibold leading-none text-center tracking-tighter absolute top-[10vh] right-[19vw] sm:static bg-amber-50 mx-1 sm:mx-5 md:text-center rounded-md sm:rounded-2xl w-[60vw] sm:w-[32vw] md:text-5xl lg:text-8xl">
            Local
            <AuroraText>
                Boss
            </AuroraText>
        </h1>
    )
}
