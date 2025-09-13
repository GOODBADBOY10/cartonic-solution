"use client";

import { useState, useEffect } from "react";
import Header from "./Header";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("theme");
            if (saved) return saved === "dark";
            // fallback: check system preference
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return false; // SSR fallback
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
    }, [darkMode]);

    const toggleTheme = () => {
        setDarkMode((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newTheme);
            return newTheme;
        });
    };

    // const [darkMode, setDarkMode] = useState(false);

    // const toggleTheme = () => setDarkMode((prev) => !prev);

    // useEffect(() => {
    //     const saved = localStorage.getItem("theme");
    //     if (saved === "dark") {
    //         setDarkMode(true);
    //         document.documentElement.classList.add("dark");
    //     }
    // }, []);

    // const toggleTheme = () => {
    //     setDarkMode((prev) => {
    //         const newTheme = !prev ? "dark" : "light";
    //         document.documentElement.classList.toggle("dark", newTheme === "dark");
    //         localStorage.setItem("theme", newTheme);
    //         return !prev;
    //     });
    // };


    return (
        <div className={darkMode ? "dark" : ""}>
            <Header isDarkMode={darkMode} toggleTheme={toggleTheme} />
            <main>{children}</main>
        </div>
    );
}
