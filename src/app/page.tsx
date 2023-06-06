import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "this page is home",
  description: "home description",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </Link>
    </main>
  );
}
