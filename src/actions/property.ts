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

/**
 * Fetches all the property categories from the database
 * @returns The property categories
 */
export async function fetchPropertyCategories(): Promise<PropertyCategory[]> {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { data, error } = await supabase
    .from("property_categories")
    .select("*");

  if (error) {
    throw error;
  }

  return data;
}
