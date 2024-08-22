import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

//components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-robotoCondensed",
});

export const metadata = {
  title: "August Helle Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoCondensed.variable}>
        <Header />
        <PageTransition>
          {children} <Analytics />
        </PageTransition>
      </body>
    </html>
  );
}
