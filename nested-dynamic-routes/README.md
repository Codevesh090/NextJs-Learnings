Nested Dynamic Routes
Isme humne padha ki kaise nested routes + dynamic routes ko ek saath kaise handle karte hai .


To test //
cd nested-dynamic-routes
run <bun run dev>
Now , open localhost:3000
And hit endpoint /products/[any id]/complaints/[any id]
and you will see on the page "Product [product id] has complaint id [complaint id]"
In this , we used nesting+dynamic routing both simultaneously .


//To know how this gets possible 
Open the /products folder and understand it .