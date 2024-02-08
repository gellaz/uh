import { QueryData, QueryError, QueryResult } from "@supabase/supabase-js";

import AppBar from "@/src/components/AppBar";
import Sidebar from "@/src/components/Sidebar";
import { cookies } from "next/headers";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) redirect("/login");

  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileErr || !profile) redirect("/login");

  console.log(profile);

  return (
    <main className="flex flex-row h-screen w-screen">
      <Sidebar />
      <div className={"flex flex-col w-full"}>
        <AppBar profile={profile} />
        {children}
      </div>
    </main>
  );
}
