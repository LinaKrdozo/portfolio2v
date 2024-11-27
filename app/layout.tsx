import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = localFont({
  src: [
    {
      path: './fonts/Urbanist-Regular.woff',
      weight: '100 900', 
      style: 'normal',
    },
    {
      path: './fonts/Urbanist-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-urbanist', 
});

export const metadata: Metadata = {
  title: "Portafolio LinaDev ",
  description: "Portafolio LinaDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
