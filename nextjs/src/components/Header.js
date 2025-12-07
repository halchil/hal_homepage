import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-black text-green-400 font-mono border-b border-green-600">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Terminal Window Dots + Title */}
        <div className="flex items-center gap-3">
         
          {/* Command-style Logo */}
          <h1 className="text-sm tracking-wide">
            <Link href="/" className="hover:text-white">
              $ HAL@homepage:~  
            </Link>
          </h1>
        </div>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm">

          <Link href="/" className="hover:text-white transition">
            ls
          </Link>

          <Link href="/company" className="hover:text-white transition">
            cat company.txt
          </Link>

          <Link href="/service" className="hover:text-white transition">
            ./service
          </Link>

          <Link href="/contact" className="hover:text-white transition">
            mail me
          </Link>

        </nav>

        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-green-400">
          $ menu
        </div>

      </div>
    </header>
  );
}
