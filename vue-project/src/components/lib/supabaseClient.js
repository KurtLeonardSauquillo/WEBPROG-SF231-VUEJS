import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://brwisrfjfxzkdijphglz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyd2lzcmZqZnh6a2RpanBoZ2x6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE1OTM0MzksImV4cCI6MjA1NzE2OTQzOX0.OK8j3NDbS3E4VcRMZOdkbsOQV8diwR7E99bQUOVRxE0')