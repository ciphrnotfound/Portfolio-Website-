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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${dmSans.className} antialiased bg-[#111111] text-[#ededed]`}>
        {children}
      </body>
    </html>
  );
}