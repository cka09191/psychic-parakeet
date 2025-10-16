import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js OpenAPI Test App",
  description: "A simple test application demonstrating OpenAPI integration with Next.js",
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
