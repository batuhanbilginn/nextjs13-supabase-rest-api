import { Database } from "@/types/supabase";
import { createRouteHandlerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";

export const supabaseRouteClient = () =>
  createRouteHandlerSupabaseClient<Database>({
    headers,
    cookies,
  });
