import Image from "next/image";
import FadeInSection from "../components/FadeInSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">

      {/* --- HERO HEADER --- */}
      <header className="bg-gradient-to-r from-blue-600 to-green-500 py-10 shadow-md">
        <h1 className="text-center text-4xl font-bold text-white tracking-wide">
          ENGINEER CONNECT
        </h1>

        {/* Navigation */}
        <nav className="mt-6">
          <ul className="flex justify-center gap-10 text-white text-lg font-medium">
            <li className="border-b-2 border-white pb-1">HOME</li>
            <li className="hover:opacity-80 cursor-pointer">ABOUT US</li>
            <li className="hover:opacity-80 cursor-pointer">PROJECTS</li>
            <li className="hover:opacity-80 cursor-pointer">CONTACT</li>
          </ul>
        </nav>
      </header>

      {/* --- MAIN CONTENT --- */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* --- Featured Engineer (Left) --- */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-6 tracking-wide">FEATURED ENGINEER</h2>

          <div className="flex justify-center">
            <Image
              src="/photo1.png"
              alt="Featured Engineer"
              width={120}
              height={120}
              className="rounded-full shadow"
            />
          </div>

          <h3 className="mt-4 text-lg font-bold">AI-Enhanced Problem Solver,<br/> Dr. Akari Tanaka</h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed px-4">
            Specializes in machine learning and natural processing.  
            Leads our innovative AI research division.
          </p>
        </div>

        {/* --- Team Member Grid (Center) --- */}
        <div className="text-center">
          <h2 className="text-xl font-bold mb-6 tracking-wide">MEET OUR TEAM</h2>

          <div className="grid grid-cols-3 gap-6 justify-items-center">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="text-center">
                <Image
                  src={`/photo${i + 2}.png`}
                  alt={`Team Member ${i + 1}`}
                  width={80}
                  height={80}
                  className="rounded-full shadow"
                />
                <p className="mt-2 font-medium">Member {i + 1}</p>
                <p className="text-xs text-gray-600">Role Example</p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Latest Projects (Right) --- */}
        <div>
          <h2 className="text-xl font-bold mb-6 tracking-wide text-center">LATEST PROJECTS</h2>

          <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <li>• Neural Network Optimization for Robotics</li>
            <li>• Secure Blockchain Implementation</li>
            <li>• Interactive Data Visualization Tool</li>
          </ul>
        </div>
      </section>

      <FadeInSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">セクション 1</h2>
            <p className="text-gray-600">スクロール連動してふわっと表示されます。</p>
          </div>
        </FadeInSection>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white py-6 mt-10 text-center">
        <p>© 2025 ENGINEER CONNECT</p>

        <div className="flex justify-center gap-4 mt-3 text-xl">
          <span className="hover:opacity-80 cursor-pointer"></span>
          <span className="hover:opacity-80 cursor-pointer"></span>
          <span className="hover:opacity-80 cursor-pointer"></span>
        </div>
      </footer>
    </main>
  );
}
