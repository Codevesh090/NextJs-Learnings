import Link from "next/link";

export default function f2() {
  return (
    <div>
      <h1 className="text-5xl text-amber-600">Hello from the f2 folder </h1>
      <Link href="/f4" className="bg-pink-600 rounded-sm ml-20 px-2 py-2">F4</Link>
    </div>
  );
}