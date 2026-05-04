import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-5xl text-amber-800">Home Page</h1>
      <Link className="px-2 py-2 bg-blue-500" href="/Categories">Go to Categories Page</Link>
    </div>
  );
}
