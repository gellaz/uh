'use server'

import { createClient } from "@/utils/supabase/actions"
import { cookies } from "next/headers"

export async function getProperties(){
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from('properties')
        .select()
        .order('created_at', {ascending: false})

        if (error) {
            console.error(error)
            return error
        }


        console.log(data)
        return data 
}

export async function getPropertyWithId(id: string) {
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
        .from('properties')
        .select()
        .eq('id', id)
        .single()

        if (error) {
            console.error(error)
            return error
        }

        console.log(data)
        return data
}

// export async function getProperties(){
//     const { data, error } = await supabaseClient
//       .from('properties')
//       .select('*');
//     if (error) throw error;
//     return data;
//   };

//   export async function getProperty(id: string) {
//     const { data, error } = await supabaseClient
//       .from('properties')
//       .select('*')
//       .order('inserted_at', { ascending: true });
//     if (error) throw error;
//     return data;
//   };
  
  