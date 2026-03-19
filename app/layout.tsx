import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";


const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shay Jeremy",
  description: "Software Engineer focused on crafting interfaces and building polished software experiences",
  icons: {
    icon: [
      { url: '/shayjeremy.png' },
      { url: '/shayjeremy.png', sizes: '32x32', type: 'image/png' },
      { url: '/shayjeremy.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/shayjeremy.png',
  },
};

import { PremiumBackground } from "./components/PremiumBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${dmSans.className} antialiased bg-[#0a0a0a] text-[#ededed] relative min-h-screen`}>
        <PremiumBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}