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
    '/forgot-password',
    '/reset-password',
    '/'
  ]

  // Fix the route checking logic
  const pathname = request.nextUrl.pathname
  const isPublicRoute = publicRoutes.some(route => {
    // Exact match for homepage and simple routes
    if (route === pathname) return true
    
    // Check if pathname starts with route AND the next character is a slash or nothing
    // This prevents '/manage' from matching '/man' in the publicRoutes
    if (pathname.startsWith(route) && route !== '/') {
      // Check if it's an exact match or if the next character is a slash
      const nextChar = pathname.charAt(route.length)
      return nextChar === '' || nextChar === '/'
    }
    
    return false
  })

  // Check if user exists but email is not verified
  if (
    user && 
    !user.email_confirmed_at && 
    !pathname.startsWith('/verification-required')
  ) {
    // Redirect to verification required page
    const url = request.nextUrl.clone()
    url.pathname = '/verification-required'
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from login/signup pages
  if (
    user && 
    user.email_confirmed_at && 
    (pathname === '/login' || pathname === '/signup')
  ) {
    // User is logged in and trying to access login or signup page
    const url = request.nextUrl.clone()
    url.pathname = '/manage'
    return NextResponse.redirect(url)
  }

  // Check if user is not logged in and trying to access protected route
  if (!user && !isPublicRoute) {
    console.log(`Redirecting unauthenticated user from ${pathname} to /login`)
    // No user, redirect to login page
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}