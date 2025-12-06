import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* ロゴ */}
        <h1 className="text-xl font-bold text-gray-800">
          <Link href="/">HAL Homepage</Link>
        </h1>

        {/* メニュー */}
        <nav className="space-x-6 text-gray-700 hidden md:block">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/company" className="hover:text-blue-600">Company</Link>
          <Link href="/service" className="hover:text-blue-600">Service</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* スマホ用メニュー（後でハンバーガーにできる） */}
        <div className="md:hidden text-gray-700">
          Menu
        </div>
      </div>
    </header>
  );
}
