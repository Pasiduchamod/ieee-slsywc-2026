import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Preloader from "./components/Preloader/Preloader";
import { Analytics } from "@vercel/analytics/next";
import SmoothScroll from "./components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SLSYWC '26",
  description: `IEEE Sri Lanka Section Students | Young Professionals | Women in
            Engineering Congress 2026`,
  icons: {
    icon: ["/logo-ico.png"],
  },
  verification: {
    google: "toEHC476BQ-IJWnQwbow1nawNQwDWTZD-b5M-oduPmc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll>
          <Preloader />
          <div className="main-bg">
            <Navbar />
            {children}
            <Analytics />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
