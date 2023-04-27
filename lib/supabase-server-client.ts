import { Database } from "@/types/supabase";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export const supabaseServerClient = () =>
  createServerComponentSupabaseClient<Database>({
    headers,
    cookies,
  });
