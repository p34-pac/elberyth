import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../ui/components/Navbar/Navbar";
import Footer from "../ui/components/Footer/Footer";
import { ModalProvider } from ">/ui/Modal/Modal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elberyth | Beauty and health",
  description: "Welcome to elberyth where your beauty is cared for.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-base-white`}
      >
        <ModalProvider>
          <Navbar />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
