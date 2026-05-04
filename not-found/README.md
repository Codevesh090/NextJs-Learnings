Now,we understand about Not found Page.

1. ------Unknown(Not-Found Route) Routes
Now,will see ki agar user ne kisi ese route par hit kar diya jo humne banaya hi nahi hai , toh kya hoga ?
Toh is condition ko tackle karne ke liye hum do kaam kar sakte hai:
1st. Hum kuch nahi karenge toh NextJs apne aap 404 page dikha dega.
2nd. But if we want to show a custom Not-Found page then what we do is that:
  ->   app folder me <not-found.tsx> folder bana do and usko craft kar do jaisa bhi custom page chahiye tumhe.
  ->   Ab yeh chalta yese hai ki pehle toh layout.tsx chalega and then its children . So,Ab system check karega ki childrens me konsa chalaha hai according to the route , toh use koi nahi milega , toh koi nahi milne par system yeh "not-found" waali file run kar dega and we see page not find on the screen .Yaani if we hit any endpoint that we did not made then NextJs apne aap hi yeh not-found.tsx run kar deta hai.



//Important POINT
🟦 File and Folder Conventions
NotFound file ka naam hamesha <not-found.tsx> hi hota hai compulsory hai .



2. We can also trigger not found page at any specific event or at any specific condition.
  Like : WHAT WE DID
  Humne [complaintId] ke folder me uske <page.tsx> me likha ki If the complaintId>1000 then call the 
  notfound() function . Now hota kya hai , ki NextJs me jab bhi hume kisi particular event par not found 
  page dikhana hota hai .Toh hum notFound function jo hume NextJs deta hai uska use karte hai .Yeh kya karta hai ki jab yeh trigger hota hai , toh yeh apne nearest not-found.tsx ko find karne ki koshish karta hai.And ise jo bhi sabse nearest not-found.tsx dikhai deta hai use yeh run kar deta hai .

🟦  Yaani we can trigger not-found at any specific event and NextJs will find nearest not-found page and run it .Go and see in page.tsx of [complaintId] . How we did this .




3. If we want to make the not-found page more specific to the route , we can do like this.
   LIKE:
   Hume usePathname hook ka use kiya , jo hume url paath deta hai 
   Use humne store kiya , break karke and also we use "useClient" as we are using hook and hook is Client component.
   And made the not-found page dynamic which changes with the route.

🟦   Go and see in not-found.tsx page of [complaintId] How we did it .




//To test
Go and run <bun run dev>
Now hit this route /products/3/complaints/1300
You will see that because [complaintId]>1000 , so not-found page triggered and also it is showing dynamic not found page .