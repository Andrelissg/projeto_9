import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-green-600 text-white p-4">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Meu Blog
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            Sobre
          </Link>
        </div>
      </nav>
    </header>
  );
}
