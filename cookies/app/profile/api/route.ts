import {type NextRequest} from 'next/server'
import {headers,cookies} from 'next/headers'


export async function GET(request:NextRequest){
  const headersList = await headers();
  console.log(headersList.get("Authorization"));

  //Way 1
  // const theme = request.cookies.get("Theme")🟡
  // console.log(theme)🟡

  //Way 2 given by NextJs itself------------------
  const cookieStore = await cookies();
  cookieStore.set("results per page","20");
  console.log(cookieStore.get("results per page"))


  return new Response("<h1>Profile API data</h1>",{
    headers:{
      "Content-Type":"text/html",
      // "Set-Cookie":"Theme = dark"🟡
    },
  })
}



/* 
Now,we will understand about Cookies and How to use it in NextJs

What are cookies ?
Cookies are the small piece of data that server send to user's web browser.
The browser can store the cookies and send them back to the same server ith future requests.

Cookies servers three main purposes:
Managing sessions (Like user login and shopping carts)
Handling Personalization (such as user refrences and themes )
Tracking (like recording and analyzing user behaviour)


Matlab cookie small piece of data hota hai , jo server bhejta hai to client's browser storage .Like when we login
then we send JWT key to the cookie . Browser inhi cookies ko store karke rakhta hai and waqt aane par usi same server
ko wapas bhejta hai same like how when we hit any endpoint server takes the jwt key back from the browser cookie to authenticate the user for the next page . 




Now ,In next Js How we set it and get it ?
So, we two approaches to do this :

Approach 1:Hum ese bhi kar sakte hai
          Jo-Jo In yellow doto me hai agar hum unhe uncomment kar de and 
          Way 2 ki 3 lines ko comment kar de , Toh that is the way-1
          
          Is approach me hume agar cookie ko "set" karna ho toh use hume hamesha 
          Response Headers me dena padta hai like we did

          and read yaani get toh kahi se bhi kar sakte hai.



Approach 2:Yaa hum jo NextJs ne method diya hai uska bhi use kar sakte hai to get and set.
           const cookieStore = await cookies();
           cookieStore.set("results per page","20");
           console.log(cookieStore.get("results per page"))
          
Is approach me hum cookeis ka saara access KISI ek variable like cookieStore me lenge and then usi ki
help se we do .set and .get

*/
