import React from "react";
import { BLOG_DESC, BLOG_TITLE } from "@/cosntants";
import "./globals.css";

import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import { cookies } from "next/headers";

import clsx from "clsx";
import { DARK_TOKENS, LIGHT_TOKENS, THEME_KEY } from "@/cosntants";

import { CSSVarStyle } from "@/types";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RespectMotionConfig from "@/components/RespectMotionConfig";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});

const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export async function generateMetadata() {
  return {
    title: BLOG_TITLE,
    description: BLOG_DESC,
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const persistedTheme = cookieStore.get(THEME_KEY)?.value || "light";
  const style: CSSVarStyle =
    persistedTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;
  return (
    <RespectMotionConfig>
      <html
        lang="en"
        className={clsx(mainFont.variable, monoFont.variable)}
        data-color-theme={persistedTheme}
        style={style}
      >
        <body>
          <Header initialTheme={persistedTheme} />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </RespectMotionConfig>
  );
}
