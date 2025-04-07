import React from 'react'
import { LineShadowText } from '@/components/magicui/line-shadow-text'
import { useTheme } from "next-themes";
import { AuroraText } from '@/components/magicui/aurora-text'
import './Title.css'

export function Title() {
    const theme = useTheme();
    const shadowColor = theme.resolvedTheme === "dark" ? "white" : "black";
    return (
        <h1 className="text-5xl text-black font-semibold leading-none tracking-tighter bg-amber-50 mx-5 text-center rounded-2xl w-[32vw] sm:text-1xl md:text-7xl lg:text-8xl">
            Local
            <AuroraText>
                Boss
            </AuroraText>
        </h1>
    )
}
