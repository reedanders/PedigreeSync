import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANT: DO NOT REMOVE auth.getUser()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // List of public routes that don't require authentication
  const publicRoutes = [
    '/login',
    '/signup',
    '/about-ebvs',
    '/roadmap',
    '/import',
    '/verification-required',
    '/'
  ]

  const isPublicRoute = publicRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route) || request.nextUrl.pathname === route
  )

  // Check if user exists but email is not verified
  if (
    user && 
    !user.email_confirmed_at && 
    !request.nextUrl.pathname.startsWith('/verification-required')
  ) {
    // Redirect to verification required page
    const url = request.nextUrl.clone()
    url.pathname = '/verification-required'
    return NextResponse.redirect(url)
  }

  // Check if user is not logged in and trying to access protected route
  if (
    !user &&
    !isPublicRoute
  ) {
    // No user, redirect to login page
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}