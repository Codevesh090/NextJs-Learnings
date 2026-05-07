import { NextRequest } from 'next/server'
import {comments} from './data'

export async function GET(request:NextRequest){
   const searchParams = request.nextUrl.searchParams;
   const query = searchParams.get("query");
   const filteredComments = query ? comments.filter((comments) => comments.text.includes(query)):comments;
   return Response.json(filteredComments);
}

//-------------------------------------------------------------------------------------------------------
//Ab Hum yaha par samjhenge ki ,ki agar URL me query parameters diya jaaye toh use kaise use karte hai kyuki abhi tak toh humne yeh dekh liya hai ki params ko kaise use karte hai , now will see How to use query parameters ?
//Toh kya kiya humne yaha ki sabse phele "Hamare jitne bhi key-value pairs hote hai" yaa jitni bhi "queries" hoti hai Url me wo sab ek hi object me store hoti hai which is request.nextUrl.searchParams .Isi me sab query params key-value pair me hote hain.
//Like this : If url is  /comments?query=first&limit=2 
/*  then             
         request.nextUrl.searchParams = {
                           query: "first",
                           limit: "2"
                        }
*/ 
//Uske baad hum const query = searchParams.get("query"); kya karte hai ki hum us object me se us key ki value ko nikaal kar ek varibale like here "query" me rakh dete hai.
//Uske baad ab hamare paas query hai in a varibale named as "query"
//Now ab toh bus filtering algo lagate hai and Response user ko dikha dete hai .

//IMPORTANT POINTS
//Yaha hume koi alag se folder banane ki need nahi hoti hai for query parameters like we are doing in params.
//Also is baar humne request ki type ko "NextRequest" define ki thi . But what is this type ?
/* 
      NextRequest ek special request object hai jo Next.js￼ provide karta hai with more functionalities.
      Yaani dekho normally request object(Web API ka built-in object) looks like :
                                                      Request {
                                                       method: "GET",
                                                       url: "http://localhost:3000/comments?query=first",
                                                       headers: Headers {},
                                                       body: ReadableStream
                                                      }
       
      But what yeh Nextrequest looks like this:
                                               NextRequest {
                                                 method: "GET",
                                                 url: "http://localhost:3000/comments?query=first",
                                                 
                                                 nextUrl: {
                                                   pathname: "/comments",
                                                   searchParams: {
                                                     query: "first"
                                                   }
                                                 },
                                               
                                                 headers: { ... },
                                                 cookies: { ... }
                                               }
     

      With more functionalities.........................                                     
*/


//This is how we take query from the url and use it .

//-------------------------------------------------------------------------------------------------------

//To test out
//Go to ThunderClient
//Hit http://localhost:3000/comments/api?query=ir and in response , you will see comments conatining this word "ir".

//-------------------------------------------------------------------------------------------------------