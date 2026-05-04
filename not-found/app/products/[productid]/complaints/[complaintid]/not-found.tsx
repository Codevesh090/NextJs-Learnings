"use client";

import {usePathname} from 'next/navigation'

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const complaintId = pathName.split("/")[4];
  return (
    <div>
      <h1 className="text-5xl text-red-600">Product {productId} with complaintId {complaintId} not found </h1>
    </div>
  );
}