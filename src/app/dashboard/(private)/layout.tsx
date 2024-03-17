import Sidebar from "@/app/dashboard/(private)/_components/Sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { sidebarItems } from "@/constants/sidebar-items";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();

  if (error || !data?.user) {
    redirect("/login");
  }

  const { data: profile, error: profileErr } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", data.user.id)
    .single();

  if (profileErr || !profile) redirect("/login");

  return (
    <div className="flex">
      <Sidebar items={sidebarItems} profile={profile} />
      <main className="ml-2 h-screen flex-grow overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
}
