What is Rendering ?
Rendering is the process of transformation of component code we write into user interfaces that user can see and interact with .This is called as Rendering.(Matlab react se bane hue kisi component code ko real component UI me convert karna hi rendering hoti hai . )

In NextJs ,to make a performant application 
We need to figure out firstly "when" and "where" this transformation should happen.
>Toh "where" means “different places” which means server ya browser me se rendering kaha karwa rahe hai . Aur “different times” ka matlab hai:User ke aane se pehle (build time) ya user ke aate hi (request time).
What I want to say You will understand soon ...........

So,Concept of Rendering is divided and based on multiple types of rendering:
1. CSR(Client Side Rendering)
2. SSR(Server Side Rendering)
3. SSG(Static Side Genration)
4. RSC(React Server Component)
5. ISR(Incremental Static Regeneration)


1. Client Side Rendering(CSR)
CSR is the oldest way that react use for Rendering .So,what is Client Side Rendering ?
CSR rendering yaani wo rendering jo ki browser yaani client side par ho ,Yaani isme server sirf ek basic blank html and javascript file bhejta hai ,baaki us js ko chalakar pura UI banana and also if any change in state then re-render karna , yeh sab browser karta hai .This is what we called as CSR .

Now,lets see How this CSR actually works in real code ,ekdum starting se when user comes in.
Developer writes code (React + JSX)
│
├── Example:
│     function App() {
│       return <h1>Hello</h1>;
│     }
│
├── Build process starts (local machine / CI)
│     │
│     ├── Transpilation (Babel / SWC)
│     │     │
│     │     └── JSX → JS convert hota hai:
│     │        function App() {
                 const [count, setCount] = useState(0);
                 return <h1>Hello</h1>;
               }               
│     │           ↓
│     │       function App() {
                const [count, setCount] = useState(0);
                return React.createElement("h1", null, "Hello");
              }
│     │
│     ├── Modern JS → Browser-compatible JS
│     │
│     ├── Bundling (Webpack / Vite / Turbopack)
│     │     │
│     │     ├── Saare files combine hote hain
│     │     ├── Dependencies resolve hoti hain
│     │     └── Output banta hai:
│     │           bundle.js (optimized JS fill . Is bundle.js me sirf js hi nahi ablki React library and etc.. things ur hoti hai )
│     │
│     └── Build output ready
│           │
│           └── Files:
│                 ├── index.html
│                 └── bundle.js
│
├── User visits website
│
│── HTTP request sent to server
│
├── Browser receives HTML
│     │
│     └── HTML contains:
│           <div id="root"></div>
│           <script src="bundle.js">
│

── Browser parses HTML
│     │
│     ├── DOM tree created(matlab yeh jo server ne hume HTML diya hai wahi parse hota hai )
│     └── Initial paint (mostly blank ya ek loader dikhai deta hai screen par)


├── Browser downloads bundle.js
│
├── JS execution starts
│     │
│     ├── React library code runs
│     │
│     └── Your code runs:
│           ReactDOM.createRoot(...).render(<App />)
│
├── JSX already converted hota hai (ab JS hai)
│     │
│     └── React.createElement calls execute hote hain.Jisse Virtual dom banta hai
│
├── React initial render
│     │
│     ├── Components execute
│     ├── Virtual DOM created
│     └── Real DOM updated
│
├── Screen shows initial UI
│     │
│     └── (usually loading / empty state)
│
├── After render → useEffect runs
│     │
│     └── API fetch starts (async)
│
├── Server processes request + sends data
│
├── Data received in browser
│     │
│     └── setState() called means state me change
│
├── React triggers re-render that JS file or that JS function
│     │
│     ├── Component runs again
│     ├── New Virtual DOM created 
│     ├── Diffing with old Virtual DOM
│     └── Minimal DOM updates applied
│
│   
│    Remember re-render ke step me wo JS bundle fir se run hota hai ,and <App /> ko render karta hai 
│    yaani ek Virtual Dom create karta hai and then kya hoga ki ab wo check karega ki root waale <div> me
│    render tree yaani real dom kaisa hai and then diffing yaani reconciliation hogi and then jo bhi │     differences milenge use hum update kar denge root div <div> ke html yaani dom tree me .
│
│
└── Final UI painted (with real data)
      │
      └── App becomes fully interactive



-------------------------------------------------------------------------------------------------------

Remember Diffing sirf Re-render me hoti hai 1st render yaani mount ke time par nahi.Kyuki 1st render me toh root div me kuch tha hi nahi toh real DOM toh kuch hai hi nhi initially ,toh diffing ka kya fayda .

First render (initial mount)--------------------------------------------------------------------------
No previous Virtual DOM exists
↓
React App() run karta hai
↓
New Virtual DOM banata hai
↓
Direct DOM create karta hai (no diffing)
↓
root div ke andar inject karta hai


Always in a re-render diffing happens .......
Re-render (baad me jab state change hoti hai)----------------------------------------------------------
Old Virtual DOM (pehle wala)
↓
New Virtual DOM (state update ke baad)
↓
Diffing (comparison hoti hai)
↓
Minimal changes real DOM me apply

-------------------------------------------------------------------------------------------------------

In total,
Process yeh hai ki , User ne jsx function likha -> and it runs and turn on the server -> sabse pehle server side par kya hoga ki babel ka use hoga and transpilation hoga -> then bundle banega us JS ka -> then user go on the browser puts the url and enter -> Toh ab sabse pehle server ke paas jaayegi request to give the code to show the user -> Server sends back a HTML code which contains a html <div> element and JS script tag ->Ab wo html parse hoga kyu tabhi html execute hota hai -> Now ab client yaani browser wapas request marega server ko ki yeh jo script tag tumne bundle js ka link diya tha ,wo file mujhe do .Server us file browser ko de dega and then execution starts of that js file , jisse virtual dom ka creation hoga and then phir if 1st render hai toh no diffing sidha inject into root <div> and if there is something in root div then diffing with that real dom present in that root <div> already ,now because it is a first render to it will not diif directly gets in root <div> and then now useEffect runs and it fetches the data from the api and updates the state and this state update cause a re-render to happen and now in re-render again that js function or that updated bundle js file runs and then again a virtual dom is created , now it do the diffing as it is not the first render and whatever the difference it gets , it make those changes in the real dom that is already present in that root <div> Now,browser paints the html and apply the css .And that's how it is visible on the screen .After this any change in state , cause re-render means running that updated js bundle again and again creation of virtual dom and diffing with real dom and making changes in the real dom and then browser apply css and paint on the viewport .This is how CSR works and this is how React renders .

ONE IMPORTANT POINT
Hamara browser JSX nahi samajhta hai toh hum bable lagate hai toh convert that jsx into js and as js is this much possible such that it can do evrything like creating a html element and deleting and replacing anything .So,that's why we convert it into the JS .

Example :
           JSX
            const element = <h1>Hello Devesh</h1>;
          
          Converted JS
           const element = React.createElement(
             "h1",
             null,
             "Hello Devesh"
           );           

--------------------------------------------------------------------------------------------------------

Drawbacks of Client-Side-Rendering

SEO and Performance
1. When search engines crawl your site they are mainly looking at HTML content but with CSR ,your initial HTML is basically just an empty div tag - not great for search engines trying to figure out what your page is about .

2. When you have a lost of nested components making API calls ,the meaningful content might load too slowly for search engines to even catch it.

3. Your Browser has to do everything : fetch data , build the UI ,make everything interactive..that's a lot of work .Also if we add feature the js bundles becomes bigger and bigger.Because of this heavy work user have to stare for a long time at a empty screen or a loading spinner and users with slow internet connection it gets more frustrating .

--------------------------------------------------------------------------------------------------------

