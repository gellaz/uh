import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

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
    <main className="flex flex-row h-screen w-screen">
      <Sidebar
        items={[
          {
            href: "/dashboard",
            text: "Dashboard",
            icon: "teenyicons:pie-chart-solid",
          },
          {
            href: "/dashboard/properties",
            text: "Profile",
            icon: "ci:building-01",
          },
        ]}
        profile={profile}
      />
      {children}
    </main>
  );
}
