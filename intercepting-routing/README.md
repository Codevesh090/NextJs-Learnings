What are intercepting routes ?
Intercepting routes are the advanced routing mechanism that allows you to load a route from another part of your application within the current layout .It is particularly useful when you want to display new content while keeping the user in the same context .<Matlab agar hume apne current layout me kisi dusare route ke content ko display karna ho , taaki user current context me rehte hue dusare route ka content dekh sake . That's why we use intercepting routes .


----------Like you see the example in <IUnderstand> folder ki yeh kaise kaam karta hai.
Like when we clicked on "login" then it does not directly took us to login page .
Instead it opens a intercepted page like that login popup right there on the landing page.
And when we reloaded that landing page with login popup opened then it took us to the login page seprately.
This is how intercepting routes work .


Uses:
It is mainly used for popup in front of the main content.
Examples : File Explorer
           Login Cards Popup
           Previews
           etc..............


How to set it up for use ?
1. Toh ise setup karne ke liye ,hume ek source folder ,ek target folder , location of target folder chahiye
2. Toh humne ise kaise kiya , Toh sabse pehle humne f1 banaya as source folder(yaani jaha ke action se targeted folder or targeted route khulega) and then humne ek f2 which is target folder(yaani jo khulega) banaya .Now source folder yaani source page and target folder yaani target page toh ready hai , Now we need a intercepted(Yaani beech me khulne waala) folder . Toh intercepted folder banane ka folder convention hota hai.
----------------------------------------
Syntax      Meaning

(.)        same level 

(..)       one level up

(..)(..)    two levels up

(...)       from root directory
----------------------------------------
3. Yaani like humne likha hai (.)f2 Toh iska matlab hai ki f2(targeted) folder exist at the same level.
   Yaani like humne likha hai (..)f3 Toh iska matlab hai ki f3(targeted) folder exist at the one level up.
   Yaani like humne likha hai (..)(..)f4 iska matlab hai ki f4(targeted) folder exist at the two level up.
   Yaani like humne likha hai (...)f5 iska matlab hai ki f5(targeted) folder exist at the root level yaani top level yaani in root directory which is app folder.

   🟦 Remember yeh intercepted folder hamesha jis bhi folder ko tum source folder maan rahe ho usi ke andar hi banana.
   🟦 Name of the targeted folder should be correct like If target folder is f2 we cannot write (.)f200 .NO!

4. Now I set up the source f1 , target f2 , intercepted (.)f2 .
   Now,ab jab hum f2 button par click karenge f1 me toh hum direct f2 page par nahi jaayenge balki usi
   /f1/f2 route par hum intercepted route par jaayenge yaani (.)f2 par and if we reload the page of intercepted route then we reach to actual f2 page .This is called as intercepting routing.

5. Similiary,I gave all example for (..) , (..)(..) , (...)

6. Just try out once//
   Go run <bun run dev>
   Go to /f1 page
   Now click on F2 button and you will see the "intercepted f2 page".
   And if you reload that page then you will see "actual f2 page".
   Similiary,other example you can try out for f3,f4,f5




🟨 What is the different in parallel routing and intercepting routing ?
🟨 Parallel Routing: Ek hi time pe multiple routes (UI sections) ko independently render karta hai — jaise sidebar aur main content alag-alag update ho sakte hain.
🟨 Intercepting Routing: Current route ko temporarily override karke dusra route (jaise modal) show karta hai bina page fully change kiye.
