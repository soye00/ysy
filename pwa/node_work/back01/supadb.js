const supabase = require('@supabase/supabase-js');

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;


exports.supabase = supabase.createClient(supabaseUrl,supabaseKey);