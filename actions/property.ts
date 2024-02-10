"use server";

import { Database } from "@/types/supabase";
import { supabase } from "@/utils/supabase/client";

export async function getProperties() {
  const { data, error } = await supabase
    .from("properties")
    .select()
    .order("inserted_at", { ascending: false });

  if (error) {
    console.error(error);
    return error;
  }

  console.log(data);
  return data;
}

export async function getPropertyWithId(id: string) {
  const { data, error } = await supabase
    .from("properties")
    .select()
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    return error;
  }

  console.log(data);
  return data;
}

export async function getPropertyImage(id: string) {
  const {data, error } = await supabase.storage.getBucket('propertyImages')

  if (error != null) throw new Error(error.message); 

  return data
}
