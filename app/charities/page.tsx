export const metadata = { title: "Charities & Donations" };

export default function Charities() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">Charities & Donations</h1>
        <p className="text-zinc-300">Our lodge’s ongoing efforts to uplift the community.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white">WFT57 Scholarship Program</h2>
          <p className="mt-2 text-zinc-300">
            To provide financial assistance to the Foundation in awarding scholarships to worthy students enrolled in the School of Education, based on academic achievement and demonstrated financial need for university-related expenses such as tuition, fees, textbooks and emergency funds needed to cover current semester balances.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white">WFT57 Boys to Men Club</h2>
          <p className="mt-2 text-zinc-300">
            Union Baptist Church / The Knights of Pythagoras Male Mentoring Program — “No man stands so straight, as when he stoops to help a boy.” This male mentoring program meets every Saturday from 1:00pm to 3:00pm at 1219 Druid Hill Avenue, Baltimore, Maryland 21217.
          </p>
          <p className="mt-2 text-zinc-300">
            The Knights of Pythagoras is a youth organization dedicated to “The Fatherhood of God, and the Universal Brotherhood of Man.” The program takes boys ages 6–18 and develops them into young men, promoting family values and providing educational experiences.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white">WFT57 Christmas Basket Give‑a‑way</h2>
          <p className="mt-2 text-zinc-300">
            Each year William F. Taylor prepares and delivers food baskets for needy families and the lodge widows. Baskets are prepared at St. James Episcopal Church or the Temple gymnasium.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-white">WFT57 Arena Players</h2>
          <p className="mt-2 text-zinc-300">
            Supporting youth and community engagement through the arts in Baltimore’s historic Arena Players programs.
          </p>
        </div>
        <div className="card p-6 md:col-span-2">
          <h2 className="text-xl font-semibold text-white">WFT57 Annual School Cookout</h2>
          <p className="mt-2 text-zinc-300">
            Celebrating education, community, and the start of the school year with food, fellowship, and resources for families.
          </p>
        </div>
      </section>
    </div>
  );
}
