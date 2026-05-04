Now, we will understand about Route Groups

Route Groups ek concept hai to organize and group related files together without impacting URL structure .
Matlab like we made three different routes -> register , login , forgotpassword but these comes under one domain which is authentication but if we do like putting these folders in auth folder then it act like we have to then do this /auth/register or /auth/forgotpassword or auth/login . But we don't want this , what we want is this /register , /login , /forgotpassword .

Toh NextJs hume ek feature deta hai ki agar multiple files related to one domain hai , toh hum use grough kar sakte hai bina Url structure of those files ke affect kiye .

So, NextJs says use round bracket in the main folder and put the related folder in it and it does not affect your url structure and your files are organized well .

Like you can see we did (auth) and put all related folders in it .
And now our files are organized and routes also didn't changed .