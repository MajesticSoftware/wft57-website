import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-14">
      <section className="relative shimmer rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/50 via-blue-700/50 to-blue-950/70 p-8 sm:p-12 md:p-16 text-white shadow-2xl">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 bg-[radial-gradient(600px_circle_at_0%_0%,white,transparent_40%),radial-gradient(600px_circle_at_100%_100%,#f5c842,transparent_40%)]" />
        <div className="relative max-w-3xl">
          <span className="eyebrow">Prince Hall Masonry · Maryland</span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gradient">
            William F. Taylor Lodge #57
          </h1>
          <p className="mt-5 text-blue-100/90 text-base sm:text-lg leading-relaxed">
            A Prince Hall Masonic lodge in Maryland dedicated to brotherly love, relief, and truth — serving our community through charity, mentorship, and fellowship.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/news" className="btn-secondary">Explore News & Events</Link>
            <Link href="/about" className="btn-primary">About WFT57</Link>
          </div>
        </div>
      </section>

      <Reveal>
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <Image
            src="/images/TEAMWFT57-scaled.jpg"
            alt="WFT57 Team"
            width={2560}
            height={1920}
            className="h-auto w-full"
            sizes="(min-width: 896px) 896px, 100vw"
            priority
          />
        </div>
      </Reveal>

      <section className="grid gap-6 md:grid-cols-2">
        <Reveal className="card card-hover p-7">
          <h2 className="text-xl font-semibold text-white">Worshipful Master’s Statement</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            “I look forward to nurturing our brotherly love, continuing our time‑honored traditions, and providing a fun environment for us to meet and fellowship.”
          </p>
          <div className="mt-5">
            <Link href="/about#today" className="btn-primary">Read Statement</Link>
          </div>
        </Reveal>
        <Reveal className="card card-hover p-7">
          <h2 className="text-xl font-semibold text-white">Community Impact</h2>
          <p className="mt-3 text-zinc-300 leading-relaxed">
            From scholarships and youth mentoring to holiday food baskets and cultural arts support, WFT57 is active throughout Baltimore and beyond.
          </p>
          <div className="mt-5">
            <Link href="/charities" className="btn-secondary">Explore Charities & Donations</Link>
          </div>
        </Reveal>
      </section>

      <Reveal className="card p-7 md:p-9">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold text-white">Featured Event: Trinidad Trip</h2>
            <p className="mt-2 text-zinc-300 max-w-2xl">View the flyer and booking links for deposit, monthly payments, transportation, and hotel & itinerary.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/news" className="btn-primary">View Flyer</Link>
            <Link href="/news/trinidad-trip" className="btn-secondary">Booking Links</Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
