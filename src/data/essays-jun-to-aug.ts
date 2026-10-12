import type { Essay } from "./essays";

export const essaysJunToAug: Essay[] = [
  {
    slug: "clarity-is-a-building-tool",
    title: "clarity is a building tool",
    subtitle: "a precise problem saves more time than a faster workflow",
    date: "2026-06-15",
    content: `i used to think speed came from moving faster. now i think it starts with naming the problem correctly.

when the problem is vague, every solution looks plausible. you add options, pages, agents, and meetings because no one has agreed on what should change. that feels like progress until the work has to meet a real person.

clarity is not a document you write before the work. it is part of the work. a sentence that defines the user, the moment, and the outcome gives every next decision a test.

i want to spend less time asking whether something is impressive and more time asking whether it solves the thing i set out to solve.`,
  },
  {
    slug: "small-teams-need-clear-interfaces",
    title: "small teams need clear interfaces",
    subtitle: "being close to the work does not remove the need for structure",
    date: "2026-06-21",
    content: `i like small teams because decisions can stay close to the work. but small does not mean informal about everything.

people still need to know who owns a decision, what counts as done, and where the truth lives. without that, a two-person project can create the same confusion as a much larger one. the confusion just travels faster.

good structure makes collaboration lighter. it gives everyone a shared place to look and a clear way to hand work over. i do not want process for its own sake. i want enough shape that people can spend their attention on the product instead of reconstructing context.`,
  },
  {
    slug: "evidence-is-a-better-pitch",
    title: "evidence is a better pitch",
    subtitle: "show the thing someone can inspect",
    date: "2026-06-26",
    content: `i trust a working artifact more than a confident description of one.

a screenshot, a recorded flow, a real response, or a deployed page lets someone check what happened. a claim asks them to borrow my certainty. evidence lets them form their own.

this changes how i want to build. every feature should leave something inspectable behind: what it did, what data it used, where it stopped, and what a person can do next. the artifact does not need to be polished to be useful. it needs to be honest.

the best pitch is often a small thing that works exactly as described.`,
  },
  {
    slug: "a-prototype-is-a-question",
    title: "a prototype is a question",
    subtitle: "building a demo is useful when it teaches you something",
    date: "2026-07-02",
    content: `i think of a prototype as a question with buttons.

it can ask whether a workflow makes sense, whether the language is clear, or whether a person can recover when something goes wrong. if it only proves that i can make a screen move, it has answered a much smaller question than i need.

the useful prototype is narrow enough to change quickly and real enough to expose a decision. i want to put it in front of someone, watch where their expectation differs from mine, and then change the model.

the goal is not to defend the prototype. the goal is to learn what the product should become.`,
  },
  {
    slug: "agents-need-bounds",
    title: "agents need boundaries",
    subtitle: "autonomy works when the edges are explicit",
    date: "2026-07-08",
    content: `i am interested in agents because they can take a goal and carry work forward. but autonomy without boundaries is just uncertainty happening faster.

an agent needs to know what it may change, what it must verify, and when it should stop. it also needs a useful handoff: the result, the evidence, and the decisions still waiting for a human.

those limits do not make the system less capable. they make its capability usable. i want to build agents that can do meaningful work without making me guess what they touched or whether the result is true.

good automation earns trust one bounded action at a time.`,
  },
  {
    slug: "quality-is-a-series-of-decisions",
    title: "quality is a series of decisions",
    subtitle: "polish cannot rescue a product with the wrong shape",
    date: "2026-07-14",
    content: `i do not think quality arrives in a final polish pass. it accumulates through small decisions about what to include, what to explain, and what to leave out.

a clean interface cannot fix a broken promise. a fast model cannot fix a confusing workflow. and more features cannot fix a product that has not chosen who it serves.

the details matter, but they matter in the order people encounter them. first the promise, then the path, then the response, then the finish. i want to get that order right before spending time on shine.

quality is what remains when every layer supports the same purpose.`,
  },
  {
    slug: "taste-is-the-edit",
    title: "taste is the edit",
    subtitle: "having many possible outputs makes choosing more important",
    date: "2026-07-19",
    content: `ai makes it cheap to produce more options. that makes choosing the right one more valuable.

i do not want a flood of plausible work. i want a system that can make a clear first attempt, explain why it chose that direction, and let me correct the part that matters. output volume is easy to mistake for progress because it creates motion on the screen.

taste is the ability to notice what does not belong. it is knowing when the copy is too broad, the image is too generic, or the feature is pulling the product away from its purpose.

generation gives me material. judgment turns it into work.`,
  },
  {
    slug: "names-create-constraints",
    title: "names create constraints",
    subtitle: "a name is useful when it helps you make decisions",
    date: "2026-07-25",
    content: `i care about names because they make an idea easier to hold in the mind. a good name gives a product a shape before the interface is finished.

but a name also creates a promise. once i choose one, i should be able to explain what belongs under it and what does not. if the name can describe everything, it may not help me decide anything.

i want identity to make the work more coherent, not to decorate it. the test is simple: does this choice help me make the next product decision with more confidence? if it does, the name is doing useful work.`,
  },
  {
    slug: "make-claims-checkable",
    title: "make claims checkable",
    subtitle: "precision is a form of respect",
    date: "2026-07-31",
    content: `i want the things i say about a product to be easy to check.

if i say a workflow is automatic, someone should be able to see which steps happen without them. if i say data is private, i should be able to point to the actual boundary. if i say a feature is live, the link should open to the feature.

precision can make a sentence less dramatic. i think that is a good trade. people should not have to translate a big promise into the smaller thing that might be true.

clear claims make it easier for someone to trust the work and easier for me to notice when the work has not caught up.`,
  },
  {
    slug: "context-has-a-cost",
    title: "context has a cost",
    subtitle: "switching tasks is not the same as moving work forward",
    date: "2026-08-06",
    content: `i like working across different kinds of problems. i also know that every switch asks me to rebuild context.

the hidden cost is not only the minutes between tabs. it is remembering what was decided, what is still open, and what would count as a useful next move. if i leave no trace, i pay that cost again later.

short notes, clear owners, and visible next steps help me keep range without making every project feel new each morning. i want to move between ideas freely, but i want each idea to keep its shape while i am away.

context is work. i should leave it in a form i can return to.`,
  },
];
