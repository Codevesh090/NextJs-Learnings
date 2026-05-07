export default async function GET(){
  return new Response("Hello world")
}


// Toh NextJs me route handlers ka use hum ese karte hai ki .
// Inhe bhi hum ek folder me hi banate hai like /hello and uske andar hum ek api folder banate hai /api and 
// Uske andar hum ek route.ts(file convention hai and yahi follow karna hai strictly) file banate hai and usme hum hamesha apne Route handlers likhte hai .
// Jisse kya hoga ki agar hum browser par /hello likhte hai toh page.tsx chalega but if we want to hit backend then we just have to hit at /hello/api and that's it .
// Iske fayde yeh hai ki hume alag-alag backend and frontend ka folder nahi banana padta hai , balki ek hi folder me uske Frontend and Backend ka kaam ho jaata hai for any particular route .
// Jisse clean and scalable structure banta hai .

//and also one more convention is that function name in route.ts is always either be "GET" , "POST" ,"PATCH" , "DELETE" , "HEAD" , "PUT" , "OPTIONS" .