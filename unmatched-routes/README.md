What is subNavigation ?
subNavigation hota hai ki ek specific slot ko navigate karna bina baaki UI ko affect kiye .Yaani like hum full page par ek page se dusare page par navigate karte hai like /home to /contact. Similiarly, agar hume yahi kaam apne banaye gaye kisi slot me karna ho yaani slot ke andar ek page se dusare page jaana ho bina koi changes laaye baaki UI me , that is what we called as sub-navigation .



How to do this(How to navigate from one page to other in a specific slot without effecting the other UI)?

{When navigating through click or something in UI of a specific slot}
1.Is cheez ko achieve karne ke liye pehle toh humne ek button banaya "Archive" naam se 
2.In notifications slot and us button ko link kar diya ek route se /complex-dashboard/archived se
3.Such that when we click on "archived" button then we navigate to this endpoint.
4.Uske baad humne kyuki notification slot ke andar yeh button lagaya hai toh humne isi me 
5.Ek aur folder banaya <archived> naam se and usme <page.tsx> banakar uski UI likh di .
6.Now we are complete , when we click on "archived" button then we are navigating in that slot .
🟦 And also the UI around is not changed ,Kyuki when we navigate through UI(like clicks etc.) then 
NextJs keep showing whatever was in the unmacthed routes before . Kyuki concept yeh hai ki when we.  navigate in slots through UI like clicks then NextJs purana <slot state> yaad rakhta hai .Jisse sirf 
wahi slot change hota hai jisse humne navigate kiya ha ki sabhi elements on the whole layout .

{When page reloads or we directly want to come at this endpoint /complex-dashboard/achived}
1.Jab agar hum /complex-dashboard/achived directly pahuchne ki koshish karte hai or isi page ko reload karte hai tab kya hota hai ki NextJs purana <slot state> bhul jaata hai as refresh cleared everything , toh kya hota hai ki use /complex-dashboard/achived ke baad me pata hai ki is slot me yeh page kholna hai but kyuki baaki ki UI crash ho jaati hai , jo ki wo bhul gaya hai ,toh pura page yaani /complex-dashboard crash ho jata hai and it show "404 page-not-found" as all other slots ki info hai nahi and wo slots toh /complex-dashboard me the .
🟦 Now to prevent this what we do is that , we make a <default.tsx> in each of the slot and also one in complex-dashboard for page.tsx . Such that if NextJs do not know anything about other slots at /complex-dashboard/archieved then it renders up the <default.tsx> of each by default.Hence, page will not crash to 404 and it will fallback to whatever in the default.tsx .

🟦 See this "archieved" in notification is a "page" not a "slot" .



In simple words:
When we navigate from one page to another page in slot through slot UI then NextJs remembers everything the old state of the slot , such that navigation in a specific slot does not change anything in the layout page or other slots state .But when we do page reload or directly approaching the navigation endpoint of a slot then NextJs forgot everything and then it does not able to load state of other slots and that page which cause the page to crash to 404 .So to prevent this we add a default.tsx everywhere in the folder where slots are , such that when reloading then when it does not find other slot states then it will fallback to the default.tsx of that specific slot or page such that we will see that endpoint working in the main slot means page navigated in that main slot and everything aaround it stay at it default state.This is the concept of unmatched routes .


To test out //
Run <bun run dev>
1. Click on blue Archive button , you will see the navigated page in that slot , with no affect on any other slot and you will see the url in the search box changed to complex-dashboard/archived
2. Now, reload that by being at complex-dashboard/archived and you will see the page on that main notifications slot is same but other slots and the page changed to its default state .