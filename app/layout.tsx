import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js OpenAI Test App",
  description: "A simple test application for trying OpenAI API with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
