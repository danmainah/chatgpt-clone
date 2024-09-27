import { createServerClient } from "@supabase/ssr";


export const createClient = () => {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase URL and key are not defined');
    }

    return createServerClient(supabaseUrl, supabaseKey, {
        cookieOptions: {
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 30, // 30 days
            domain: 'example.com'
          },
          cookies: {
            options: {
              secure: process.env.NODE_ENV === 'production',
              maxAge: 60 * 60 * 24 * 30, // 30 days
              domain: 'example.com'
            }
          },
          headers: {
            'x-ssr': '1'
          },
    });
}