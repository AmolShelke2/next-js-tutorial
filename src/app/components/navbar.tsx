import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-end w-screen overflow-hidden px-4 py-2">
      <Link href="/" className="mr-2 underline">
        Home
      </Link>
      <Link href="/about" className="mr-2 underline">
        about
      </Link>
      <Link href="/about/us" className="mr-2 underline">
        about us
      </Link>
      <Link href="/about/someone" className="underline mr-2">
        aboutsomeone
      </Link>
      <Link href="/listofposts" className="underline">
        posts
      </Link>
    </div>
  );
}
