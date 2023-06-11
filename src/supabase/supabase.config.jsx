import { createClient } from '@supabase/supabase-js'
let SUPABASE_KEY_URL='https://jakxjgqdqdbkdwgiprkr.supabase.co';
let SUPABASE_ANON_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impha3hqZ3FkcWRia2R3Z2lwcmtyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzNDE3MDMsImV4cCI6MTk5OTkxNzcwM30.VN0h1g7wrCSR1GXeTggck8W7GyG0Qx7L57VGRzJCtzI';

export const supabase = createClient(SUPABASE_KEY_URL, SUPABASE_ANON_KEY);