"use server";

import { createClient } from "@/utils/supabase/server";
import { registerFormSchema } from "@/lib/validation";
import { z } from "zod";

export async function signUp(
  registerSchema: z.infer<typeof registerFormSchema>
) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signUp({
    email: registerSchema.email,
    password: registerSchema.password,
    phone: registerSchema.phoneNumber,
    options: {
      data: {
        email: registerSchema.email,
        first_name: registerSchema.firstName,
        last_name: registerSchema.lastName,
        birth_date: registerSchema.birthDate.toISOString().split("T")[0],
        tax_id: registerSchema.taxId,
        phone: registerSchema.phoneNumber,
        email_secondary: registerSchema.secondaryEmail,
      },
    },
  });

  if (error) {
    console.error("Error signing up:", error);
    throw error;
  }

  return data;
}

/**
 * Returns the profile of the currently logged in user
 * @returns {Promise<Profile>}
 */
export async function getProfile(): Promise<Profile> {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError) {
    throw userError;
  }

  const { data: profileData, error: profileError } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", userData.user.id)
    .single();

  if (profileError) {
    throw profileError;
  }

  return profileData;
}
