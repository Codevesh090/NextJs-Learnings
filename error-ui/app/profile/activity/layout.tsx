// app/profile/layout.tsx
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: Props) {
  //Uncomment this below line to see how this /activity/layout.tsx crash handled by error.tsx of /profile
  //throw new Error("Activity layout crash 💥");
  return <section>{children}</section>;
}
