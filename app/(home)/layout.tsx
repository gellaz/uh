import AppBar from "@/components/AppBar";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }
  /*   const pathname = usePathname();
  const hideAppBar = () => {
    const hasNew = pathname.includes("/new");
    const hasMesCenter = pathname.includes("/message_center");
    return hasNew === hasMesCenter;
  };
  const hideSideBar = () => {
    const hasDetail = pathname.includes("/detail");
    const hasNew = pathname.includes("/new");
    const hasMesCenter = pathname.includes("/message_center");
    const hasExplore = pathname.includes("/explore");
    return hasDetail || hasNew || hasMesCenter || hasExplore;
  }; */

  return (
    <main className="flex flex-row h-screen w-screen">
      <Sidebar />
      <div className={"flex flex-col w-full"}>
        <AppBar user={data.user} />
        {children}
      </div>
    </main>
  );
}
