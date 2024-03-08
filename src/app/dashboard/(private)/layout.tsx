import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { sidebarItems } from "@/constants/sidebar-items";

export default async function DashboardLayout({
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

  return (
    <main className="flex">
      <Sidebar items={sidebarItems} profile={profile} />
      <div className="h-screen flex-grow p-4">{children}</div>
    </main>
  );
}
