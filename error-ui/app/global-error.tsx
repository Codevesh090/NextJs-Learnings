// app/global-error.tsx

"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {

  return (
    <html>
      <body>
        <h1 style={{ color: "red" }}>💥 Global Error Occurred</h1>
        <p>{error.message}</p>

        <button onClick={() => reset()}>
          Try Again
        </button>
      </body>
    </html>
  );
}