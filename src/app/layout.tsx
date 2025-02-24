import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { AuthProvider } from '@/context/AuthContext';
import ClientLayoutWrapper from "./ClientLayoutWrapper";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IDT Dedupe",
  description: "De-duplicate and find matches in your Excel spreadsheet or database",
  icons: {
    icon: "/images/idtlogo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <AuthProvider>
          <ClientLayoutWrapper>
            {children}
          </ClientLayoutWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
