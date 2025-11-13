import type { Metadata } from "next";
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
  creator: "DeveloperTag",
  publisher: "DeveloperTag",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://developertag.com",
    title: "DeveloperTag - Design, Web & App Development",
    description: "We build modern websites, mobile apps, and scalable digital products that help brands launch faster and grow with confidence.",
    siteName: "DeveloperTag",
    images: [
      {
        url: "/assets/logo.png",
        width: 1200,
        height: 630,
        alt: "DeveloperTag - Design, Web & App Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DeveloperTag - Design, Web & App Development",
    description: "We build modern websites, mobile apps, and scalable digital products that help brands launch faster and grow with confidence.",
    images: ["/assets/logo.png"],
  },
  icons: {
    icon: [
      { url: "/assets/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/assets/logo.png",
  },
  manifest: "/manifest.json",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({

  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/assets/logo.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
        <link rel="shortcut icon" href="/assets/logo.png" />
      </head>
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
