import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onix Aviation - Premium Aviation Marketing Agency",
  description: "Elevate your aviation brand with strategic marketing, creative excellence, and industry expertise. Trusted by aviation leaders worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
