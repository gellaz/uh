import { createBrowserClient } from "@supabase/ssr";
import { Database } from '@/types/supabase';

export const supabaseClient  = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);

export async function getProperties(){
  const { data, error } = await supabaseClient
    .from('properties')
    .select('*');

  if (error) throw error;

  return data;
};
  
export async function getProperty(id: string) {
  const { data, error } = await supabaseClient
    .from('properties')
    .select('*')
    .order('inserted_at', { ascending: true });

  if (error) throw error;

  return data;
};

