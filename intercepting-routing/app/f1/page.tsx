import Link from "next/link";

export default function f1() {
  return (
    <div>
      <h1 className="text-5xl text-amber-400">Hello from the f1 folder </h1>
      <Link href="/f1/f2" className="bg-blue-600 rounded-sm ml-20 px-2 py-2">F2</Link>
      <Link href="/f3" className="bg-pink-600 rounded-sm ml-20 px-2 py-2">F3</Link>
       <Link href="/f5" className="bg-green-600 rounded-sm ml-20 px-2 py-2">F5</Link>
    </div>
  );
}
