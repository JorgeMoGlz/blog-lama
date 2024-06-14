"use client";
import { createContext, useState } from 'react';

type ModeType = "light" | "dark";
type ThemeContextType = {
    mode: ModeType;
    toggle: () => void;
}

interface ChildrenProps {
    children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({mode: "light", toggle: () => {}});

export const ThemeProvider = ({ children }: ChildrenProps) => {
    const [mode, setMode] = useState<ModeType>("dark");

    const toggle = (): void => {
        setMode((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggle }}>
            { children }
        </ThemeContext.Provider>
    )
}
