import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import {Space_Grotesk} from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"]
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"]
});
export const metadata: Metadata = {
  title: "Jeremy's Portfolio",
  description: "Modern,  Responsive and Beautiful website portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={spaceGrotesk.className}
        
      >
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
       
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
