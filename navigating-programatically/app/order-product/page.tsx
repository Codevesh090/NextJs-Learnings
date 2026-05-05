"use client";
import {useRouter} from 'next/navigation'

const Page = () => {
  const router = useRouter();
  
  function handleClick(){
  console.log("Placing your order");
  router.push("/")
  }
  return (
    <>
    <div>Order Page</div>
    <button className='px-2 py-2 bg-yellow-400 rounded-sm text-black w-30 h-10' onClick={handleClick}>Place Order</button>
    </>
  )
}

export default Page


//Ab hum seekh rahe hai "How to Navigate programatically" ?
//Yaani agar hum chahte hai ki yeh event hote hai apne aap user dusare kisi page par redirect ho jaaye bina 
//kisi button click kiye yaa kisi event ke baad then we use this concept of Navigate programatically .



/*
This concept includes two parts : 

useRouter
redirect()


//Toh hum ab dekhte hai ki useRouter kaise use karte hai .
//Toh useRouter Hook is same like "Link" tag ,But there is a difference which is that this hook "Works in Client Components only" and "Use when navigation depends on logic or events like form submit , button click etc.."
//Yani useRouter ka use hum tab karte hai jab hum chahe ki yeh event hone ke baad user ko move karna ho.
//If we talk about differences then "Link" tag ka use hota tha ki user intentionally move karna chahta ho ek page se duasre page par . Like tumne user ko ek button diya hai and bataya hua hai ki tum is page se is page par move kar sakte ho .


IMPORTANT POINT:
router.replace()    -> Replace the current working page with this page (Yaanni broswer me jaise jaise tum ek page se dusare page par jaate ho it remembers the history of in What order you moved from pages to pages , toh when we do router.replace the it removes the current pages from browser history and place this page on the place of that removed page)
router.back()       -> Go one step back in history
router.forward()    -> Go one step back in history



--------------------------------------------------------
Now, to understand redirect go to page.tsx of [orderId] .

*/