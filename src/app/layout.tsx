import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { NavBar, Footer } from "@/components";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RAISA Blog",
  description: "Últimas noticias en el mundo de la radiación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>

          <div className="container">
            <div className="wrapper">
              <NavBar />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>

      </body>
    </html>
  );
}
