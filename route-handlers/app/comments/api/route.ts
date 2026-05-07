import {comments} from './data'

export async function GET(){
    return Response.json(comments);
}


export async function POST(request:Request){
   const comment = await request.json();
   const newComment = {
      id: comments.length+1,
      text: comment.text,
   }
   comments.push(newComment);
   return new Response(JSON.stringify(newComment),{
    headers:{"Content-Type":"application/json"},
    status:201,
   })
}



//-------------------------------------------------------------------------------------------------------

//Toh humne yaha sikha ki HOW WE MAKE A GET REQUEST HANDLER and how they work with a db . 
//Toh humne kya kiya ek in-memory database banaya and made a GET route handler for it. 
//Such that when request comes in to show everything in database ,we can show it .

//To test 
// Go to ThunderClient
// Hit http://localhost:3000/comments/api with Request mode selected is "GET"
// You will get all data from our in-memory db

//-------------------------------------------------------------------------------------------------------

//Uske baad humne sikha HOW WE MAKE A PUT REQUEST HANDLER and how they work with a db.
//Toh humne kya kiya ki humne ek comment add kiya hamare db me is post request se.
//Humne kya kiya ki sabse phele body me jo user ne diya hai add karne ko us object ko liya and comment variable me daala.
//Uske baad humne ek new structured comment banaya by giving it a id .
//And then umne use hamare db me dala 
//And then we gave a response back to the user what we added in the db .That's it


//To Test
// Go to ThunderClient
// Hit http://localhost:3000/comments/api and method "POST" and also filled the body with {"text":"This is the forth comment"}
// and hit the request and Now see the response 
// Also hit http://localhost:3000/comments/api  again and method "GET" such that you can see now total number of enteries in our db and that new entry that we made too there .

//-------------------------------------------------------------------------------------------------------

//Before doing DELETE AND PATCH(update) , Do learn the dynamic route handlers in [id] folder in route.ts
//You will find these DELETE AND PATCH(update) there only in route.ts of [id] folder .

//-------------------------------------------------------------------------------------------------------
