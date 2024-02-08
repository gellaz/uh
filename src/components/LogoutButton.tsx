"use client";

import { Button } from "@/src/components/ui/button";
import { createClient } from "@/src/utils/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      router.push("/error");
    }

    router.refresh();
  }

  return <Button onClick={handleSignOut}>Logout</Button>;
}
