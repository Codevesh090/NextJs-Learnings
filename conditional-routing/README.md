What is Conditional Routing ?
Conditional Routing ka matlab hota hai ki agar hume kisi slot ko kisi condition ke basis par uski visibilty control karna ho <while maintaining completely seprate code on the same url> then we use conditional routing . Yaani kisi condition ke basis par ,ki jab yeh true ho tab yeh slot dikhe and jab false then it is not visible without changing the url endpoint . Yaani ek single endpoint par yeh dono state (true then this and false then this ) ko possible karna hi conditional routing hoti hai .


Example :
1. Humne kya kiya ki sabse pehle ke slot banaya @login naam ka and designed it in page.tsx
2. Uske baad we put that in layout.tsx of complex-dashboard
3. And then we set that with a condition such that "If Logged In = true" show "all slots" else show "login slot" only .
4. That's it now our login slot will only be availiable -> if Logged In = "true"