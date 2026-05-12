export interface Essay {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  content: string;
}

export const essays: Essay[] = [
  {
    slug: "future-agents",
    title: "the future is 1 human running 50 agents",
    subtitle: "why the next great companies will be built by individuals, not teams",
    date: "2026-05-12",
    content: `the future isn't ai replacing humans. it's 1 human running 50 agents.

i built cosmiclan around this thesis. eight autonomous agents, each with a distinct voice, skillset, and operational mandate. they don't just generate content — they run pipelines, close deals, manage social accounts, and ship code.

the misconception is that ai replaces labor. what it actually replaces is coordination cost. a single operator with 50 specialized agents can outship a 20-person startup because there is no slack, no standups, no misalignment. just intent → execution → feedback loop.

i run my entire brand, product pipeline, and outreach through this system. not because it's futuristic. because it's faster.

the operators who learn to orchestrate agents will build the next generation of companies. the ones who don't will be outcompeted by a 19-year-old with a laptop and a fleet of autonomous workers.

pick up the tools. start small. one agent, one workflow. scale from there.`,
  },
  {
    slug: "rax-legacy",
    title: "my dad built rax tech for 25 years",
    subtitle: "here's what i'm building on top",
    date: "2026-05-19",
    content: `my dad built rax tech for 25 years. brick by brick, client by client, in the unsexy world of engineering project management.

i grew up watching him negotiate contracts, manage distributed teams across the gulf and india, and deliver infrastructure projects that most people will never notice but everyone depends on.

now i'm building on top of that legacy.

rax tech isn't just a family business anymore. it's becoming a platform — ai-enhanced project management for distributed engineering teams. the same operational dna that handled $xm in projects, now augmented with agent workflows, automated reporting, and predictive risk analysis.

the lesson i learned from him: trust is built through delivery, not decks. every slide in a pitch deck is a promise. every shipped feature is proof.

i'm taking 25 years of operational trust and translating it into software. same standards. same grit. just faster execution.

this one is for him.`,
  },
  {
    slug: "building-in-public",
    title: "why i build in public",
    subtitle: "show the work, not the pitch deck",
    date: "2026-05-26",
    content: `i don't do stealth mode. if i'm building something, you will see it.

not because i'm an exhibitionist. because building in public is the most effective accountability and distribution mechanism ever invented.

when you post your metrics, your failures, your pivots — two things happen. one: you can't hide. the social contract forces you to ship. two: people trust you before you ask for anything.

i posted day-by-day updates when i burned through $500 on ads that didn't convert. zero shame. just numbers, screenshots, and what i learned. that thread got more consulting leads than any polished case study i could have commissioned.

the formula is simple: shipped artifact + honest commentary = trust at scale.

your failures are more valuable than your wins because nobody else is showing them. the person who admits "this didn't work and here's exactly why" builds more credibility in one post than the founder who drops a product hunt launch with fake testimonials.

build in public or die in private.`,
  },
  {
    slug: "larinova-origin",
    title: "why i registered larinova before building",
    subtitle: "the name came before the product. here's why that matters.",
    date: "2026-06-02",
    content: `i registered larinova.com before i wrote a single line of code.

most builders do the opposite. they build the mvp, then scramble for a name, then find the domain is taken, then settle for a .co or append "app" to their brand name.

i start with the identity.

larinova had to feel clinical, trusted, and calm before the first wireframe existed. the name informed the palette (white + teal). the palette informed the ui. the ui informed the patient experience.

when you lock identity first, every product decision becomes easier. "does this feel like larinova?" is a filter that eliminates 90% of bad ideas.

the same applies to cosmiclan, rax tech, and every brand i build. name → domain → voice → product. in that order.

your brand is not a coat of paint you apply at the end. it's the foundation you build on top of.`,
  },
  {
    slug: "burned-500",
    title: "burned $500 on ads that didn't convert",
    subtitle: "here's exactly what went wrong",
    date: "2026-06-09",
    content: `i spent $500 on instagram ads for larinova. zero conversions. not a single signup.

here's what i did wrong, with receipts.

**mistake 1: i optimized for impressions, not intent.**
the ad looked great. high ctr. but the targeting was broad — "interested in health" instead of "clinic owner in tier 2 india." lots of clicks, zero buyers.

**mistake 2: the landing page didn't match the ad promise.**
the ad promised "ai clinical intake in 5 minutes." the landing page buried that value prop under three paragraphs of feature descriptions. attention span: 3 seconds. i used all of them on fluff.

**mistake 3: no retargeting pixel.**
even the interested visitors bounced with no way to reach them again. $500, one chance, zero follow-up.

**what i'd do differently:**
- hyper-specific audience: clinic owners, 5-20 beds, mumbai/bangalore/hyderabad
- ad creative = landing page headline. exact same words.
- retargeting pixel + email capture on first visit

the $500 wasn't wasted. it was tuition. now i run ads with a 4.2x roas using the same budget.

show your failures with numbers attached. it builds more trust than your wins ever will.`,
  },
];

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug);
}

export function getVisibleEssays(): Essay[] {
  const todayStr = new Date().toLocaleDateString("en-CA");
  return essays.filter((e) => e.date <= todayStr);
}

export const notesToSelf = [
  "fuck opinions of stupid people.",
  "stick to your habits. zero compromises.",
  "sleep is non-negotiable.",
  "pour every dollar into the work. borrow if you have to.",
  "do everything at once. parallelize or die.",
  "work with people. never alongside them.",
  "get fit. look sexy. dress well.",
  "turn your phone off. the world can wait.",
  "never compromise with people who can't reason.",
  "make your loved ones happy. that's the only debt that matters.",
  "embarrassment is a construct built by people beneath you.",
  "make people's lives better. that's the point.",
  "your attention is the only scarce resource. guard it violently.",
];
