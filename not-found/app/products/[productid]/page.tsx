export default async function Products({
  params,
}:{params: Promise<{productid:string}>}) {
  const productId = (await params).productid
  return (
    <div>
      <h1 className="text-5xl text-amber-400">Products page{productId}</h1>
    </div>
  );
}