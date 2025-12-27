import type { Metadata } from "next";
import "./globals.css";
import ResponsiveNavbar from "@/components/Home/Navbar/ResponsiveNavbar";

export const metadata: Metadata = {
  title: "RAVELONARIVO Tafitasoa - Portfolio",
  description: "Portfolio de RAVELONARIVO Tafitasoa, Développeur Full Stack & UX/UI Designer",
  icons: "/logo.ico", // Un simple fichier favicon.ico
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[#0F172A]">
        <ResponsiveNavbar />
        {children}
      </body>
    </html>
  );
}