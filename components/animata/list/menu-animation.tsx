
'use client'
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation'
interface MenuAnimationProps {
  menuItems: string[];
}

export default function MenuAnimation({ menuItems }: MenuAnimationProps) {
  const router = useRouter()

  return (
    <div className="flex min-w-fit flex-col gap-3 overflow-hidden px-10 absolute top-[5vh] left-0">
      {menuItems.map((item, index) => (
        <button key={index} onClick={() => router.push(`/${item.toLowerCase().replace(/\s+/g, '-')}`)} className="group flex items-center gap-1 cursor-pointer min-h-fit">
          <ArrowRight className="size-5 -translate-x-full text-white opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-blue-500 group-hover:opacity-100 md:size-8" />

          <p className="z-10 -translate-x-6 font-mono font-semibold text-amber-50 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-blue-500 md:-translate-x-12 md:text-3xl md:group-hover:translate-x-0 leading-none ">
            {item}
          </p>
        </button>
      ))}
    </div>
  );
}
