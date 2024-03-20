import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "@/app/globals.scss";
import { Nav } from "@/app/ui/nav";
import { Footer } from "@/app/ui/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  SpeedInsights;
  return (
    <html lang="en" className="root">
      <body className={inter.className}>
        <Nav />
        {children}
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  );
}
