Now, we will understand about Multiple Layouts 

What are multiple layout and what problem do they solve ?
Toh problem yeh hai ki agar hamare app folder me ek layout.tsx hai wo jitne bhi childrens hai us app folder me wo un sab par apply ho jaata hai like humne ek header and ek footer banaya and uske beeche me humne children rakha . Toh problem yeh ki let say ki yeh header and footer mujhe sirf customers and revenue route par hi chahiye and login , forgot password , register page yaa route par nahi chahiye toh ab mai kya karu , How do I ensure that Header and footer that are fixed comes only in customers and revenue pages .

Solution
Toh isi ka solution hai multiple layouts . Yeh concept kya kehta hai ki tum route groups(Toh Route groups have one more thing to do other than organizing project structure without affecting URL's which is Apply layouts seprately to specific parts of our app) ka use karke layouts ko hi seprate kar do for diffrent purposes .


For example:
Like yaha humne kya kiya ki hume chahiye tha ki login , forgot password , register page does not have header and only customers and revenue route have headers and footers . So, what we did:
1. We made a Route group (auth) and put down all these files login , forgot password , register page in it .
2. And we made a another route group (marketing) and put down customers and revenue page in it .
3. Yaani maine ab seprate kar diya hai alag-alag cheezo ko and organized in route groups .
4. Now the main thing is that I made layout.tsx in both the files seprately and customized it for each .
5. Also I put the page.tsx of app folder in marketing app route .
6. Now everything ready , Now ab agar mai "/login" par hit karunga toh mujhe ab header nahi dihayi dega balki only footer dikhai dega as now "/login" has its own layout and "/customers" toh mujhe ab alag layout ke hissab se "header" and "footer" both dikhayi denge on customers page .
7. Yaani just seprate the layout and make multiple layouts customized for particular set of routes .