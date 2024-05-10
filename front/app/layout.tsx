import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { AuthProvider } from "@/providers/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MaxSane ERP | UniSatc ",
  description: "ERP | UniSatc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang="pt-Br">
      
      <body className={inter.className}>
      <Header/>
      {children}
      </body>
    </html>
    </AuthProvider>
  );
}
