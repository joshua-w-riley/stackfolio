export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#eaeaea]">
      
      {/* Hero Section */}
      <section className="h-screen flex items-center px-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight">
            Photographer Name
          </h1>
          <p className="mt-6 text-lg text-[#9a9a9a]">
            Photography, without noise.
          </p>
          <button className="mt-8 border border-[#eaeaea] px-6 py-3 text-sm tracking-wide hover:bg-[#eaeaea] hover:text-black transition-all duration-300">
            View Work
          </button>
        </div>
      </section>

      {/* Placeholder Work Section */}
      <section className="px-10 pb-32">
        <h2 className="text-2xl mb-12">Selected Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#1a1a1a] h-80" />
          <div className="bg-[#1a1a1a] h-80" />
          <div className="bg-[#1a1a1a] h-80" />
        </div>
      </section>

    </main>
  );
}