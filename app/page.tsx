import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <main className="min-h-screen bg-white font-serif mx-8 md:mx-12 lg:mx-16">
      {/* Article Header */}
      <header className="max-w-3xl mx-auto pt-16 pb-8 text-center  mb-6 md:mb-14">
        <div className="w-full flex justify-center items-center mb-4">
          <Image
              src="/images/mailbox.svg"
              alt="icon"
              width={32}
              height={32}
              className="max-w flex items-center justify-center"
            />
        </div>  
        <h1 className="text-lg md:text-2xl text-black">
          a collection of essays
        </h1>
        <div>
          <p className="text-sm">by</p>
          <p className="text-sm">Christopher Sim</p>
        </div>
      </header>

      {/* Article Content */}
      <article className="max-w-7xl mx-auto pb-16">
        <section className="mb-20">
          <div className="w-full flex justify-end items-center mb-12 sm:mb-20">
            <Image
              src="/images/journey.svg"
              alt="journey-of-life"
              width={1024}
              height={576}
              className="w-full h-auto min-w-[620px]"
            />
          </div>  
          <h2 className="text-lg md:text-2xl mb-4 text-center">
            Prologue
          </h2>
          <div className="max-w-[900px] mx-auto">
            <p className="text-base leading-relaxed mb-4">
            I&apos;ve rehearsed this conversation countless times in my mind. Each version plays out differently, but they all center 
            around the same moment: sitting with my parents, sharing a truth that will inevitably change our relationship. 
            Sometimes I imagine their quiet confusion, other times their silent disappointment. The uncertainty of their reaction has kept these words 
            trapped inside me for years.
            </p>
            <p className="text-base leading-relaxed mb-4">
            I&apos;ve spent more than half my life carefully guarding a fundamental truth about myself. Since I was twelve, I&apos;ve been conscious of 
            this part of me, carrying it close while keeping it hidden. Now, at twenty-seven, I find myself taking stock of my life. Behind me stretches 
            a path of careful conversations, deflected questions about relationships, and well-practiced changes of subject during family gatherings.
            </p>
            <p className="text-base leading-relaxed mb-4">
            Two lives. Two identities. A facade that grows more difficult to maintain with each passing year.
            </p>
            <p className="text-base leading-relaxed mb-4">
            They say time brings clarity, and perhaps that's true. As I look toward the future—past this milestone birthday that marks more than a quarter of my 
            life—I&apos;m beginning to understand that maintaining this divide has taken more from me than I realized. The boundary between who I am and who I pretend 
            to be has started to blur, and I&apos;m tired of trying to keep them separate.
            </p>  
            <p className="text-base leading-relaxed mb-4">
            I used to think waiting was the answer. I told myself there would be a better time—at thirty, forty, or fifty—when the stakes wouldn&apos;t feel so high. But life
            moves forward whether we&apos;re ready or not, and each day spent living inauthentically is a day I can&apos;t reclaim.
            </p> 
            <p className="text-base leading-relaxed mb-4">
            This memoir isn't just about coming out. It's about choosing to live honestly, about believing that the relationships that matter most can withstand truth. 
            Because that&apos;s what I&apos;ve come to realize: I&apos;m not just doing this for myself. I&apos;m doing it for that twelve-year-old boy who first 
            understood who he was and felt he had to hide. I&apos;m doing it for every version of myself that got me to this point, and for the person I know 
            I can be when I stop maintaining this facade.
            </p> 
          </div>
        </section>

        <section className="mb-20">
          <div className="w-full flex justify-center items-center mb-8">
            <Image
            src="/images/mold.svg"
            alt="mold"
            width={450}
            height={363}
            className="w-2/6 h-auto mb-8 min-w-[350px]"
            />
          </div>  
          <h2 className="text-lg md:text-2xl mb-4 text-center">
            The Language of Different
          </h2>
          <div className="max-w-[900px] mx-auto">
            <p className="text-base leading-relaxed mb-4">
            At ten years old, I didn't have words for what made me different. I just knew that I was. Like many children sensing they don't quite fit the mold, I tried to reshape 
            myself into something more acceptable. I remember watching the popular kids with careful attention, studying their behaviors like lines for a play I never wanted to 
            be in. I thought if I could just master this performance—get a girlfriend, talk about the right things, laugh at the right jokes—the gnawing feeling of being out of 
            place would finally subside.
            </p>
            <p className="text-base leading-relaxed mb-4">
            But authenticity has a way of seeping through the cracks of pretense. In quiet moments at home, away from judging eyes, my true self emerged naturally. I found joy in 
            things I was taught boys shouldn't: Barbie cartoons that spoke to me because of homemaking and dress-up, "Totally Spies" cartoon that felt more empowering with charm. 
            I would slip on heels while at grandma's, and transform the living room into my imaginary classroom, complete with an imaginary audience that never judged the way I 
            spoke or moved.
            </p>
            <p className="text-base leading-relaxed mb-4">
            These weren't just childhood games—they were moments of unconscious liberation. Without knowing terms like "gender non-conforming" or "queer," I was exploring the full 
            spectrum of who I could be. In those precious intervals of unsupervised play, I wasn't trying to be anything; I simply was. The happiness I felt then was pure because 
            it was unfiltered through society's expectations.
            </p>
            <p className="text-base leading-relaxed mb-4">
            But school remained a battlefield of conformity, and no amount of carefully crafted camouflage could fully protect me. I remember the day that should have been my wake-up 
            call—when a group of classmates orchestrated an elaborate prank, convincing me that a girl liked me. My heart soared, not from genuine attraction, but from the thought that 
            finally, I had achieved what seemed like the ultimate badge of normalcy. When they revealed the truth in front of the whole school, humiliated me, their laughter cutting 
            through the air like shards of glass, I learned that even when I tried to be normal, it couldn't save me from being seen as different.
            </p>  
            <p className="text-base leading-relaxed mb-4">
            Looking back, what haunts me isn't just the humiliation of that moment, but my response to it. Instead of questioning why I was trying so hard to be someone I wasn't, 
            I doubled down. I studied harder at the performance, convinced that I just hadn't been convincing enough. I spent countless recesses in the bathroom, crying and hating 
            myself, not because of the bullying itself, but because I believed the problem was that I hadn't tried hard enough to blend in.
            </p> 
            <p className="text-base leading-relaxed mb-4">
            This was my first lesson in hiding a part of my identity, though I didn't recognize it as such at the time. It would take years before I understood that those private 
            moments of authentic joy—playing teacher, loving what I loved without shame—were actually glimpses of my true self, waiting patiently to be acknowledged and embraced.
            </p> 
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-lg md:text-2xl mb-4 text-center">
            Rooted in Self-Hate
          </h2>
          <div className="max-w-[900px] mx-auto mb-14">
            <p className="text-base leading-relaxed mb-4">
            Secondary school was where I learned to truly hide myself. While western media was beginning to show glimpses of queer representation—music and television that hinted at 
            different ways of being—the reality within society, high school, family, and culture remained rigidly traditional. Every morning, I would put on a carefully constructed 
            persona, knowing that the slightest deviation from masculine norms could make me a target.
            </p>
            <p className="text-base leading-relaxed mb-4">
            For five years, I watched as anyone who showed even a hint of femininity became victims of relentless bullying. I'm not proud to admit that I sometimes joined in, trying to 
            prove my own "normalcy" by participating in the very behavior that scared me most. Each time I laughed at someone else's expense, I was really protecting myself, adding 
            another layer to my disguise.
            </p>
            <p className="text-base leading-relaxed mb-4">
            The feelings I'd first noticed in primary school only grew stronger, becoming impossible to ignore. But I had no one to talk to, no way to understand what I was experiencing. 
            I convinced myself there must be something wrong with me, that these feelings were a kind of illness I needed to suppress. The disconnect between the gradual emergence of 
            queer representation in media and its complete rejection in my daily life left me more confused than ever.
            </p>
            <p className="text-base leading-relaxed mb-4">
            Home offered no refuge. Every negative comment about effeminate men on TV, every homophobic joke, every expression of disgust at gender non-conformity reinforced the message 
            that I needed to hide who I was. The constant negativity from both school and home created a deep well of self-hatred. I truly believed I was a disappointment, a mistake waiting 
            to be discovered.
            </p>  
          </div>
          <div className="w-full flex justify-center items-center mb-16">
            <Image
            src="/images/well.svg"
            alt="well"
            width={416}
            height={363}
            className="w-2/6 h-auto min-w-[350px]"
            />
          </div>
          <div className="max-w-[900px] mx-auto">
            <p className="text-base leading-relaxed mb-4">
            This internal struggle manifested in self-destructive ways. I deliberately wrecked my grades. I stole money from my parents, not because I needed it, but as a way to act out 
            against the perfect son I was trying to be. There were times when self-harm seemed like the only way to cope with the numbness I felt.
            </p>
            <p className="text-base leading-relaxed mb-4">
            The daily performance became increasingly complex. I learned to talk about girls the way my peers did, to laugh at the right jokes, to hide any behavior that might give me away. 
            In public, I had to treat the same media representation that privately gave me hope with vocal disgust. I wasn't just hiding anymore—I was actively erasing parts of myself to fit in.
            </p>
            <p className="text-base leading-relaxed mb-4">
            It was exhausting maintaining this dual existence. While I had genuine moments of happiness—achievements, friendships, laughter—there was always an undercurrent of depression. I felt 
            like I was living two separate lives: one at school, one at home, and neither of them truly me.
            </p>
            <p className="text-base leading-relaxed mb-4">
            Looking back, I understand that what I went through wasn&apos;t just normal teenage angst. It was the result of having to constantly deny who I was, both at school and at home. 
            Each joke I forced myself to laugh at, each gesture I suppressed, each feeling I denied—they all became part of a wall I built between myself and the world. It would take years before 
            I realized how much energy I had spent maintaining these barriers, energy that could have been used to actually live my life.
            </p>  
          </div>  
        </section>

        <section className="mb-20">
          <div className="w-full flex justify-center items-center mb-16">
            <Image
            src="/images/puzzle.svg"
            alt="puzzle"
            width={416}
            height={465}
            className="w-2/6 h-auto min-w-[320px]"
            />
          </div>  
          <h2 className="text-lg md:text-2xl mb-4 text-center">
            Between Two Worlds
          </h2>
          <div className="max-w-[900px] mx-auto mb-20">
            <p className="text-base leading-relaxed mb-4">
              The world began to expand for me in unexpected ways during my final years of secondary school. The internet became my window to a larger truth: I wasn't alone. Across the globe, there 
              were others like me—not just gay or straight, but existing across a spectrum I never knew was possible. Each new discovery was like finding another piece of a puzzle I hadn't known 
              I was solving. For the first time, I could see a future where being different wasn't synonymous with being wrong.
            </p>
            <p className="text-base leading-relaxed mb-4">
              But it was my move to California that truly shifted the ground beneath my feet. Suddenly, I found myself in a world where difference wasn&apos;t just tolerated—it was celebrated. On campus, I 
              saw people living openly, authentically, without apology. It was like stepping into color after a lifetime of black and white. Yet years of carefully constructed defenses don&apos;t crumble overnight. 
              I watched this freedom from behind the walls I&apos;d built, simultaneously drawn to it and terrified of embracing it.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Gradually, though, environment began to shape identity. Surrounded by people living their truth, I started to test the waters of my own authenticity. When asked, I began to 
              acknowledge who I was. Each small confession felt like releasing a breath I&apos;d been holding for years. The acceptance I received—from professors who treated me with respect, 
              from peers who saw me as wholly human—began to heal wounds I hadn&apos;t even known were there.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Coming out to Clarence marked a significant milestone. His acceptance was a gift I hadn't dared to hope for, and when our cousins showed the same support, I began to believe that perhaps I could have the 
              life I'd always wanted. This newfound courage led me to take an even bigger step during my first visit back to Malaysia.
            </p>  
            <p className="text-base leading-relaxed mb-4">
              With trembling hands but steady resolve, I came out to my secondary school friends—the same people who had unknowingly contributed to my years of hiding through their casual homophobic jokes. 
              Their response left me speechless. Not only did they accepted me for who I am, but they offered heartfelt apologies for their past behavior. It was a moment of healing I never expected to have.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              What I didn&apos;t anticipate was how my story would ripple through our old social circle. One by one, other classmates began reaching out to me, sharing their own stories of struggling with their 
              sexuality. They told me that seeing me living openly and confidently gave them the courage to do the same. Each message, each confession, each &quot;thank you&quot; strengthened my conviction that being 
              honest about who I am wasn&apos;t just about my own freedom—it was about creating space for others to find theirs too.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              Buoyed by these unexpected victories—I thought my own parents would do the same.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              Spring 2017 proved how wrong I was. Riding high on the acceptance I&apos;d found in the US and Malaysia, I attempted to come out to my parents. Before I could even finish my sentence, the anguish on their 
              faces told me everything I needed to know. We didn&apos;t speak for two weeks afterward, and in that silence, I heard the death of a hope I&apos;d barely allowed myself to nurture. That scared kid growing up 
              came rushing back, along with the familiar weight of knowing I would have to continue living a partial life.
            </p> 
          </div>
          <div className="w-full flex justify-center items-center mb-16">
            <Image
            src="/images/twolives.svg"
            alt="living-two-lives"
            width={416}
            height={339}
            className="w-2/6 h-auto min-w-[350px]"
            />
          </div>  
          <div className="max-w-[900px] mx-auto">
            <p className="text-base leading-relaxed mb-4">
              What followed was a strange kind of half-freedom. I experienced romantic relationships with no one to share it with, no family wisdom to guide me through the ups and downs. 
              Every conversation with my parents became an exercise in omission and deflection. When civil unrest threatened LGBTQ+ rights, I processed my fears alone, unable to share my very 
              real concerns about my future and safety with my family.
            </p>
            <p className="text-base leading-relaxed mb-4">
              This division in my life became painfully clear during my parents&apos; recent visit. Throughout their stay, I felt the familiar frustration of editing my life for their 
              consumption, carefully excising any detail that might reveal too much truth. The weight of all my unspoken words made even casual conversations feel like navigating a minefield.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Living in America has given me the space to become myself, to understand that I deserve to exist exactly as I am. Yet each step forward in my new life is shadowed by the 
              knowledge that I must still maintain a careful performance for the people who have known me longest. The liberation I&apos;ve found here is real, but it&apos;s incomplete—a 
              freedom circumscribed by the boundaries of family acceptance.
            </p>  
            <p className="text-base leading-relaxed mb-4">
              Yet despite living in this in-between space—fully out in some areas of my life while carefully guarded in others—I&apos;ve never been happier as a person. There&apos;s a profound 
              relief in being able to be myself, even if only in certain contexts. Each genuine laugh, each honest conversation, each moment of being seen and accepted for who I am reinforces 
              that I made the right choice in choosing to live authentically.
            </p>  
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-2xl mb-4 text-center">
            Beyond
          </h2>
          <div className="max-w-[900px] mx-auto mb-24">
            <p className="text-base leading-relaxed mb-4">
              As I write these words in the quiet hours of night, memories of our family&apos;s joyful moments flood my thoughts. The weight of knowing these might be our last happy memories together brings 
              tears to my eyes. No one chooses this path willingly—no one would choose to risk losing their family, to face a world where some believe people like me shouldn&apos;t exist. The path of authenticity 
              isn&apos;t a choice; it&apos;s a recognition of who I&apos;ve always been.
            </p>
            <p className="text-base leading-relaxed mb-4">
              I&apos;ve tried to be everything a child should be. I graduated from a Tier 1 institution with a perfect GPA, became the first in our family to earn a Master&apos;s degree, and built a career of 
              working on the forefront of technology—changing the world. I mentor young people and contribute to causes that make real differences in the world. At twenty-seven, I&apos;ve achieved things that make me 
              proud, that I hope make you proud too. I&apos;ve done everything right—the only difference is who I love. This isn&apos;t a choice; it&apos;s simply who I am as a human being.
            </p>
            <p className="text-base leading-relaxed mb-4">
              Everything I&apos;ve accomplished, every success I&apos;ve had, every good quality I possess—these all stem from your nurturing and support. You taught me to work hard, to be honest, to care for others. 
              Now, I&apos;m asking you to extend that support one step further: to let me live authentically as myself. I&apos;ve spent years weighing this moment, understanding the risks, accepting that sharing this truth 
              might change everything between us.
            </p>  
            <p className="text-base leading-relaxed mb-4">
              It breaks my heart to know this could be the end of our family as we know it, but I can&apos;t continue living a half-life. I&apos;m not asking for your acceptance—though I hope for it—but for your acknowledgment. 
              If this truth is something you cannot move past, if this must be where our paths diverge, I need to know. Because I&apos;ve finally learned that I can&apos;t sacrifice my own happiness for anyone else&apos;s comfort anymore.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              Ironically, this strength to be honest, to stand on my own—it comes from you. You raised me to think independently, to be my own person, to live with integrity. I&apos;m doing exactly what you taught me: 
              being true to myself, even when it&apos;s difficult. Even if it hurts.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              No matter what happens after you read these words, I will always be your child. I will continue to support you both because you are forever my family—the parents who raised me, guided me, and helped me become 
              who I am today. My love for you is unconditional and unchanging, even if yours for me changes. You gave me life, taught me to walk, showed me how to be strong. Now I must use that strength to walk my own path, 
              even if I have to walk it alone.
            </p> 
            <p className="text-base leading-relaxed mb-4">
              I love you both with all my heart, forever and always.
            </p> 
          </div>
          <div className="w-full flex justify-center items-center mb-8">
            <Image
            src="/images/signature.svg"
            alt="signature"
            width={100}
            height={100}
            className="w-1/12 h-auto mb-8 min-w-[80px]"
            />
          </div>  
        </section>
      </article>
    </main>
  );
};

export default Home;