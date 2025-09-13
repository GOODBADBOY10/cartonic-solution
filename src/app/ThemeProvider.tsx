"use client";

import { useState } from "react";
import Header from "./Header";

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => setDarkMode((prev) => !prev);

    return (
        <div className={darkMode ? "dark" : ""}>
            <Header isDarkMode={darkMode} toggleTheme={toggleTheme} />
            <main>{children}</main>
        </div>
    );
}
