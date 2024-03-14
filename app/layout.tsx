import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "@/app/globals.scss";
import { Nav } from "@/app/ui/nav";

const inter = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Alexey Rybkin",
  description: "Hello i'm frontend developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="root">
      <body className={inter.className}>
        <Nav />
          {children}
      </body>
    </html>
  );
}
