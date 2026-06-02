import { createClient } from '@supabase/supabase-js';

// Aquí leemos las llaves seguras que guardamos en el archivo .env
const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

// Creamos y exportamos el cliente oficial conectado a tu base de datos
export const supabase = createClient(supabaseUrl, supabaseAnonKey);