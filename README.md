What is NextJs?🟥
Toh Next.js ek React framework hai jo React ko aur powerful banata hai by adding features like auto-routing(yaani file-based routing not dependent on react-router(third party library)), SSR (server-side rendering), SEO optimization, and performance improvements.React sirf UI banata hai, 
but Next.js ek full-stack framework ban jaata hai.It is used to make production ready applications.

What problem does it solves ?🟥
So,In React
	•	Routing manually karni padti hai (react-router)
	•	SEO weak hota hai (CSR issue)
	•	Performance slow ho sakti hai (at initial load)
Toh,Next.js yeh sab built-in solve karta hai through:
	•	Auto routing(file-based-routing)
	•	Better SEO (as using SSR/SSG not CSR)
	•	Faster loading

IMPORTANT POINT 
  🟩 NextJs ka structure opinionated hota hai which means Opinionated ka matlab hai Framework tumhe fixed rules/structure follow karne bolta hai (jaise page.js naam fixed rahenga , layout.js naam fixed rahenga etc.) and Yeh isliye hota hai taaki har project ka structure similar ho → team collaboration easy, bugs kam, aur setup time zero. Matlab freedom thodi kam, but speed + consistency zyada .


---------------------------------------------------------------------------------------------------------
Now , How to Setup NextJs ?

We do two steps :
Step 1:<bun create next-app@latest >
Step 2:<bun run dev>


---------------------------------------------------------------------------------------------------------
Project Structure Explanation
package.json -> It is the place where all dependencies and scripts live.
                In this :
								 "scripts": {
                      "dev": "next dev",            //It is used for running local server "bun run dev"
                      "build": "next build",        //It is used for production Builds
                      "start": "next start",        //It is used for starting Production Server
                      "lint": "eslint"              //It is used for setting up NextJs ESLINT configuratio
                            },

next.config.ts -> For NextJs settings and configurations
tsconfig.json -> For Typescript configurations
eslint.config.mjs -> For eslint configurations
postcss.config.mjs -> For tailwind css configurations
next-env.d.ts -> For typescript declarations for NextJs
.next -> It is a folder that builds when we run "bun run" or "bun build" commands
public folder -> It is used for storing all images and videos and docs here 

---------------------------------------------------------------------------------------------------------
Important Basic concept to move further :

🟨 RSC(React Server Components)
React Server Component is a new architecture that was introduced by React team and quickly adopted by NextJs.

This architecture introduces a new approach to creating React Components by dividing them into two distinct parts :
                     Server Components
                     Client Components


🟦 What are Server Components ?
By default, NextJs treats all components as Server Components .
These components can perform Server-Side tasks like reading files or fetching data directly from a database
But cannot use React Hooks or Handle User Interactions .

🟦 What are Client Components ?
To Create a Client Component, you will need to add the "use client" directive at top of component file .
While Client components can't perform Server-Side Tasks like reading files etc.. but they can use hooks and handle user interactions .

---------------------------------------------------------------------------------------------------------
Now,lets understand Routing

Toh Next.js ke do routing systems hai:
	•	Pages Router (old) → /pages
	•	App Router (new) → /app
  🟩 Both these systems work on the concept of <file-based-routing (which means ki hum files yaa folder banate hai and nextJs khud hi unhe routes me convert kar deta hai .)>
To know how, I did a experiment

We made a <pages-folder> in the project and then uske andar we made a <contact.tsx> file .
Now,On the browser when we hit /contact toh yeh contact.tsx render ho raha tha and this 
we call as <page-routing> ,Yaani just make a pages naam ka folder and then jis bhi naam ki
file hum banayenge , that act as a route .

And app-routing hoti hai ki humne like <app> folder ke andar ek aur folder banaya like <about>
and in that folder we made a file <page.tsx> and there we wrote our code . Now, If I go on to 
the browser and hit /about route then that page.tsx will get rendered on the screen .This we call
as <app-routing>. Yaani make a folder in app-folder then that folder becomes the route and the file
in that folder gets rendered when we hit that route.

🟦 Now,Then what is the difference ? Toh kya hum dono file system use kar sakte hai ?
Nahi page-routing is a old concept and less powerful than app-routing and also NextJs prefer "app-routing"
We can use page-routing but then :
  •	Layout reuse messy hota hai 🟥
	•	Server components nahi milte 🟥
	•	Data fetching limited hai 🟥

But If we use app-routing :
  •	Built-in layouts 🟥
	•	Server-side rendering better 🟥
	•	Performance aur scalability better 🟥

🟩 Today , everywhere we use app-routing only .

🟦 What if we make two routes one through page-routing and one through app-routing but name of both the routes are same like /pages/contact.tsx and /app/contact/page.tsx both are /contact route now , then konsa chalega ? 
At this situation ,no one works and we get the error on the screen.

---------------------------------------------------------------------------------------------------------
Now,we will understand about whats the difference in between them <layout.tsx> and <template.tsx> ?
🟩 If we want to understand the use of layout.tsx deeply, REFER TO FILE-BASED-ROUTING FOLDER .

Layout → persist hota hai (state preserve karta hai, re-render nahi hota navigation pe)
Template → Template is 100% same like Layout but yeh har navigation pe fresh render hota hai 
           (state reset ho jaati hai).Iska main use tabhi aata hai ki if we want a fresh state 
					 if we navigate to a particular page then we use template instead of Layout .

<Process>
What does it mean ? Will understand through a example 
Let say we will make a page , with two INCREASE counters with button of each .
But the twist is that one counter is made through <Layout.tsx> and one through <Template.tsx>
and also there is a children , at the bottom of the page which is a button which navigates.
Means if we click on that bottom button we will navigate from current page(/home) to (/about)
So,our setup is ready .

<Testing>
Now , click on LAYOUT.TSX se bane hue button ko then you see that respective counter increased by +2
Now , click on TEMPLATE.TSX se bane hue button ko then you see that respective counter increased by +2
Now , click on the navigation button at bottom of the page , then the page route navigates to (/about).
BUT BECAUSE WE USED THE LAYOUT AND TEMPLATE WO COUNTER AND BUTTON TOH TAB BHI PAGE PAR RAHENGE EVEN THE PAGE CHANGED AS LAYOUT OR TEMPLATE KA KAAM HI <YAAHI HAI PEHLE APNA CODE THEN CHILDREN RUN>

<Result/Conclusion>
Toh after we navigated to the page /about , we will see that the state of that counter that is made using layout is still 2 but template wala state again back to initial which is 0 because "layout" preserves the state while template cannot when navigated .

That's the main difference in layout.tsx and template.tsx.

🟥 You can test this out just go onto the Next js project in ChatGPT and check for the 1st learning context.(Do this experiment once)
---------------------------------------------------------------------------------------------------------

Now, we will understand about Metadata ?
Metadata se tum kisi bhi page ka title, description, SEO tags define karte ho.Yeh browser aur search engine dono ke liye important hai kyuki isi ki help se:
  •	Google ko page ka topic samajhne me easy hota hai
	•	Search results me title & description show karne me 
	•	CTR (click-through rate) improve karne me

Let's see how it helps browser:
Toh search engine kaise kaam karta hai , toh wo yeh 3 cheezo ke basis par kaam karta hai.
	1.	Crawling
Bots (Googlebot) internet par pages ko scan karte hain
	2.	Indexing
Page ka content samajh ke database me store karte hain
	3.	Ranking
Jab user search karta hai, tab best results dikhata hai

So,agar hum apne kisi page ke liye metadata define karte hai . Toh wo us page ko help hi karta hai to rank better in google indexing and if rank better in google indexing then it will show early at the top of the seach results . Hence, cause profits to companies .


🟩 In react,SEO weak hota hai as there is no in-built metadata system .
   But in NextJs it is .

---------------------------------------------------------------------------------------------------------
Till now these are the difference that is between nextJs and react 📀📀📀📀📀📀📀📀📀📀📀📀📀📀📀📀📀📀📀
1.Routes manually define karne padte hai(router-library) but In NextJs we have file-based-routing system.
2.In react,Tum khud decide karte ho folder structure but In NextJs Opinionated structure deta hai.
3.In react,no metadata but In nextJs built-in-metadata system which optimizes SEO .
---------------------------------------------------------------------------------------------------------

🌸 <Routing in NextJs(In-depth)>

Basics:
Yeh jo <app> folder hota hai , Iske andar do cheeze hoti hai by default <layout.tsx> and <page.tsx>
Yeh jo layout.tsx hai yeh act karta hai like we have <main.tsx> in React and page.tsx act as <app.tsx >.
Hum yaha nextJs me isi <layout.tsx> jo <app folder> me hai ,isi se sabhi files and routes connect karte hai and jab yeh render hota hai screen par tabhi sab cheeze jo bhi isse connected hai wo run ho paati hai and we see a full next js website .Like how when main.tsx renders then only app.tsx renders in react,similiary.


<layout.tsx> ke andar do cheeze hoti hai
1st is "whatever tsx we write into it like we wrote" <h1 className="text-5xl text-amber-300">Hello from the main layout from app folder</h1>" and 2nd is "{children}"



🟦 Jo bhi hum as tsx in this layout.tsx me likhte hai wo screen par fixed rehta hai hamesha , kabhi bhi kisi component ki wajah se usme change nahi aata hai . And 2nd is ki <app folder> ke andar "koi bhi folder" or "page.tsx" jo <app folder> ke andar pehle se hai wo sab <layout.tsx> ke children hote hai and yeh jo humne {children} likha hai uska wahi meaning hai ki humne app folder ke sabhi folders and files ko <layout.tsx> ka children bana diya hai.But yeh hota kaise hai ? see it ㊙️

---------------------------------------------------------------------------------------------------------

Topic1: File-Based-Routing
In NextJs , File based routing hoti hai . Isme hum react ki tarah external library ka use nahi karte hai like React have "react-router-dom" Balki NextJs hume In-Built routing ki easyness deta hai .


NextJs me routing <File-Based> hoti hai.What does it mean by <File-Based-Routing>.
Toh humne kaha tha naa ki app folder me layout.tsx ko chod kar sab uske children hote hai .Toh isi concept ka use karke we do file based routing .


-----File Based Routing
Agar hum chahte hai ki when user hit this endpoint like /abc toh yeh page khule .Toh usko achieve karne ke liye hum yaha kya karte hai ki.Hum ek folder banayenge and us folder ka naam wahi rakhenge jo route hume chahiye .So, it will be "abc" folder.And then ab jab is folder par hit hoga toh hume kya dikhana hai usko achieve karne ke liye we make a <page.tsx> file in that abc folder . And that's it route created . Jisse kya hoga ab ki agar user ab /abc par hit karega then this page.tsx runs and we see, whatever we want to show users at /abc route.


-----Nested Routing
Now,if we want to make route in route means <Nested routes> like /def/hello then what we do is that in Nextjs.
Hum def ke andar ek aur folder banayenge "hello" naam se and then us "hello" folder ke andar ek page banayenge phir se "page.tsx" . So,now when we hit /def/hello then we get the content of this hello page .Matlab we have to do nested folders if we want to do nested routing .


-----Important Things
Two important things to remember :
1.HAR PAGE KA NAAM HAMESHA HUME <page.tsx>HI RAKHNA HOTA HAI IN NEXT JS . IT'S COMPULSORY.
2.WE ALWAYS DO "export default" IN NEXT JS NOT🟥!! NAMED EXPORT. BUT WHY ㊙️
3.AGAR KISI PAGE ME LAYOUT HAI TOH HAMESHA HUME <layout.tsx> HI RAKHNA HOTA HAI IN NEXT JS . IT'S COMPULSORY.
4.Next.js App Router me kuch special reserved file names hote hain:
	•	page.tsx → route UI
	•	layout.tsx → layout
	•	loading.tsx → loading UI
	•	error.tsx → error UI
	•	not-found.tsx → 404 page (file ka naam exactly not-found.tsx hi hona chahiye . IT'S COMPULSORY)



------Multiple Layouts
Now,ek aur Important baat yeh hai ki hum <layout.tsx> ko bhi kahi bhi bana sakte hai and usse hoga kya samajhte hai .

I Case.
Like Pehle hum samajhte hai ki if xyz folder does not have layout.tsx then kya hoga ?
Toh kya hoga ki when we hit this route http://localhost:3000/xyz then xyz folder me jo page.tsx file hai wo run hogi and hume screen par dikhayi dega "Hello from the xyz Page" and when we hit this route 
http://localhost:3000/xyz/bye then page.tsx of bye folder run hoga and we see "Hello from the bye Page"

II Case.
But Now we will see what happens if xyz folder have layout.tsx ?
Toh kya hoga ki sabse phele when we hit this http://localhost:3000/xyz toh ab sabse phele layout.tsx jo xyz folder me hai wo run hoga and yeh hoga <h1 className="text-5xl text-blue-700">Hello from the byeLayout</h1> and now kyuki jo-jo files and folders xyz me hai ab wo us layout.tsx ke children ho gaye hai , toh kya hoga ki ab children run honge yaani /xyz run hoga which means page.tsx of xyz folder will run and we will see this on the screen "Hello from the xyz Page" and when we hit this route http://localhost:3000/xyz/bye toh bhi same hoga pehle layout.tsx of xyz run hoga and this will gets printed <h1 className="text-5xl text-blue-700">Hello from the byeLayout</h1> and then bye folder run hoga which has this page.tsx and we will see "Hello from the bye page" . 

<Conclusion>
IF SOME FOLDER HAVE layout.tsx THEN HAMESHA PEHLE WO RUN HOGA AND THEN CHILDRENS OF THAT LAYOUT.


------Unknown(Not-Found Route) Routes
Now,will see ki agar user ne kisi ese route par hit kar diya jo humne banaya hi nahi hai , toh kya hoga ?
Toh is condition ko tackle karne ke liye hum do kaam kar sakte hai:
1st. Hum kuch nahi karenge toh NextJs apne aap 404 page dikha dega.
2nd. But if we want to show a custom Not-Found page then what we do is that:
  ->   app folder me <not-found.tsx> folder bana do and usko craft kar do jaisa bhi custom page chahiye tumhe.
  ->   Ab yeh chalta yese hai ki pehle toh layout.tsx chalega and then its children . So,Ab system check karega ki childrens me konsa chalaha hai according to the route , toh use koi nahi milega , toh koi nahi milne par system yeh not-found waali file run kar dega and we see page not find on the screen .



-------Link Tag
Now we,will learn about the <Link tag>
Yeh LINK TAG same wahi react wala hai React wala hota hai and it is used if we want to link something like any text , image , video or any particular component .


For how to use , refer to page.tsx of app folder.
To test -> If we click on "Hello from the xyz Page" on screen, we will get navigated to "/abc" .


Why <Link> tag is used when there is <a> tag in HTML ? Like what problem does this tag solves ?
Agar hum <a href="/abc">Go</a> use karte hain, toh jab user click karta hai, browser server se poora naya HTML fetch karta hai aur old DOM hata ke naya DOM bana deta hai, yani full page reload hota hai jisse performance slow ho jati hai aur har baar page start se paint hota hai. Is problem ko solve karne ke liye Next.js me <Link> tag use hota hai. <Link href="/abc">Go</Link> pura page reload nahi karta, balki same DOM ko reuse karta hai aur sirf jo changes chahiye hote hain unko update karta hai (React diffing ki help se), jisse navigation fast aur smooth ho jata hai. Yeh mainly do cheezon ki wajah se hota hai: client-side navigation aur prefetching. Client-side navigation ka matlab hai ki browser server se naya HTML nahi mangta, balki JavaScript ke through hi page change ho jata hai aur sirf required components update hote hain. Prefetching ka matlab hai ki <Link> background me hi next page ka code pehle fetch kar leta hai, isliye jab user click karta hai toh page instantly load ho jata hai bina wait kiye.



-------Dynamic Routing
Now,we will understand about Dynamic-Routing(Yaani wo route jo fixed nahi hote hai like /blog/435455 Toh yaha id change hote reh sakta hai , Hence its a dynamic route.)


Now,How to make a dynamic Route in Next Js
Toh like yaha humne kya kiya ki pehle ek <blog> karke folder banaya.
And uske andar ek page.tsx banaya which says "Hello from the blog page".Yaani this route we made /blog
Now,Kyuki hume route kuch esa chahiye /blog/dcvskvsdckd .Toh is type ke route banane ke liye .
We made one more folder in the blog folder named as [blogId] . 
Always use [] these when to make dynamic route.
And then we made one more page.tsx in that folder [blogId] which says "Hello from <blogId> page".
Toh ab kya hoga ki jab bhi , hum ab /blog/anything par hit karenge toh this <anything> gets saved in that 
variable named "blogId" and then yeh screen par dikh jaayega "Hello from <blogId> page".


Now,How to use that Id that we took from that dynamic route and saved it in variable named "blogId" ?
Toh pheli baat <blogId> is saved in a object named params and params is also saved in an object.
Toh wo jo route me Id hai wo as a prop aati hai ,Toh hum usko kaise handle karte hai , let's learn.
Firstly,we make a interface and then we destructure that params in the function parameter ().
And also , params me Promise use hota hai ,yaani hum laga dete hai Promise over <blogId:string> 
Jisse Promise params ko status bhejta rehta hai ki {blogId:string} aaya ki nahi aaya .
And then we use async-await to say that,do not move forward untill {blogId:string} not come .
Yaani we wait for that params to get resolved yaani route se params ke aane tak kaa wait karte hai and
tabhi aage badte hai . Else we will stop there and not move .
And this is how we took that dynamic route from the url and use it to do operations .


IMPORTANT POINT
[blogId] Here the name of blogId and {blogId:string} Here the name of the blogId, has to be same compulsoroly.



--------Work of Component Folder and Importing components in app folder to render.
Matlab ab hum padenge ki kaise nextJs me components ko ek Component folder me banate hai and then we
export it from there and import in app folder wherever we want to render that component.
For example:
Humne Components folder me ek component banaya named as <Navbar>
Then humne use main layout.tsx of app folder me import kiya @/components/Navbar se and used it.
This is how we connect components in NextJs.



---------Special Import Technique
Yaha hum ese import karte hai through using @ jiska matlab hota hai ki like agar humne @/components likh
diya toh uska matlab hota hai , ki outermost side(Yaani ekdum baahar waali side par yaani like agar hum file-based-routing file open karte hai toh hume dikhayi deta hai sabse pehle <next folder> , <app folder> , <components> , <node_modules> etc. Toh inhi sabhi outermost folders ko hum directly @ se pakad sakte hai ) par components naam ka jo folder hai uske baar me baat ho rahi hai and then @/components/Navbar which means we are talking about the Navbar component in components folder.So, we do components import from components folder through @(called as import alias).


---------Favicon Name Tag
In main layout.tsx,

export const metadata: Metadata = {
  title: "Devesh",
  description: "Generated by create next app",
};

Agar hum jo bhi "title" yaha rakhte hai wo hume as the website name , upar favicon ke bagal me dikhai deta
hai . For testing I wrote "Devesh" just do <cd file-based-routing> and then <npm run dev> and see at the top , You will see "Devesh" as right side of favicon.

And whatever we write in this "description" is act as like "metaTag" . See what is meta tag ㊙️

----------------------------------------------------------------------------------------------------------
