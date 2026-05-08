export const dynamic = "force-static";
export const revalidate = 10;

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}


/* 
Toh yaha hum padenge ki route Handlers me caching kaise kaam karti hai ?
Route Handler are not cached by default but you can opt into caching when using the GET Method .
Caching only works with the GET method and Other methods like "PUT" , "PATCH","DELETE","POST" are never get cahed .
If you are using dynamic functions like headers() and cookies() or working with the request object in your GET method caching won't be applied.

Yaani
Toh hota yeh hai ki by default Route Handlers caching nahi karte hai NextJs me but if we want hum unki caching karwa sakte hai.
But only in GET method not in any other method like "PUT" , "PATCH" etc...and also to use caching in GET method we cannot use 
dynamic functions like headers() or cookies() etc.


Toh ab samajhte hai ki GET method me caching karwate kaise hai.
Toh caching ka GET method me purpose yeh hai ki , like GET method me hota yeh hai ki hum ek request marte
hai server ko and it responses back .So let say humne abhi application kholi and data aaya and we are seeing
the application working but I again made a reload instantly , Toh yeh toh ab bina matlab ke call ho gayi server
par kyuki data abhi toh aaya tha , toh ek aur request maarne ka fayda kya hua , data toh dusari request me bhi same hi 
aaya, user ne bina matlab ke hamara server compute waste kiya , server ko bina matlab ke cheeze wapas process karke
bhejni padi ,Hence to prevent this wastage of server calls , yaani GET method calls .We use caching on GET method
as it is most important on GET more than any other type of request like POST , PATCH etc...


To achieve caching on any GET request :
We need to add this line "export const dynamic = "force-static";" of code .
Yeh line kya karti hai ki "Forces this route to behave like static generation (SSG).That means the response is cached instead of being generated on every request."

and this line of code "export const revalidate = 10;"
Yeh line kya karti hai . Enables ISR (Incremental Static Regeneration).
The cached response will be re-generated every 10 seconds.
Yaani har 10 sec ke baad jo cached data hai use "stale" kar diya jaayega background me ,
such that on next request system hume cached data naa de .Instead, jab wo cached data ke paas data mangne 
jaaye toh cahed system bol de ki jo data mere paas hai wo "staled" hai . So, jaao and jaakar server par 
request maarkar new data lekar aao and when new data comes up then again that new data gets in the cache 
for the next 10s and again same after 10s.

That's it.

In total hota yeh hai ki ,jab hum kisi code me Yeh line lagate hai toh hum kehte hai ki "export const dynamic = "force-static";" which means hum bol rahe hai ki Browser ko ki tumhe server ka Response cache karke rakhna hai .
and is line "export const revalidate = 10;" se hum bata rahe hai ki is data ko kab tak cache karke rakhna hai , Iska matlab yeh nahi ki 10 sec me cached data delete ho jaayega .Instead, this means that 10 sec ke baad cached data ko stale kar diya jaayega 
Kyuki agar hum stale nahi karte hai,taaki next request after 10s me data cache se nahi server se aaye , Agar hum yeh nahi karte hai toh system ko lagte rahega ki yahi cache wala hi latest data hai , chahe server yaa db me actual data change hi kyu na ho gaya ho
Isilye we set here a 10s stale data timer ki 10sec tak fresh rakho then stale mark kar do .This is how we add caching for GET request .

IMPORTANT POINTS TO NOTE
1.In NextJs Caching only works in production.

//To Test
cd caching-in-route-handlers
bun run build
bun start

Now hit http://localhost:3000/time
You will see time like this {"time":"11:36:32 am"}
But when you refresh then it will not change till 10s because 10s tak toh data fresh hai toh wahi data jab bhi hum refresh kar rahe hai , yaani server par request maar rahe hai , toh wahi data baar-baar aa raha hai.
But after 10s if we hit then kya hoga ki ab cahe data stale ho chuka hai mark toh ab server par request jaayegi and server hume ab new data dega and now ab wo data pehle cache me jaayega as a fresh data and then cache se hamare paas aayega .
And we will see the new data.


*/