import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-metal-dark to-metal-medium text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight flex items-center fade-in"
          >
            <span className="bg-white/10 p-2 rounded-lg mr-2">✨</span>
            Blog<span className="text-metal-accent">Pessoal</span>
          </Link>

          <div className="flex space-x-6">
            <Link
              href="/"
              className="hover:text-metal-accent transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-metal-accent transition-all duration-300 font-medium py-2 px-3 rounded-lg hover:bg-white/10"
            >
              Sobre
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
