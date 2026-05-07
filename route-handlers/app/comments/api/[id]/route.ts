import {comments} from '../data';

export async function GET(_request:Request,{params}:{params:Promise<{id:string}>}){
  const {id} = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment)
}

export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}){
   const {id} = await params;
   const body = await request.json();
   const {text} = body;

   const index = comments.findIndex((comment)=> comment.id===parseInt(id));
   comments[index].text = text;
   return Response.json(comments[index])
}


export async function DELETE(_request:Request,{params}:{params:Promise<{id:string}>}){
   const {id} = await params;
   const index = comments.findIndex((comment)=> comment.id===parseInt(id));
   const deletedComment = comments[index];
   comments.splice(index,1);
   return Response.json(deletedComment)
}


//------------------------------------------------------------------------------------------------------
//Dynamic Route Handler

//Ab hum padh rahe hai yaha dynamic route handlers ke baar me .
//Yaani let say hume apne db me se comment number 3 chahiye ,Toh hum ab yeh kaise nikalenge.
//Toh usko nikalane ke liye hume route me ek id deni padegi ki mujhe 3 waala chahiye.
//Toh yahi kaam ko kaise handle karte hai we learn here .
//Toh hum kya karte hai ki gar hume koi id catch karni hai route me se toh hum jaise UI ke liye .
//[block] folder banate hai . Similiarly,hum yaha bhi ek [id] folder banate hai and usme hum usko handle karne ka logic likhte hai.
//Like jaise humne yaha [id] banaya and usme phir ek route.ts banaya and then in that route.ts we handled that dynamic segment gracefully
//Hamare code me phele humne params ko pakda which is "id" and then humne usi id ki help se comments array me wo comment find kiya and then returned it.
//As what the user asked for .

//Remember normal routes ko handle karne ke liye ek alag route.ts banate hai and dynamic ke liye alag specific to that segment .
//We used underscore before "request" to show that we are not intentionally not using it.

//To test
//Go to ThunderClient
//Hit http://localhost:3000/comments/api/3 at method "GET"
//And in response you will see the response .

//------------------------------------------------------------------------------------------------------
//PATCH Route Handler
//Toh ab hum padenge ki NextJs me hum Update kaise karte hai.
//Toh update karne ke liye we use Route Handler with method "PATCH"
//Now, let say hum chahte hai ki hum kisi particular comment ko hum update kar sake db me se .
//Toh usko karne ke liye humne yaha kya kiya ki pehle , request and params ko pakda .
//Jisse pata chal gaya ki kis comment ko and kaise update karne hai.
//Uske baad humne us route me given Id se us comment ka INDEX find kiya and use ek variable "index" me rakh diya .
//And then we updated that particular array element through comments[index].text = text;
//And response backed that updated comment of that specific id .

//To test 
//Go to ThunderClient
//Hit http://localhost:3000/comments/api/3 at method "PATCH" and in body the updated comment like {"text":"This is good"}
//You will see in response the updated comment .That's it.


//------------------------------------------------------------------------------------------------------
//DELETE Route Handler
//Isme bhi humne same hi kiya , phele kisko delete karna hai uski id li params se and then use delete karke , kya delete hua use response kar diya .
//That's it done .

//To test 
//Go to ThunderClient
//Hit http://localhost:3000/comments/api/3 at method "DELETE"
//You will see in response the deleted comment .That's it.

//------------------------------------------------------------------------------------------------------
//This is how we use Route Handlers in NextJs
