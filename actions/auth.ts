"use server";

import { IRegister } from "@/validation/auth";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/actions";

export async function signUp(registerSchema: IRegister) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase.auth.signUp({
    email: registerSchema.email,
    password: registerSchema.password,
    phone: registerSchema.phoneNumber,
    options: {
      data: {
        first_name: registerSchema.firstName,
        last_name: registerSchema.lastName,
      },
    },
  });

  if (error) {
    console.error("Error signing up:", error);
    throw error;
  }

  return data;
}
