"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/actions";

export async function getProperties(): Promise<Property[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .order("inserted_at", { ascending: false });

  if (error) {
    throw error;
  }

  console.log(data);
  return data;
}

export async function getPropertyWithId(id: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("properties")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return error;
  }

  console.log(data);
  return data;
}
