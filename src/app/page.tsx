import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/category/javascript">
        <h1>Start browsing</h1>
      </Link>
    </main>
  );
}
