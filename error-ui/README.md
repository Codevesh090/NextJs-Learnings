Now, we will understand about "error.tsx" and "global-error.tsx" . What problem they solve and How?

What is this error.tsx?
Toh NextJs hume ek special file deta hai which is error.tsx .
Toh is file ka kaam yeh hota hai ki runtime errors ko gracefully handle karna which means
Let say we have a route or a page jispar ek fetch request jaa rahi hai 
Toh Kya hota hai ki request fail ho jaati hai .
Toh ab normally kya hoga ki hamari application crash ho jaayegi.
Toh NextJs ki yeh error.tsx hume isi crash se bachati hai.
Toh hota yeh hai ki when any runtime error comes in then a fallback system comes in picture and instead of crashing the whole application , it fallback to nearest error.tsx file and show users the error.tsx file with the actual error and with a refresh and try once more button .


Important points and advantages of error.tsx
1. It automatically wraps the route-segments and thier nested children in React Error Boundary which means agar hum error.tsx ko kisi route par lagate hai toh wo as a error fallback system kaam karta hai us route ke liye bhi and also uske childrens ke liye bhi .Yaani agar hum parent ke liye ek error.tsx bana de toh wo uske childrens ke liye bhi kaam karega .
2. You can create custom error's UI for specific segments.
3. It isolates errors to affected segments while keeping the rest of you app functional .
4. It enables you to attempt to recover from an error without requiring a full page reload .


How to use it ?
1. So we made a Home Page with a button , "Go to profile page".
2. When clicked it opens /profile route.
3. But on profile route we set-upped as forced error throw system to test out .
(Jaruri nahi hai ki when we use throw error then only this error page triggers up , It can automatically detects any error like we are fetching and it fails , so instead of crashing it shows th error page .)
4. And also we set up the error.tsx page in that /profile route 
5. Now, what happens is that when when we hit /profile -> throwed a error "Boom" -> triggers error.tsx -> error.tsx took this "Boom" as a prop and also we used one more thing which is "reset" , "startTransition" , "useRouter" ->Ab in teeno ko milakar kya hota hai ki humne kya kiya ki humne ek user ko reload ka button diya when user click on that "try again" button then what happens is that "reload" function chalega jo ki startTransition function ko run karega and uske andar sabse pehle run hoga router.refresh() jo kya karega ki wo pure route yaani like localhost:3000 ke baar jitna bhi route hai use pura phir se run karega and then reset() kya karta hai ki wo sirf jisme wo present hai sirf usi route segment ko render karta hai toh wo wo karega 
For example :
             👉 reset() = only the failed segment (like /review) retries
             👉 router.refresh() = entire route (/products/review) re-runs

and yeh startTransition ka kaam yeh hota hai ki 
          * reset() (re-render tree)
          * router.refresh() (re-fetch server data)

👉 These can be heavy operations

Without starttransition:
* UI lag / freeze feel ho sakta hai as those heavy operations start running in frontend with other routes UI.So there is a possiblity that the whole viewport gets hang .

But With starttransition:
* React keeps UI responsive yaani jo front UI page hai wo pura smoothly chalega aisa nahi hoga ki we clicked retry toh heavy operations ki wajah se jo UI kaam kar rahi thi us route segment ke outside wo hang ho jaaye , Instead react bolta hai yeh urgent kaam nahi hai ise aaram se background me karo , baaki bachi hui UI hang nahi honi chahiye , Intotal ,us route segment ke bahar problem nahi pahuchni chahiye .


-> And using these it shows up the error page UI telling us clearly what the error came and giving a button to retry to our users.
6. This is how error.tsx works.


---------------------------------------------------------------------------------------------------
Now we will understand everything ,Through examples:
1. Error-Handling in page.tsx
🟡Let say we make a folder or we can say like we made a route /profile karke.
🟡Uske anadar ek page banaya page.tsx , let say us page me kuch galat tha jisse crash ho gaya page.
🟡Toh Now we will see like how to protect any page on crash by using error.tsx
🟡Toh hum kya karenge ki hum ek error.tsx file ko usi same route segment me bana denge.
🟡Jisse kya hoga ki when we hit /profile then error comes in page crashes 
🟡Now fallback system comes in and it opens up that error.tsx page and show the user error.
🟡Without crashing our website.This is how error.tsx works 

Make error.tsx in the same segment as page.tsx is in -> Then if page crashes fallback to this page.

🟦 Some Important points and advantages about this error.tsx for page.tsx :
🟨 You can create custom error's UI for specific segments .
🟨 If you make a error.tsx then it will get automatically availiable for its nested children's.
🟨 Also In nextJs if any page.tsx crashes then it starts finding the nearest error.tsx possible and run that as fallback and it starts to find from its current position towards upwards position in folder or file structure .

To test out //
Just hit /profile or /activity 
You will see that when page crashes it is fallback to its native or nearest error.tsx page




2. Error Handling in layout.tsx
🟡Toh let say agar layout.tsx me error aa gaya toh kya hoga .
🟡Kyuki layout.tsx have different behaviour then page.tsx in error handling.
🟡Toh yeh kaise kaam karta hai ki , to handle error of layout.tsx we have to make a error.tsx
🟡atleast one segment up or one folder structure up than the file in which that layout.tsx present.
🟡Making error.tsx in the same segment as layout.tsx in , does not work .It only works in page.tsx
🟡Because of component-hierarchy , the scope of error boundry is below the layout.tsx .
🟡Go and see the component-hierarchy image in the public folder.
🟡For example to handle the error state of layout.tsx of /activity we have made a error.tsx in profile.tsx and layout.tsx of /profile is handled by global-error.tsx

To test out //
Just uncomment the error line in /activity/layout.tsx folder
And run /profile/activity on browser and you will see layout.tsx crashes and its error gets handled by error.tsx of /profile



3. Error Handling in root layout 
🟡Now see if we talk about the "Home page" in root layout toh uske error ko Handle karne ke liye we can make a error.tsx in root folder and that's it .Like all where this error is also get handled
🟡But what about layout.tsx of root folder , because there is no Higher folder then this where we can make a error.tsx for this layout.tsx. So, what we do ?
🟡So,here comes in the concept of global-error.tsx .It is a special file given by NextJs to handle this exact problem .
🟡Toh yeh kya karta hai ki root layout me agar ko error aata hai and yeh root layout crash hota hai,Toh yeh file as a error fallback ki tarah kaam karti hai for the layout.tsx of root folder .
🟡Also yeh global-error.tsx ek gloabl-error file hai Yaani agar hum pure hi website ke kisi bhi page par koi kahi bhi Error Handling nahi lagate hai and sirf Yahi ek global-error file banate hai for error handling then it works as a global file kyuki kahi bhi error hoga , koi bhi page crash hoga toh last me yeh use sambhal lega as a fallback system .Kyuki yeh global-error.tsx sabse toh of the folder structure par baitha hai toh iske liye sabhi files and folder iske as a nested children hai and as you know ,NextJs automatically wraps the route-segments and thier nested children in React Error Boundary .


This is the concept of Error handling in page.tsx , layout.tsx and through global-error.tsx.

































---------------------------
SEE "COMPONENT HIERARCHY" IN PUBLIC FOLDER
---------------------------