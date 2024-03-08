import Navbar from "@/app/(landing)/_components/Navbar";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-fit">
      <Navbar />
      <div className="mt-36">{children}</div>
    </main>
  );
}
