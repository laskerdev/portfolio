import type { Metadata } from "next";
import { JetBrains_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import PageTransition from "@/components/transitions/PageTransition";
import StairTransition from "@/components/transitions/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat"
});

export const metadata: Metadata = {
  title: "Ejin N. | 11Pm Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable} ${montserrat.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>
          <main className="h-full container mx-auto">
            {children}
          </main>
        </PageTransition>
      </body>
    </html>
  );
}
