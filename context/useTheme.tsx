import React from "react";
import { ThemeContext } from "./ThemeContext";


export function useTheme() {
    const context = React.useContext(ThemeContext);

    if (context === null) {
        throw new Error("useTheme must be used within a ThemeContextProvider");
    }

    return context;
}