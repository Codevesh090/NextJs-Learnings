'use client';
import {useRouter} from 'next/navigation'
import {startTransition} from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = ()=>{
    startTransition(()=>{
      router.refresh();
      reset();
    })
  }

  return (
    <div style={{ padding: 20 }}>
      <h2 className="text-red-600">Something went wrong 😢</h2>
      <p>{error.message}</p>


      <button onClick={reload} className="px-2 py-2 bg-green-600 rounded-sm text-black w-30 h-10">
        Try again 🔄
      </button>
    </div>
  );
}