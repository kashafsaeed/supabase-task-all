
import { createClient } from 'https://ygposisucuqlyfnnjppr.supabase.co'

const supabaseUrl = 'https://ygposisucuqlyfnnjppr.supabase.co'
const supabaseKey = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlncG9zaXN1Y3VxbHlmbm5qcHByIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwNDMwNTYsImV4cCI6MjA4MTYxOTA1Nn0._fojymL_zfnkh04n_Z0wRyh1YWtNXvieQQYMNwW4Gck
const supabase = createClient(supabaseUrl, supabaseKey)

export default { supabase }