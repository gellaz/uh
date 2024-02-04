import LogoutButton from "@/components/LogoutButton";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function PrivatePage() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/");
  }

  return (
    <>
      <p className="text-center">Hello {data.user.email}</p>
      <LogoutButton />
    </>
  );
}
