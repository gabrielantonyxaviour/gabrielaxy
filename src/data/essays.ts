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
    title: "The Future Is 1 Human Running 50 Agents",
    subtitle: "Why the next great companies will be built by individuals, not teams",
    date: "2026-05-12",
    content: `The future isn't AI replacing humans. It's 1 human running 50 agents.

I built Cosmiclan around this thesis. Eight autonomous agents, each with a distinct voice, skillset, and operational mandate. They don't just generate content — they run pipelines, close deals, manage social accounts, and ship code.

The misconception is that AI replaces labor. What it actually replaces is coordination cost. A single operator with 50 specialized agents can out-ship a 20-person startup because there is no Slack, no standups, no misalignment. Just intent → execution → feedback loop.

I run my entire brand, product pipeline, and outreach through this system. Not because it's futuristic. Because it's faster.

The operators who learn to orchestrate agents will build the next generation of companies. The ones who don't will be outcompeted by a 19-year-old with a laptop and a fleet of autonomous workers.

Pick up the tools. Start small. One agent, one workflow. Scale from there.`,
  },
  {
    slug: "rax-legacy",
    title: "My Dad Built Rax Tech for 25 Years",
    subtitle: "Here's what I'm building on top",
    date: "2026-05-19",
    content: `My dad built Rax Tech for 25 years. Brick by brick, client by client, in the unsexy world of engineering project management.

I grew up watching him negotiate contracts, manage distributed teams across the Gulf and India, and deliver infrastructure projects that most people will never notice but everyone depends on.

Now I'm building on top of that legacy.

Rax Tech isn't just a family business anymore. It's becoming a platform — AI-enhanced project management for distributed engineering teams. The same operational DNA that handled $XM in projects, now augmented with agent workflows, automated reporting, and predictive risk analysis.

The lesson I learned from him: trust is built through delivery, not decks. Every slide in a pitch deck is a promise. Every shipped feature is proof.

I'm taking 25 years of operational trust and translating it into software. Same standards. Same grit. Just faster execution.

This one is for him.`,
  },
  {
    slug: "building-in-public",
    title: "Why I Build in Public",
    subtitle: "Show the work, not the pitch deck",
    date: "2026-05-26",
    content: `I don't do stealth mode. If I'm building something, you will see it.

Not because I'm an exhibitionist. Because building in public is the most effective accountability and distribution mechanism ever invented.

When you post your metrics, your failures, your pivots — two things happen. One: you can't hide. The social contract forces you to ship. Two: people trust you before you ask for anything.

I posted day-by-day updates when I burned $500 on ads that didn't convert. Zero shame. Just numbers, screenshots, and what I learned. That thread got more consulting leads than any polished case study I could have commissioned.

The formula is simple: shipped artifact + honest commentary = trust at scale.

Your failures are more valuable than your wins because nobody else is showing them. The person who admits "this didn't work and here's exactly why" builds more credibility in one post than the founder who drops a Product Hunt launch with fake testimonials.

Build in public or die in private.`,
  },
  {
    slug: "larinova-origin",
    title: "Why I Registered Larinova Before Building",
    subtitle: "The name came before the product. Here's why that matters.",
    date: "2026-06-02",
    content: `I registered larinova.com before I wrote a single line of code.

Most builders do the opposite. They build the MVP, then scramble for a name, then find the domain is taken, then settle for a .co or append "app" to their brand.

I start with the identity.

Larinova had to feel clinical, trusted, and calm before the first wireframe existed. The name informed the palette (white + teal). The palette informed the UI. The UI informed the patient experience.

When you lock identity first, every product decision becomes easier. "Does this feel like Larinova?" is a filter that eliminates 90% of bad ideas.

The same applies to Cosmiclan, Rax Tech, and every brand I build. Name → domain → voice → product. In that order.

Your brand is not a coat of paint you apply at the end. It's the foundation you build on top of.`,
  },
  {
    slug: "burned-500",
    title: "Burned $500 on Ads That Didn't Convert",
    subtitle: "Here's exactly what went wrong",
    date: "2026-06-09",
    content: `I spent $500 on Instagram ads for Larinova. Zero conversions. Not a single signup.

Here's what I did wrong, with receipts.

**Mistake 1: I optimized for impressions, not intent.**
The ad looked great. High CTR. But the targeting was broad — "interested in health" instead of "clinic owner in Tier 2 India." Lots of clicks, zero buyers.

**Mistake 2: The landing page didn't match the ad promise.**
The ad promised "AI clinical intake in 5 minutes." The landing page buried that value prop under three paragraphs of feature descriptions. Attention span: 3 seconds. I used all of them on fluff.

**Mistake 3: No retargeting pixel.**
Even the interested visitors bounced with no way to reach them again. $500, one chance, zero follow-up.

**What I'd do differently:**
- Hyper-specific audience: clinic owners, 5-20 beds, Mumbai/Bangalore/Hyderabad
- Ad creative = landing page headline. Exact same words.
- Retargeting pixel + email capture on first visit

The $500 wasn't wasted. It was tuition. Now I run ads with a 4.2x ROAS using the same budget.

Show your failures with numbers attached. It builds more trust than your wins ever will.`,
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
  "never compromise for people who can't reason.",
  "make your loved ones happy. that's the only debt that matters.",
  "embarrassment is a construct built by people beneath you.",
  "make people's lives better. that's the point.",
  "your attention is the only scarce resource. guard it violently.",
];
