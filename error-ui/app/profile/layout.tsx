// app/profile/layout.tsx
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ProfileLayout({ children }: Props) {
  //Uncomment this below line to see how this /profile/layout.tsx crash handled by global-error.tsx
  //throw new Error("Profile layout crash 💥");
  return <section>{children}</section>;
}