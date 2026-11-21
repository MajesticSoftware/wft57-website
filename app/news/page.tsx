import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = { title: "News & Events" };

export default function NewsIndex() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">News & Events</h1>
      </header>

      <Reveal>
        <Link href="/news/trinidad-trip" className="block group">
          <div className="relative shimmer rounded-3xl bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-amber-200/5 border border-amber-300/20 p-6 md:p-8 shadow-xl transition duration-300 group-hover:shadow-2xl group-hover:border-amber-300/40">
            <div className="relative z-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:items-center">
              <div className="relative h-80 md:h-[26rem] bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center justify-center">
                <Image
                  src="/images/events/trinidad-flyer-front.webp"
                  alt="Trinidad Trip Flyer (Front)"
                  fill
                  className="object-contain p-2"
                  sizes="(min-width: 768px) 40vw, 90vw"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Featured Event</p>
                <h2 className="mt-1 text-2xl md:text-3xl font-semibold text-white">Trinidad Trip – Flyer</h2>
                <p className="mt-3 text-zinc-300 max-w-2xl">
                  Click to view deposit, monthly, pay-your-own, transportation, and hotel & itinerary links.
                </p>
                <div className="mt-5">
                  <span className="btn-primary">Open Details</span>
                </div>
              </div>
            </div>
            <span className="pointer-events-none absolute right-6 bottom-6 hidden md:block w-[96px] h-[96px] opacity-60">
              <Image src="/images/WFTLogo.webp" alt="" fill className="object-contain" sizes="96px" />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal>
        <div className="card overflow-hidden">
          <div className="relative h-48 bg-gradient-to-br from-red-700/30 via-emerald-700/20 to-red-900/30">
            <Image src="/images/WFTLogo.webp" alt="WFT57" fill className="object-contain p-6" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold">William F. Taylor #57 Ugly Sweater Christmas Party</h3>
              <p className="text-zinc-300 text-sm">Friday, December 11, 2026 • 8pm–12am • $20</p>
              <p className="text-zinc-400 text-xs mt-1">Most Worshipful Prince Hall Grand Lodge of Maryland, 1307 Eutaw Place, Baltimore, MD 21217 • Live DJ & Dancing • Wear your ugliest sweater • Bring canned goods for families in need</p>
            </div>
            <a
              href="https://www.simpletix.com/e/william-f-taylor-57-ugly-sweater-christmas-tickets-301823"
              target="_blank"
              rel="noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              Buy Tickets
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
