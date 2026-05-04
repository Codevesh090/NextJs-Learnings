What is parallel routing ?
Parallel routing is a advanced mechanism that lets you <render multiple pages smultaneously within the same layout . Matlab ki agar hume ek hi page ke andar multiple sections or slots chahiye jo independently work kare then we use Parallel Routing . 
For Example: Dashboard with multiple sections like in trading platforms.See <img> in IUnderstand folder.

How to setUp ?
To understand this , how its get setUp , What we did is that ...
1.Humne sabse pehle ek folder banaya <yaani route(page) banaya> (complex-dashboard) karke in app folder.
🟦 Parallel routes in NextJs ar defined using a feature called as slots .
🟦 Slots help us organize content in a modular way . 
🟦 To create a slot we use @folder convention .
🟦 Yaani each section or each @folder is called as a slot.
2.Uske baad humne ab jitne bhi sections or pages is complex-dashboard ke route or page me chahiye the .
3.Unhe banane ke liye slots banaye like @notifications slot , @revenue slot , @users slot
4.Now we have one single page with three slots in it.
5.Now just design each of the slot indiviually as you want like I did , I want all three slots as "cards"
🟦 Also Each defined slot automatically becomes as as prop in its corresponding layout.tsx .
🟦 Yaani each slot automatically act as a prop us folder ke layout.tsx me jisme wo sabhi slots bane hai.
🟦 Just open layout.tsx of complex-dashboard and see all slots are acting as a React.ReactNode prop.
6.Toh last me humne sabko layout me connect kiya as a prop and when execution runs then it goes this way.
7.layout.tsx(app folder) -> page.tsx(app folder) if "/" route |or| layout.tsx(complex-dashboard-folder) if "/complex-dashboard" route -> and because we connected every slot and children as a prop in layout.tsx . Hence , children and slots will render simultaneously . Showing this a single layout with slots.
🟦 Slots are not route segments Yaani doing this /complex-dashboard/notification does not do anything.
8.It is mostly use in making of :
          Dashboard with multiple sections
          Split-View interfaces
          Multi-pane layouts
          Complex admin interfaces


Primary advantages and features of Parallel Routing ?
1. Parallel routes are great for splitting layout into managable slots (specially when different teams working on different parts )
2. Independent route handling (Yaani each slot works independently , like if we hit a endpoint in @notifications slot and it fails then it does not affect any other slot . Means no slot affect each other all work independently and handle its own error and handling states independently)
3. Sub-navigation. 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨See it in Unmatched-Routes folder.