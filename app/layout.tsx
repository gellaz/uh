import "./globals.css";
import { GeistSans } from "geist/font/sans";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export default async function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
