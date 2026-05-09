1. In Next.js, middleware.ts is a single file placed at the root of your project.
2. It runs on the Edge runtime — meaning it executes before a request ever reaches your page or API route.
3. Yaani yeh agar hum koi route hit karte hai browser par like /profile toh pehle is middleware file ka code execute hota hai and then jaakar main code of /profile page executes.



The four things NextResponse can do

NextResponse.next() — let the request pass through unchanged
NextResponse.redirect(url) — send a 307/308, changing the URL in the browser
NextResponse.rewrite(url) — serve a different route internally (URL stays the same)
Return a raw NextResponse with custom headers/cookies attached
