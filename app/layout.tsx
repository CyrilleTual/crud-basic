import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import  QueryClientProvider   from "@/providers/react-query-provider"
import Header from "@/components/header";
import Footer from "@/components/footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crud de base NextJs",
  description: "basic crud skeleton ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider>
        <body className={inter.className}>
          <Header />
          <div>{children}</div>
          <Footer/>
        </body>
      </QueryClientProvider>
    </html>
  );
}
