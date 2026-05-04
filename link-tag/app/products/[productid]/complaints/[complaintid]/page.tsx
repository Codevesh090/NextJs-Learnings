export default async function ProductAndComplaints({
  params,
}: {
  params: Promise<{ productid: string; complaintid: string }>;
}) {
  const { productid, complaintid } = await params;
  return (
    <div>
      <h1 className="text-5xl text-pink-600">
        Product {productid} has complaint id {complaintid}
      </h1>
    </div>
  );
}