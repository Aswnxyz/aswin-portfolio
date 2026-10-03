import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ASWIN A. — Full-Stack Developer | Build Sheet",
  description: "Minimal technical build sheet and portfolio of Aswin A., Full-Stack Developer. Turning ideas into working digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-[#EBE8DF] text-[#111110] font-mono selection:bg-[#B85D2A] selection:text-[#EBE8DF] antialiased">
        {children}
      </body>
    </html>
  );
}
