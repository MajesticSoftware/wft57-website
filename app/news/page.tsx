import Link from "next/link";
import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = { title: "News & Events" };

export default function NewsIndex() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">News & Events</h1>
      </header>

      <Reveal>
        <Link href="/news/trinidad-trip" className="block group">
          <div className="relative overflow-hidden rounded-2xl shimmer bg-gradient-to-br from-amber-400/20 via-amber-300/10 to-amber-200/10 border border-amber-300/20 p-6 md:p-8 shadow-xl transition hover:shadow-2xl">
            <div className="relative z-10">
              <div className="relative h-72 bg-white/5 border border-white/10 rounded-md p-2 mb-4 flex items-center justify-center">
                <Image
                  src="/images/News%26Events/2026%20WFT%20TT%20Visitation%20Flyer.png"
                  alt="Trinidad Trip Flyer (Front)"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 60vw, 90vw"
                />
              </div>
              <p className="text-sm font-semibold text-amber-300 uppercase tracking-wide">Featured Event</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Trinidad Trip – Flyer</h2>
              <p className="mt-2 text-zinc-300 max-w-2xl">
                Click to view deposit, monthly, pay-your-own, transportation, and hotel & itinerary links.
              </p>
              <div className="mt-4">
                <span className="btn-primary">Open Details</span>
              </div>
            </div>
            <span className="absolute right-6 bottom-6 w-[120px] h-[120px] opacity-70">
              <Image src="/images/WFTLogo.webp" alt="WFT57" fill className="object-contain" sizes="120px" />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal>
        <div className="card overflow-hidden">
          <div className="relative h-80 bg-white/5 flex items-center justify-center p-2">
            <Image src="/images/News&Events/ChristmasParty/christmas-dance-2024.png" alt="Annual Chri57mas Dance" fill className="object-contain" sizes="(min-width: 768px) 50vw, 100vw" />
          </div>
          <div className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-white font-semibold">Annual Chri57mas Dance</h3>
              <p className="text-zinc-300 text-sm">December 12th • 8pm–12am • $25</p>
              <p className="text-zinc-400 text-xs mt-1">1307 Eutaw Place, Baltimore, MD 21217 • BYOB/BYOF • Music, Raffles & Light Refreshments</p>
            </div>
            <a
              href="https://williamftaylor57.simpletix.com"
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
