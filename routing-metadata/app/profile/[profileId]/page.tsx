import { Metadata } from "next";

type Props = {
  params: Promise<{        // ✅ params is a Promise now
    profileId: string;
  }>;
};

// 🔥 Dynamic Metadata Function
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { profileId } = await params;   // ✅ await params

  return {
    title: `Profile ${profileId}`,
    description: `This is the profile page of user ${profileId}`,
  };
}

// 👇 Page Component (must be async now)
export default async function Page({ params }: Props) {
  const { profileId } = await params;   // ✅ await params

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Viewing profile: {profileId}</p>
    </div>
  );
}