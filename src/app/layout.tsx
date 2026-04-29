import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar"
import Footer from "@/components/Footer/Footer";
import AOSInitializer from "@/common/AOSInitializer";
// import CanvasCursor from "@/common/Cursor";
import { DataProvider } from "@/context/contextStore"
import BottomBanner from "@/common/BottomBanner"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DeveloperTag - Design, Web & App Development",
  description: "We build modern websites, mobile apps, and scalable digital products that help brands launch faster and grow with confidence. Transform your ideas into cutting-edge digital solutions.",
  keywords: "web development, app development, mobile apps, website design, digital solutions, software development, UI/UX design, custom software, DeveloperTag",
  authors: [{ name: "DeveloperTag" }],
  manifest: "/manifest.json",
  icons: {
    icon: '/icon.png',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DataProvider>
          <AOSInitializer />
          {/* <CanvasCursor /> */}
          <div className="relative w-full">
            <Navbar />
          </div>
          {children}

          {/* <NewsLetter /> */}
          <BottomBanner />
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
