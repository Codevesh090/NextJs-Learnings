type BlogIdProps = {
  params: Promise<{
    blogId: string;
  }>;
};

export default async function BlogId({ params }: BlogIdProps) {
  const {blogId} = await params;
  return (
    <div>
      <h1 className="text-5xl text-orange-500">
        Hello from {blogId} page
      </h1>
    </div>
  );
}