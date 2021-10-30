// utils/supabaseClient.js 
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://xfytibyzxhlovtlfbcfz.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNDY5MjI2OSwiZXhwIjoxOTUwMjY4MjY5fQ.A1HBfrYjjQVCznt3VezWNtisB80vI4UqrIhJsvWouKo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)