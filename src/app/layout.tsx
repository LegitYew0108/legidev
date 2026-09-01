import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.legilegi.dev"),

  title: "れぎっと(Legit)のホームページ",
  description:
    "れぎっとのホームページです。自己紹介やポートフォリオの他、自身の技術ブログも書いています！",
  openGraph: {
    title: "れぎっと(Legit)のホームページ",
    description:
      "れぎっとのホームページです。自己紹介やポートフォリオの他、自身の技術ブログも書いています！",
    url: "https://www.legilegi.dev",
    siteName: "れぎっと(Legit)のホームページ",
    locale: "ja_JP",
    type: "website",

    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "れぎっと(Legit)のホームページ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "れぎっと(Legit)のホームページ",
    description:
      "れぎっとのホームページです。自己紹介やポートフォリオの他、自身の技術ブログも書いています！",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#E5E5E5]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
