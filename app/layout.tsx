// app/layout.tsx
import "./globals.css";
import { Inter, EB_Garamond } from "next/font/google";
// 若想用 Geist：
/*
import { Geist, Geist_Mono } from "next/font/google"; // 或 vercel/fonts 包的 Geist
*/

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
export const garamond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${garamond.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
