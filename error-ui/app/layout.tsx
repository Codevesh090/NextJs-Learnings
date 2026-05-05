// app/layout.tsx

import type { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

 //Uncomment this below line to see global-error.tsx working
 //throw new Error("Root Layout Crash 💥");

  return (
    <html lang="en">
      <body>
        <h1 style={{ color: "blue" }}>Navbar (Layout)</h1>
        {children}
      </body>
    </html>
  );
}