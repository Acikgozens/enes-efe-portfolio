"use client";

import Image from 'next/image';
import { useLanguage } from "./LanguageProvider";

export default function PlayerCard() {
    const { dict } = useLanguage();

    return (
        <div className="w-full max-w-[280px] lg:max-w-[320px] aspect-square flex flex-col items-center justify-center gap-y-6 md:gap-y-10 p-4 md:p-8
                    border-4 border-gray-200 dark:border-[#333] bg-white dark:bg-transparent 
                    hover:border-accent hover:shadow-[0_0_20px_rgba(253,184,19,0.2)] 
                    transition-all duration-300 group cursor-default">

            {/* Static square avatar frame with retro 3D depth shadow */}
            <div className="relative border-4 border-gray-200 dark:border-[#333] bg-white dark:bg-[#1a1a1a] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2 md:p-4 max-w-[160px] md:max-w-[240px] w-full aspect-square flex-shrink-0">
                <Image
                    src="/avatar.png"
                    alt="Player Avatar"
                    fill
                    className="object-contain"
                    style={{ imageRendering: 'pixelated' }}
                    priority
                    unoptimized
                />
            </div>

            <h3 className="font-pressStart text-black dark:text-white text-sm md:text-base uppercase tracking-widest text-center pb-2">
                {dict.ui.player1}
            </h3>

        </div>
    );
}
