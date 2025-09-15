import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-2xl shimmer border border-white/10 bg-gradient-to-br from-indigo-700/60 via-blue-700/60 to-blue-900/60 p-10 text-white shadow-2xl">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            William F. Taylor Lodge #57
          </h1>
          <p className="mt-4 text-blue-100 text-base sm:text-lg">
            A Prince Hall Masonic lodge in Maryland dedicated to brotherly love, relief, and truth — serving our community through charity, mentorship, and fellowship.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link href="/news" className="btn-secondary">Explore News & Events</Link>
            <Link href="/about" className="btn-primary">About WFT57</Link>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(600px_circle_at_0%_0%,white,transparent_40%),radial-gradient(600px_circle_at_100%_100%,white,transparent_40%)]" />
      </section>

      {/* Full-bleed main image section */}
      <section className="relative mx-[calc(50%-50vw)] w-screen">
        <div className="relative h-[45vh] md:h-[65vh] bg-white/5 flex items-center justify-center">
          <Image
            src="/images/TEAMWFT57-scaled.jpg"
            alt="WFT57 Team"
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <Reveal className="card p-6">
          <h2 className="text-xl font-semibold text-white">Worshipful Master’s Statement</h2>
          <p className="mt-2 text-zinc-300">
            “I look forward to nurturing our brotherly love, continuing our time‑honored traditions, and providing a fun environment for us to meet and fellowship.”
          </p>
          <div className="mt-4">
            <Link href="/about#today" className="btn-primary">Read Statement</Link>
          </div>
        </Reveal>
        <Reveal className="card p-6">
          <h2 className="text-xl font-semibold text-white">Community Impact</h2>
          <p className="mt-2 text-zinc-300">
            From scholarships and youth mentoring to holiday food baskets and cultural arts support, WFT57 is active throughout Baltimore and beyond.
          </p>
          <div className="mt-4">
            <Link href="/charities" className="btn-secondary">Explore Charities & Donations</Link>
          </div>
        </Reveal>
      </section>

      <Reveal className="card p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Featured Event: Trinidad Trip</h2>
            <p className="mt-2 text-zinc-300">View the flyer and booking links for deposit, monthly payments, transportation, and hotel & itinerary.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/news" className="btn-primary">View Flyer</Link>
            <Link href="/news/trinidad-trip" className="btn-secondary">Booking Links</Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
