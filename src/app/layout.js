import "./globals.css";
import { Kode_Mono } from "next/font/google";
import Header from "./_components/Header.js";

export const kodeMono = Kode_Mono({
  weight: "500",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}