import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

//implement dark and light theme
//!npm i next-themes
export default function Provider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
