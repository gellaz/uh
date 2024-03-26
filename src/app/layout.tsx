import "@/styles/globals.css";

import { Radio_Canada } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

// If loading a variable font, you don't need to specify the font weight
const canada = Radio_Canada({ subsets: ["latin"] });
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={canada.className}>
      <body className="">
        <main className="">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
