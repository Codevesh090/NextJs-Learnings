export default function Page() {
  return (
    <div>Loading the content please wait....</div>
  );
}



//Now we will understand about loading.tsx
//Toh loading.tsx bhi ek special file hai jo humne NextJs deti hai to handle loading. It is same like other special files like not-found.tsx and layout.tsx etc.
//Is loading.tsx kaise kaam karti hai ?
//Toh yeh file ese kaam karti hai For example:
//Humne ek Home page banaya on page.tsx of app folder and there we gave a button to navigate to product-page.
//Now,ab agar loading page nahi hota toh kya hota tha pehle , toh yeh hota ki when we click on "Go to product page"
//Then pehle hamesha next page ka saara data load hota hai and then it starts to renders , aisa nahi hota ki pehle render ho gaya then kahi requet jaa rahi hai to take the data .
//Yaani pehle pura page banta hai sabhi fetch request and other things complete hoti hai and then render hota hai html page par .
//Tab tak ek blank page dikhai deta hai yaa you click and page wahi rahega change nahi hoga jab tab next page ka fetching kaam complete naa ho gaya ho and when done then navigated.
//Jisse user experience kharab hota hai.
//So nextJs gives us loading.tsx , jiska kaam yeh hota hai ki agar hum ise kisi route par laga dete hai .
//Toh jab tak us page ka data load nahi hota hai , wo loading page as a fallback page kaam karta hai and user ko wahi loading page dikhai deta rehta hai .
//And when that page loads and ready to render then loading page apne aap hat jaata hai and we see the real page.
//Like here when we click on "Go to product page" -> then it shows us loading page for 2sec -> when thats complete,then this loading page closes and real product page shows up.

//Simply , loading page works as a fallback untill the real page loads up and ready to render .




//To test out
//Click on "Go to Product Page"
//Then it shows up loading page for 2s
//And then it takes up to the real product page