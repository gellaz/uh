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
