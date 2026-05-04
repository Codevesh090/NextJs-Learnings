Now, we will understand about catch-all segments .
---------------------------------------------------------------------------------------------------------
What is catch-all segments concept and what problem do this solve ?
Let say we have a Next docs page explaining features of NextJs.
     So,NextJs have 1Feature and in that 1 feature there are 5 concepts
     Simliary ,each feature have 5 concepts 
     So,If 20 features and each have 5 concepts then total 400 pages means

     400 routes 
     localhost:3000/docs/feature1/concept1
     localhost:3000/docs/feature1/concept2          
     localhost:3000/docs/feature1/concept3            
     and so on.... 


     Now, agar hum itne routes banane baithe toh it will be a huge problem.
     So,To solve this we have a concept called as dynamic routing .

     Using dynamic routing ,
     (1 * [featureId]) * (1 * [conceptId]) = 1 Dynamic Route 

     To understand this better see the "image" in public folder .

But what if even many dynamic segments in route url like localhost:3000/docs/feature1/concept1/example1
Then also we need to make Firstly <docs folder / then features dynamic folder / then dynamic concept folder / then dynamic exmaple folder > 

This much nesting is not good , So comes up with the concept of catch-all segments.

---------------------------------------------------------------------------------------------------------

What we do ?
1. Toh humne kya kiya ki humne doc karke pehle ek folder banaya 
2. Now humne folder convention ko follow karte hue [[...slug]] naam ka folder banaya 
3. Then uske baad humne ek page.tsx banaya usi slug file me jo sabhi routes on docs folder ko handle karta tha .
4. Yaani /docs se lekar, jitne bhi segments uske aage aate hai usko hum isi page.tsx me handle karte hai.
5. Toh now ab hota kya hai ki yeh setup kaise kaam karta hai toh yeh aise kaam karta hai ki.
6. Ki like when we hit any route like this /docs/fvdfvv/fvfdvdv/fvdvd toh /docs ke baad aa rahe sabhi segments ko slug array me daal deta hai as different elements .
7. Now ab hum usi array ka use karte hai , usme se segments nikalte hai , un nikle hue segments ke hissab se decision .
8. This is what catch all segments are , Just catch all the segments in slug and use it.
9. Just check out the files once .
10. Now for 10 segments no need for 10 level nested foldering .Just one catch all route segments .


//To test out
1. Just open bun run dev
2. Hit the route route , /docs you will see something 
3. Now write any one more segment after /docs and you will se results respectively .
4. Now write two more segments after /docs means /docs/hello/devesh you will see something different on screen .