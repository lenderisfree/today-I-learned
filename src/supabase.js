//code from supabase page

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tbcjymgqgaupyrfcdsqg.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRiY2p5bWdxZ2F1cHlyZmNkc3FnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU3MTI1ODMsImV4cCI6MTk5MTI4ODU4M30.qPJh7-AQxU3EG-s8DUb6S1o6MaDMgmuHtXJat39HD_U";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;