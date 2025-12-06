import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-white">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
          未来をつくるエンジニアリング
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          OSS・AI・クラウドで企業のDXを加速するエンジニアリングサービス。
          迅速で安全なシステム構築を提供します。
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </main>
  );
}

