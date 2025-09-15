import Reveal from "@/components/Reveal";
import Image from "next/image";

export const metadata = { title: "About WFT57" };

export default function AboutIndex() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-white">About William F. Taylor Lodge #57</h1>
        <p className="text-zinc-300">Leadership today, our trestle board, and our rich history.</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          <a href="#today" className="btn-primary">Today</a>
          <a href="#trestle-board" className="btn-secondary">Trestle Board</a>
          <a href="#history" className="btn-primary">WFT57 History</a>
          <a href="#prince-hall" className="btn-secondary">Prince Hall History</a>
        </div>
      </header>

      <Reveal className="card p-0 overflow-hidden">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2 p-6">
            <article id="today" className="prose-custom">
              <h1>Master’s Statement</h1>
              <p>
                Good evening all past and present Grand lodge officers, past and present past Masters and brothers. A lot of thanks goes out tonight. Thanks goes out to my family, thank you to my Installing Officers, thank you to the staff of WSOI for putting me through what seemed a three credit college course. Thank you to the craft for allowing me to lead William F. Taylor for this coming year and finally thank all of you for being here tonight.
              </p>
              <p>
                I look forward to continuing the work of previous Past Masters as well as adding my own flavor to the mix. Most of all I look forward to nurturing our brotherly love for one another, and continued fellowship with our constituent lodges, continuing to grow our membership, improve our finances. Continue our time-honored traditions and provide a fun environment for us to meet and fellowship. I’ve selected a very capable and worthy cabinet and staff to assist me in these endeavors.
              </p>
              <p>
                The belief in the Grand Architect of the Universe will allow us to be that lodge we strive be in. Once again I am thankful and ready to get to work. I look forward to the advice and wise counsel offered from all.
              </p>
              <p><strong>Worshipful Master</strong><br/>Spencer Tann</p>
            </article>
          </div>
          <div className="relative min-h-[14rem] bg-white/5 flex items-center justify-center p-2">
            <Image src="/images/WMTann.webp" alt="Worshipful Master Spencer Tann" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>
      </Reveal>

      <Reveal className="card p-6">
        <article id="trestle-board" className="prose-custom">
          <h1>Trestle Board</h1>
          <p>
            A trestle board is a traditional Masonic planning board used to outline the work of the lodge. Historically, the Master of the lodge would draw plans and symbols upon a trestle board to communicate lessons and the labors to be done.
          </p>
          <p>
            Today, many lodges use the term “trestle board” to refer to a calendar or newsletter that lists upcoming meetings, degree work, charitable activities, and special events. It helps the craft stay informed and aligned on the lodge’s plans and priorities.
          </p>
          <p className="italic text-zinc-400">Detailed lodge trestle board to be published here soon.</p>
        </article>
      </Reveal>

      <Reveal className="card p-0 overflow-hidden">
        <div className="grid md:grid-cols-3">
          <div className="relative min-h-[14rem] order-last md:order-first bg-white/5 flex items-center justify-center p-2">
            <Image src="/images/TEAMWFT57-scaled.jpg" alt="WFT57 Team" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
          <div className="md:col-span-2 p-6">
            <article id="history" className="prose-custom">
              <h1>WFT57 History</h1>
              <p>
                The History: William F. Taylor Masonic Lodge #57 began its mark on Prince Hall Masonry on March 9, 1916. The lodge started as a group of men from the Ames United Methodist Church coming together for fellowship and community service. These men eventually became known as the “Men of Ames”. On April 26, 1917, Most Worshipful Joseph P. Evans Grand Master chartered the “Men of Ames” into William F. Taylor Lodge #57. The lodge was named after William F. Taylor, a Past Grand Master for the jurisdiction of Maryland who served from 1880 to 1881.
              </p>
              <p>
                When the lodge was first charted, the brothers of William F. Taylor met at the Galilean Hall on 411 West Biddle Street. The following is a roll call of the first officers to lead William F. Taylor:
              </p>
              <p>
                William F. Taylor’s meeting location has now moved to the Willard W. Allen Masonic Temple at 1307 Eutaw Place. Although William F. Taylor meeting nights have not changed over the lodge’s 100 years in existence. Meeting nights are still the second and fourth Thursday of the month.
              </p>
              <p>
                During its 100 years, William F. Taylor has had 88 Worshipful Masters. Of these 88 Worshipful Masters, 41 of these brothers have gone home to reward.
              </p>
              <p>
                William F. Taylor places a high priority on charitable endeavors such as contributing to the NAACP, the Urban League, Forest Park Little League Baseball, The YMCA, the Arena Players Youth Program, its annual Christmas Basket Distribution to needy families, distributing full and partial college scholarships, the Jericho Project, and the Step Out walkathon for Diabetes. In 2009 William F. Taylor was awarded Lodge of the Year by the Most Worshipful Prince Hall Grand Lodge F&amp;AM of Maryland in part for its charitable contributions to the community.
              </p>
              <p><strong>Worshipful Master</strong><br/>Spencer Tann</p>
            </article>
          </div>
        </div>
      </Reveal>

      <Reveal className="card p-0 overflow-hidden">
        <div className="grid md:grid-cols-3">
          <div className="md:col-span-2 p-6">
            <article id="prince-hall" className="prose-custom">
              <h1>Prince Hall History</h1>
              <p>
                Let me take this opportunity to thank the Great Architect of the Universe, for in him we live and move and have our being. I am humbled to serve as Worshipful Master of William F. Taylor, Lodge #57, grateful to you for believing and having faith in me to lead this great lodge this 2019 masonic year. I plan to do my best to revitalize our friendship, build upon our fraternity, and strengthen our financial standing.
              </p>
              <p>
                Through Friendship and the practice of brotherly love, I hope that we can get to know each other and have a better understanding of who each of us are, not just through a fraternal connection but as family. I also would like to see us expand that bond to the other local lodges in our own jurisdiction, so that the reputation of William F. Taylor expands to all Prince Hall Masons of Maryland. The first step in this is to know each other, intimately, as you do your own brothers. Part of this means bridging the gap between the generations within our lodge and understanding the strengths and weaknesses of each individual brother, and lifting them up as needed. Since I have been in the lodge I have seen a separation of brothers that has grown wider, and my hope is to bridge that gap. We are linked by a chain of sincere affection, and we must always remember that we are only as strong as our weakest link. By doing this, we not only strengthen our lodge, but the entire fraternity.
              </p>
              <p>
                Our Fraternity has a rich history. Not just in its history of Prince Hall, but from time immemorial. Freemasonry is a beautiful or peculiar system of morality, veiled in allegory and illustrated in symbols. Its symbolism is found throughout our lodge and by that understanding, we can gain the knowledge to know our history and what our purpose is. William F. Taylor has a reputation of being a ritualistic and teaching lodge, not just in our jurisdiction but every place we travel. We have a reputation of being a traveling lodge, whereby, we enrich our brothers with the zeal and knowledge to understand who we are. I plan to take every opportunity available to expand on that education, by exploring that history in this masonic year, as well as in our travels. My hope is that we, as a lodge, instill that zeal to learn infinitely into the hearts of every brother that we decide to welcome as a brother into our lodge. It is also my hope that by reigniting that zeal in every brother in our lodge, we will extend our arms to strengthen the fraternal love, and build our home not only through the love, but also our finances.
              </p>
              <p>
                Our fraternity is built on Faith, Hope, and Charity, which are our three Principal Moral Virtues. The last virtue, Charity is known to be the essential characteristic of a Freemasons heart. It blesseth him who gives, as well as him who receives. A claim on a Freemasons Charity is also made as his circumstances in life may warrant. In fact, Freemasonry is so practical in its approach to Charity that we are told to practice Charity, without detriment to our connections or ourselves. To practice Charity, we must have the ability and resources to contribute Charity. Therefore, we must take one view of our organization, not just as a Fraternity, but also as a business, and increase our finances. I plan to take an approach to our finances which will involve investing a portion of our earnings, so that when we practice Charity, we not only give, but improve the society in which we live. A well-known poet by the name of Alexander Pope said “In Faith and Hope the world will disagree, But, all mankind’s concern is Charity”.
              </p>
              <p>
                In this Masonic year, my hope is to strengthen our Friendship through brotherly love, improve our Fraternity by masonic education in Freemasonry and its history, and grow our organization through its finances so that our contributions will empower our communities and help those in the most need. This can be made possible by building on the foundation of that was laid before – by working together as a TEAM.
              </p>
            </article>
          </div>
          <div className="relative min-h-[14rem] bg-white/5 flex items-center justify-center p-2">
            <Image src="/images/PrinceHallPhoto_Portrait.webp" alt="Prince Hall" fill className="object-contain" sizes="(min-width: 768px) 33vw, 100vw" />
          </div>
        </div>
      </Reveal>
    </div>
  );
}
