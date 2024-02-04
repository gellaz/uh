import "./globals.css";

import { GeistSans } from "geist/font/sans";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

/* export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
}; */

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*   const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  } */
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="">
        <main className="">{children}</main>
      </body>
    </html>
  );
}
