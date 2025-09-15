export const metadata = { title: "Trinidad Trip – Details" };

type Step = { label: string; href: string; img: string; alt: string };

const steps: Step[] = [
  {
    label: "Deposit",
    href: "https://buy.stripe.com/8x2fZg8tDa8U2u124Bbo404",
    img: "/images/News%26Events/Deposit.png",
    alt: "Deposit",
  },
  {
    label: "Monthly",
    href: "https://buy.stripe.com/28E28q5hrdl6gkR6kRbo405",
    img: "/images/News%26Events/Monthly.png",
    alt: "Monthly Payment",
  },
  {
    label: "Pay Your Own Amount",
    href: "https://buy.stripe.com/eVq6oGfW5gxi1pX7oVbo406",
    img: "/images/News%26Events/Pay%20Own%20Amount.png",
    alt: "Pay Your Own Amount",
  },
  {
    label: "Transportation",
    href: "https://buy.stripe.com/28E8wOcJT2Gs9WtdNjbo407",
    img: "/images/News%26Events/Transpo.png",
    alt: "Transportation",
  },
  {
    label: "Hotels & Itinerary",
    href: "https://www.choicehotels.com/TT007?ratePlanCode=LYDFND",
    img: "/images/News%26Events/Hotel%20Stay.png",
    alt: "Hotel Stay & Itinerary",
  },
];

import Image from "next/image";

const flyerImages = [
  {
    src: "/images/News%26Events/2026%20WFT%20TT%20Visitation%20Flyer.png",
    alt: "Trinidad Trip Flyer (Front)",
  },
  {
    src: "/images/News%26Events/2026%20WFT%20TT%20Visitation%20Flyer%20BACK.png",
    alt: "Trinidad Trip Flyer (Back)",
  },
];

export default function TrinidadTrip() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Trinidad Trip</h1>
        <p className="text-zinc-300">
          Booking and information links. Please follow the order: Deposit, Monthly, Pay Your Own, Transportation, Hotels & Itinerary.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Flyer</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {flyerImages.map((img) => (
            <a key={img.src} href={img.src} target="_blank" rel="noreferrer" className="group">
              <div className="relative h-80 bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-contain group-hover:scale-[1.01] transition" sizes="(min-width: 768px) 45vw, 100vw" />
              </div>
              <p className="mt-2 text-sm text-zinc-400">{img.alt}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Bookings & Payments</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={s.href} className="card p-3">
              <div className="relative h-64 bg-white/5 border border-white/10 rounded-md p-2 flex items-center justify-center overflow-hidden">
                <Image src={s.img} alt={s.alt} fill className="object-contain" sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
                <span className="absolute left-2 top-2 text-xs text-zinc-200 bg-black/40 px-2 py-0.5 rounded">Step {idx + 1}</span>
              </div>
              <div className="mt-3 flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold text-sm sm:text-base">{s.label}</h3>
                </div>
                <div className="flex items-center gap-2">
                  <a href={s.href} target="_blank" rel="noreferrer" className="btn-secondary">Open</a>
                  <a href={s.img} target="_blank" rel="noreferrer" className="text-zinc-300 underline underline-offset-4 text-xs sm:text-sm">View image</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
