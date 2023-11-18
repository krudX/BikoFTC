import { Inter } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biko Landing Page",
  description: "FigmaToCode - Biko Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"md:text-lg"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
