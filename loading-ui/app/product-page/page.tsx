export default async function Page() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Intentional delay");
    }, 2000);
  });

  return (
    <div>Product Page</div>
  );
}