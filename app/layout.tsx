import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

export const metadata: Metadata = {
  title: "RAVELONARIVO Tafitasoa Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon SVG */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <title>Ravelonarivo Tafitasoa Portfolio</title>
      </head>
      <body className="antialiased bg-[#0F172A]">
        <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}
