"use client";

import { User } from "lucide-react";

export default function PlayerCard() {
    return (
        <div className="w-full max-w-[280px] lg:max-w-[320px] aspect-square flex flex-col items-center justify-center 
                    border-4 border-[#333] bg-[#1a1a14] 
                    hover:border-accent hover:shadow-[0_0_20px_rgba(253,184,19,0.2)] 
                    transition-all duration-300 group cursor-default">

            <User className="w-16 h-16 md:w-24 md:h-24 text-gray-400 group-hover:text-white transition-colors mb-6" />

            <h3 className="font-pressStart text-white text-sm md:text-base uppercase tracking-widest text-center">
                PLAYER 1
            </h3>

        </div>
    );
}
