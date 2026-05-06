import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:{
    default:"NextJs Learning",
    template:"%s | NextJs Learning",
  },
  description: "Best app ever",  
  keywords: ["next", "react"]     
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}


//Very Important point 
//Yeh toh Metadata me "title" field hoti hai yeh do types ka ho sakta hai :
// 1.String format
// 2.Object format

/* 
Toh hum yaha samajhenge "Object" format ko mainly
Toh agar hum title ko ese likhe :
   title:{
    default:"NextJs Learning",
   }
   Toh isse kya hota hai , ki jis metadata file me hum likh rahe hai uske jitne bhi children honge agar unme se kisi ne apne metadata me title nahi likha hoga .Toh yeh as a fallback title ki tarah kaam karta hai .


   title:{
    template:"%s | NextJs Learning",
   }
  Toh isse kya hota hai ki iska use hota hai to apply a prefix or suffix .
  Matlab agar hum parent me template define kar de title me toh wo uske saare child pages pe automatically apply ho jaata hai at place of title which means hota yeh hai ki

Matlab:

* Child page apna title deta hai
* Wo title %s ki jagah aa jaata hai
* Aur template usme prefix/suffix add karke final title bana deta hai
* And then parent us new title ko children ko wapas kar deta hai , jisse har children ke title me ek suffix or prefix add ho jaata hai.

👉 Example:

* Template: %s | My App
* Child title: Blog

➡️ Final title: Blog | My App
and give back to each of the children as title in metadata .


But ek problem hai ,let say hume kisi ek children ke liye yeh suffix nahi chahiye but template toh jabar dasti laga dega , So to protect from this we have 
    title:{
    absolute:"NextJs Learning",
    }

    absolute .Toh yeh kya karta hai ki agar hum kisi me title ko aboslute ke saath likh de toh uspar title template ka asar nahi padta hai , and absolute ka matlab bhi hota hai fixed ekdum.
    This absolute is mostly used in children not in parent .In parent only default and template is used .
*/