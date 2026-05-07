import {type NextRequest} from 'next/server'
import {headers} from 'next/headers'

//🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡🟡
//Just uncomment this below code and comment the below to below code to see how it works with NextRequest headers feature that is given to us through Web API.
// export async function GET(request:NextRequest){
//   const requestHeaders = new Headers(request.headers);
//   console.log(requestHeaders.get("Authorization"));
//   return new Response("<h1>Profile API data</h1>",{
//    headers:{
//      "Content-Type":"text/html",
//    },
//  })
// }


//This below one is also 100% same like the upper one but this "headers" is given by NextJs itself not by Web API.
export async function GET(request:NextRequest){
  const headersList = await headers();
  console.log(headersList.get("Authorization"));
  return new Response("<h1>Profile API data</h1>",{
    headers:{
      "Content-Type":"text/html",
    },
  })
}




/* 
Toh Hum yaha padh rahe hai headers ke baare me ?

What are headers ?
Metadata associated with an API request and response called as HTTP headers.
Yaani ek HTTP api request and response ke saath associated metadata hi HTTP headers hota hai .
In headers, ka kaam yeh hota hai ki request(Client) ke baare me Server ko batana ki request kis type ki hai , kya hai etc.. and also response(Server) ke baare me Client(browser) ko batana ki Response ka format kya hai , type kya hai etc...
This is the main work of Headers.

There are two types of headers :
1. Request Headers
They are sent by the Client such as web browser to the server .They contain essential info about the request which helps the server to understand and process that request correctly.
Like User Agent header , Authorization header , Accept header comes under Request header.
Jaise ,

"User-Agent" Header ka kaam hota hai batana ki client kon hai yaani it identitfies the browser and the operating system to the server.
"Accept" Header which indicates the content types like text , video or image formats etc.. Yaani client kis type ka response chahta hai .
"Authorization" Header which used by client to authenticate itself to server .Like how we are using in login/auth ke token bhejne me previously.


2. Response Headers
They are sent back from the server to the client .They provide info about the Server and the data being sent in the response .
Like Content-Type header comes under Response header.

"Content-Type" header indicates the media type of the response .
It tells the client what the data type of the returned content is such as text/html for HTML documents and like application/json for JSON data etc..


How to "read" the Headers sended by the client ?----------------------------------------------
Toh header read karne ke apne paas do ways hai , 1.Given by WebAPI  2.Given by NextJs itself
Toh hum NextJs wala discuss karte hai , ese dono toh same hi hai .

Toh sabse pehle maine { import {headers} from 'next/headers' } import kiya headers karke hai , NextJs provide karta hai.
Toh yeh headers jo hume NextJs de raha hai yeh ek function hai jise call karne par humne wo object milta hai in response and then hum use ek variable like "headersList" here usme store kar lete hai.
Ab isi headerslist me sab headers stored hote hain as a key value in a object .For example 
                                          It looks like this : Just a visual example
                                              Headers {
                                               "host" => "localhost:3000",
                                               "connection" => "keep-alive",
                                               "user-agent" => "Mozilla/5.0 (Macintosh; Intel Mac OS X)",
                                               "accept" => "text/html,application/json",
                                               "authorization" => "Bearer abc123",
                                               "content-type" => "application/json",
                                               "accept-language" => "en-US,en;q=0.9"
                                             }
Uske baad ab hamare paas har ek header hai in a object, now we can read or access any like this  { headersList.get("Authorization") }
Like we console it , just to show how we read the header sended by CLIENT TO SERVER.

//To test out------------------------------------------------------
Put header like Authorization=Bearer12345 in headers section as a user and hit Hit http://localhost:3000/profile/api
Now, check the console you will see server read it and printed in console .


How to "send" the Headers from by the server to the Client(browser) ?-------------------------------
TOH ISKE LIYE , JUST PUT THE RESPONSE HEADER IN THE RESPONSE .
Such that jab server response kare toh Header bhi chale jaaye like right now we are sending "Content-Type"

One Important thing :-----------------------------------------------
To see headers of any request or response, Check out in The "NETWORK TAB" of any request or response in Inspect on Browser.


Experiment----------------------------------------------
Lets, do a example to see how headers affect the response.
Just remove thi part 
                          {
                            headers:{
                              "Content-Type":"text/html",
                            },
                          }

and you will see in network tab that Content-Type sets itself at by default at "plain-text" mode and on the browser you will see <h1>Profile API data</h1> this whole as a text .
Kyuki browser yaani client ko lag raha hai ki response ka type plain text hai .
Now again add this part and see on the Network tab it will show content-Type as text/html and also on the browser you will see a html <h1> tag rendered means big text "Profile API data" as under h1 tag.
Kyuki broswer ko ab lag raha hai ki response me server ne ek HTML component bheja hai , toh browser use as a HTML behaviour follow karte hue represent karna hai.
*/