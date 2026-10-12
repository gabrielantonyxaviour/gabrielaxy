import type { Essay } from "./essays";

export const essaysAugToOct: Essay[] = [
  {
    slug: "calm-is-part-of-the-interface",
    title: "calm is part of the interface",
    subtitle: "software should make the next step easier to see",
    date: "2026-08-11",
    content: `i want software to feel calm, especially when the work behind it is complicated.

calm does not mean empty or slow. it means the interface tells me what is happening, what needs my attention, and what will happen if i act. a useful error gives me a next step. a useful loading state tells me whether to wait. a useful empty state tells me how to begin.

when a product leaves those questions unanswered, the user has to supply the missing design themselves. i do not want people to spend their attention guessing at my system.

clarity is a feature. so is helping someone feel in control.`,
  },
  {
    slug: "measure-the-outcome",
    title: "measure the outcome",
    subtitle: "activity is easy to count and easy to confuse with value",
    date: "2026-08-17",
    content: `i can count tasks, screens, messages, and launches. those numbers tell me that something happened. they do not always tell me whether it helped.

the useful question is what changed for the person using the product. did they finish the task with less effort? did they understand the result? could they recover from a mistake? did the system save time without creating new uncertainty?

i still need activity measures to see whether work is moving. i just do not want to mistake motion for impact. the closer a measure is to a real user outcome, the harder it is to hide behind a busy dashboard.`,
  },
  {
    slug: "independence-is-not-isolation",
    title: "independence is not isolation",
    subtitle: "working alone can still mean building for other people",
    date: "2026-08-23",
    content: `i value being able to start without waiting for a large team. that does not mean i should build without listening to anyone.

independence is useful when it shortens the distance between an idea and a real test. it becomes a blind spot when i confuse my own speed with proof that the product matters.

i want to keep the ability to make a decision and change direction quickly. i also want people to challenge my assumptions before those assumptions harden into architecture. the strongest version of solo building is not isolation. it is taking responsibility for bringing the work back to the people it is meant to serve.`,
  },
  {
    slug: "real-people-break-clean-flows",
    title: "real people break clean flows",
    subtitle: "happy paths are only one part of a product",
    date: "2026-08-29",
    content: `the ideal path through a product is usually easy to draw. the harder work starts when someone arrives with the wrong file, an expired session, a slow connection, or a question the interface did not anticipate.

i want to design for those moments early. a product should explain what went wrong in words a person can use. it should protect their progress where it can and give them a clear route back.

failure states are not edge decorations. they are part of the experience people remember because that is when they need the product most.

the real test of a flow is whether it still helps when a person does something unexpected.`,
  },
  {
    slug: "shortcuts-need-a-reason",
    title: "shortcuts need a reason",
    subtitle: "moving quickly is useful when you know what you are trading away",
    date: "2026-09-03",
    content: `i like shortcuts when they remove repetition. i get wary when they hide a decision i will need to understand later.

copying a pattern can be the right move. skipping input checks, source review, or a clear handoff usually creates work that returns in a less convenient shape. speed has to include the time spent recovering from mistakes, not just the time until the first result appears.

i want to know what a shortcut saves, what it risks, and how reversible it is. then i can choose it on purpose instead of treating fast as automatically better.

the best shortcuts preserve the parts of the work that need care.`,
  },
  {
    slug: "leave-the-work-legible",
    title: "leave the work legible",
    subtitle: "future progress depends on being able to understand the present",
    date: "2026-09-09",
    content: `i want someone to be able to open a project and understand where the important pieces live.

legibility is not only tidy files. it is knowing why a choice exists, which state is real, what is still a draft, and how to tell whether a change worked. without those signals, every new task begins with archaeology.

the people who return to work later may include me. i should not assume that today’s context will still be in my head next week.

good notes and clear boundaries are small gifts to the next person who touches the work. often that person is simply the future version of me.`,
  },
  {
    slug: "label-the-state-honestly",
    title: "label the state honestly",
    subtitle: "a preview, a draft, and a live product are different things",
    date: "2026-09-15",
    content: `i want to be precise about the state of the work.

a prototype can show an interaction without proving the service behind it. a preview can show a page without meaning it is live for customers. a successful build can show that code compiles without showing that the user journey works.

those distinctions might sound small until someone relies on the wrong one. then they become product behavior. a clear label protects the person looking at the work and helps me know what evidence i still need.

i would rather describe a thing accurately while it is unfinished than make it sound complete before it is.`,
  },
  {
    slug: "taste-grows-through-removal",
    title: "taste grows through removal",
    subtitle: "sometimes the better version has fewer parts",
    date: "2026-09-21",
    content: `when a product feels weak, my first instinct can be to add something. another feature, another sentence, another panel. sometimes the problem is that too many things are asking for attention at once.

removal forces me to decide what the product is for. it makes the remaining choices carry more meaning. that can be uncomfortable because each feature took effort to build, but effort is not a reason to keep something.

i want to get better at noticing when the work is already saying enough. a clear path with fewer distractions can feel more generous than a page full of options.`,
  },
  {
    slug: "protect-your-attention",
    title: "protect your attention",
    subtitle: "focus is a resource i spend whether i plan to or not",
    date: "2026-09-27",
    content: `i do not think attention is something i either have or lose. i spend it, often in small amounts that are easy to ignore.

every notification, open loop, and half-decided task takes a little piece. that does not make all interruption bad. it does mean i should choose what gets access to my focus instead of leaving the decision to whatever is loudest.

i want to give difficult work a clean stretch of time and give small tasks a clear boundary. when i do that, the day feels less like reacting to everything and more like making a few deliberate things real.

attention is where my work begins.`,
  },
  {
    slug: "build-for-the-person-after-you",
    title: "build for the person after you",
    subtitle: "the next person may be your future self",
    date: "2026-10-02",
    content: `i want the things i build to be understandable by someone who was not present for every decision.

that means a new user should be able to find their next step. a collaborator should be able to see what is finished and what still needs a decision. and i should be able to return to a project without relying on a perfect memory of why it works.

good products carry enough context to help people move. good systems do the same for the people maintaining them. i think that is part of the craft: make the important state visible, explain the next action, and leave room for someone else to continue the work.`,
  },
];
