import { auth } from "@/auth"

export default auth((req) => {
  const {pathname} = req.nextUrl;
  if (!req.auth && pathname !== "/login" && pathname !== "/signup") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})
 
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*','/','/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
// export {auth as middleware} from "@/auth"