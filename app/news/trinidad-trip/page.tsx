import Image from "next/image";

export const metadata = { title: "Trinidad Trip – Details" };

type Step = { label: string; href: string; img: string; alt: string };

const steps: Step[] = [
  {
    label: "Deposit",
    href: "https://buy.stripe.com/8x2fZg8tDa8U2u124Bbo404",
    img: "/images/events/trinidad-deposit.webp",
    alt: "Deposit",
  },
  {
    label: "Monthly",
    href: "https://buy.stripe.com/28E28q5hrdl6gkR6kRbo405",
    img: "/images/events/trinidad-monthly.webp",
    alt: "Monthly Payment",
  },
  {
    label: "Pay Your Own Amount",
    href: "https://buy.stripe.com/eVq6oGfW5gxi1pX7oVbo406",
    img: "/images/events/trinidad-pay-own.webp",
    alt: "Pay Your Own Amount",
  },
  {
    label: "Transportation",
    href: "https://buy.stripe.com/28E8wOcJT2Gs9WtdNjbo407",
    img: "/images/events/trinidad-transportation.webp",
    alt: "Transportation",
  },
  {
    label: "Hotels & Itinerary",
    href: "https://www.choicehotels.com/TT007?ratePlanCode=LYDFND",
    img: "/images/events/trinidad-hotel.webp",
    alt: "Hotel Stay & Itinerary",
  },
];

const flyerImages = [
  {
    src: "/images/events/trinidad-flyer-front.webp",
    alt: "Trinidad Trip Flyer (Front)",
  },
  {
    src: "/images/events/trinidad-flyer-back.webp",
    alt: "Trinidad Trip Flyer (Back)",
  },
];

export default function TrinidadTrip() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">Trinidad Trip</h1>
        <p className="text-zinc-300">
          Booking and information links. Please follow the order: Deposit, Monthly, Pay Your Own, Transportation, Hotels & Itinerary.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Flyer</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {flyerImages.map((img) => (
            <a key={img.src} href={img.src} target="_blank" rel="noreferrer" className="group">
              <div className="relative h-80 bg-white/5 border border-white/10 rounded-2xl p-2 flex items-center justify-center overflow-hidden">
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
            <div key={s.href} className="card card-hover p-3">
              <div className="relative h-64 bg-white/5 border border-white/10 rounded-xl p-2 flex items-center justify-center overflow-hidden">
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
