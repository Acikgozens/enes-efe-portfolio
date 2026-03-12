"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "@/dictionaries/en.json";
import tr from "@/dictionaries/tr.json";

type Lang = "en" | "tr";
type Dictionary = typeof en;

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
    dict: Dictionary;
    mounted: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: "en",
    setLang: () => {},
    dict: en,
    mounted: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLangState] = useState<Lang>("en");
    const [mounted, setMounted] = useState(false);

    // Single effect: read localStorage and mark as mounted atomically.
    // This ensures lang is set to the correct value BEFORE the first
    // client-side paint, preventing any split-state renders.
    useEffect(() => {
        const stored = localStorage.getItem("lang");
        if (stored === "tr") {
            setLangState("tr");
        }
        // Mark mounted after lang is set — React batches these in the same commit
        setMounted(true);
    }, []);

    // Keep <html lang> attribute in sync
    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    const setLang = (next: Lang) => {
        setLangState(next);
        localStorage.setItem("lang", next);
    };

    const dict = lang === "tr" ? (tr as Dictionary) : en;

    if (!mounted) {
        return <div className="bg-background min-h-screen" />;
    }

    return (
        <LanguageContext.Provider value={{ lang, setLang, dict, mounted }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext);
}
