
'use client'
import { ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation'
interface MenuAnimationProps {
  menuItems: string[];
}

export default function MenuAnimation({ menuItems }: MenuAnimationProps) {
  const router = useRouter()

  return (
    <div className="flex min-w-fit flex-col gap-2 overflow-hidden px-10 absolute top-[5vh] left-0">
      {menuItems.map((item, index) => (
        <button key={index} onClick={() => router.push(`/${item.toLowerCase().replace(/\s+/g, '')}`)} className="group flex items-center gap-1 cursor-pointer">
          <ArrowRight className="size-5 -translate-x-full text-black opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-blue-500 group-hover:opacity-100 md:size-8" />

          <h1 className="z-10 -translate-x-6 font-mono font-semibold text-black transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-blue-500 dark:text-white md:-translate-x-12 md:text-3xl md:group-hover:translate-x-0">
            {item}
          </h1>
        </button>
      ))}
    </div>
  );
}
