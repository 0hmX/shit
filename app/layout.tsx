import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "backend @your-mom",
  description: "made with love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
      {children}
      </body>
    </html>
  );
}
