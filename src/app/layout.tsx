import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pineapple Soccer 3.0",
  description: "App Pineapple Soccer 3.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
