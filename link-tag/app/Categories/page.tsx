import Link from "next/link";

export default function Home() {
  const ProductId = 101 ;
  const ComplaintId = 103 ;
  return (
    <div>
      <Link className="px-2 py-2 bg-blue-500" href={`/products/${ProductId}/complaints/${ComplaintId}`} replace >Try dynamic link</Link>
    </div>
  );
}




//Created a dynamic link
//Yaani humne yaha seekha ki ek dynamic link kaise banate hai .
//Like here {`/products/${ProductId}/complaints/${ComplaintId}`} .
//Now ab ProductId or ComplaintId ki jo value hogi wo is link me jaayegi and when we click.
//Try dynamic link then is ProductId or ComplaintId ke according route hit hoga and page khulega.

//To try
//Just do 
//cd link-tag
//bun run dev
//Click on "Go to Categories Page" 
//Now on Categories Page click on "Try dynamic Link"
//And you will see the results with when dynamic link used .




//-----------------------------------------------------------------------------------------------------------



//Replace Keyword
//Toh replace keyword ka kaam hota hai ki like For Example:

/* 
Without Replace

Home → Login → Dashboard
(Back to → Login)

-----------------------------------
With Replace

Home → Login -> Dashboard
(Back to → Home)  // Login skip ho gaya


*
Yaani kya hota hai ki let say we travelled like Home page se Login page and Login Page se Dashboard Page and Dashboard Page se User Profile Page par
Now ,Agar hum yahi "Dashboard" page par replace laga de , Toh browser se us page ki history hat jaati hai and
then if we back then we directly get back from User Profle Page to Login Page as Browser Forgoted the Dashboard Page as we used "Replace" keyword in it. 
This is how replace keyword work "Jispar lagaoge use Browser bhul jaayega".

*/