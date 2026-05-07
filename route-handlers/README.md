Now, we will understand about Route Handlers

The app router lets us create custom request handlers for your routes using a feature called Route Handlers(In simple words,Route Handlers hote hai like we have in express GET,POST,PATCH etc..).Unlike page routes(page.tsx which gives UI means used for mostly frontend tasks ) which gives us HTML content, Route Handlers let us build restful endpoints(route.ts mainly for backend tasks ) with complete control over the response.It is same like Node + Express application.But for this There is no need to set up and configure a separate server.

Route handlers are great when making external api request as well
For example :if you are building an app that needs to talk to any third party services

RouteHandlers run serverside . So, our sensitive info like private keys  stays secure and never reaches the browser ever.

NextJs supports GET, POST ,PUT,PATCH,DELETE,HEAD AND OPTIONS.
If any Unsupported method is called  ,NextJs will return a 405 Method Not Allowed .

This is what we call as route Handlers .

--------------------------------------------------------------------------------------------------------
<See in route.ts of hello folder for more>