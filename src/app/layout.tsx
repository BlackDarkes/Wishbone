import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wishbone",
  description:
    "Landscape architecture that harmonizes nature and urban life. We design parks, private gardens, and public realms with a focus on sustainability and aesthetic excellence.",
  authors: { name: "DaniilGordeev(BlackDarkes)" },
  keywords: ["Architecture", "Design", "Purchase of design"],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
