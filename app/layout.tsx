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
  title: "11PM.dev Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          <section className="h-full">
            <div className="h-full container mx-auto">
              {children}
            </div>
          </section>
        </PageTransition>
      </body>
    </html>
  );
}
