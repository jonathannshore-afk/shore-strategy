import { createClient } from "@supabase/supabase-js";

const BD_SUPABASE_URL = "https://nlfkkdgwlgcgomcnkjua.supabase.co";
const BD_SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5sZmtrZGd3bGdjZ29tY25ranVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxMTQ5OTMsImV4cCI6MjA5MTY5MDk5M30.tD2ikxZuz2Zv4IejyfNoA3-9B9zNSxEtOwOrwX0kh6Q";

export const bdSupabase = createClient(BD_SUPABASE_URL, BD_SUPABASE_ANON_KEY);
