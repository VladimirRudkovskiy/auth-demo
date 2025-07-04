import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isProtectedRoute = createRouteMatcher(['/user-profile']);
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

// export default clerkMiddleware(async (auth, req) => {
// 	if (!isPublicRoute(req)) await auth.protect();
// })

export default clerkMiddleware(async (auth, req) => {
	const { userId, redirectToSignIn } = await auth()
	if(!userId && !isPublicRoute(req)) {
		//add custom logic to run before redirecting
		
		return redirectToSignIn()
	}
})

// export default clerkMiddleware(async (auth, req) => {
// 	if (isProtectedRoute(req)) await auth.protect();
// })


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

