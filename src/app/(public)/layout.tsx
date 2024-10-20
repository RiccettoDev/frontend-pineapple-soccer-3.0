import type { Metadata } from "next";
import "../globals.css";
import { Luckiest_Guy } from 'next/font/google';
import { ChakraProvider } from "@chakra-ui/react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
});

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
      <body className={luckiestGuy.className}>
        <header>
        </header>
        <main>
          <ChakraProvider>{children}</ChakraProvider>
        </main>
        <footer>
        </footer>
      </body>
    </html>
  );
}
