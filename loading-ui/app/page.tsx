import Link from "next/link"

export default function Page() {
  return(
  <>
  <div>Hello</div>
  <Link className="px-2 py-2 bg-yellow-400 w-42 h-10 text-black rounded-sm" href={"/product-page"}>Go to product page</Link>
  </>
  )
  
}
