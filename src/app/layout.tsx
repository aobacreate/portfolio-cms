import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap"
});

const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-jp",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emi-dev.com"),

  title: {
    default: "えみ | プログラマー",
    template: "%s | えみ",
  },

  description: "プログラマーえみのポートフォリオサイトです。",

  openGraph: {
    title: "えみ | プログラマー",
    description: "プログラマーえみのポートフォリオサイトです。",
    url: "https://emi-dev.com",
    siteName: "えみ | プログラマー",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "ja_JP",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${noto.variable}`}>
        {children}
      </body>
    </html>
  );
}