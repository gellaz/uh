import Navbar from "@/app/(landing)/_components/Navbar";
import { getProfile } from "@/actions/auth";

export default async function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let profile = undefined;
  try {
    profile = await getProfile();
  } catch (error) {}

  return (
    <main className="h-fit">
      <Navbar profile={profile} />
      <div className="mt-36">{children}</div>
    </main>
  );
}
