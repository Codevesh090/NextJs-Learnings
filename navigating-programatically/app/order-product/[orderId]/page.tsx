import {redirect} from 'next/navigation'

const Page = async ({
  params,
}: {
  params: { orderId: string };
}) => {

  const { orderId } = await params;
  if(parseInt(orderId)>100){
  redirect("/")
  }

  return (
    <div>You are watching order with orderId {orderId}</div>
  );
};

export default Page;



// redirect()
// redirect() ka kaam bhi same useRouter ki tarah hi hota hai,But it "Works only in Server components" and 
// Yeh bhi user ko redirect karne ke liye hota hai when some event occurs .
// Like here we said when orderId>100 in the route then redirect it to "/" instantly .



/*


Quick Difference (real feel)

<Link> → user clicks → navigation
useRouter() → JS logic decides → navigation
redirect() → server decides → forced navigation


*/

//---------------------------------------------------------------------------------------------------------

/* 
To test out:
cd navigating-programatically
bun run dev

Hit route /order-products
Now click on "Place Order" button
We will get redirected to "/" Page
Tested useRouter done.


Now hit route /order-products/10
Now you will see some text on screen
BuT AGAIN HIT /order-products/101
Now you will see you get redirected to "/" route
As orderId>100
Tested redirect() done.
*/