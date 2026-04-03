import paperless from "../assets/paperless.png";
export const projects = [
  {
    slug: "product-development",
    category: "PRODUCT DEVELOPMENT",
    title: "Paperless",
    description: "For building cross-platform mobile apps for iOS and Android",
    image: paperless, // '/projects/mobile.png'
    liveUrl: "https://paperlesss.vercel.app/",
    githubUrl: "https://github.com/Faithyyyyy/paperless",

    // Case study content
    problem: `Gadget vendors in Nigerian markets had no reliable way to issue verifiable proof of purchase. Buyers received handwritten receipts that could be lost, forged, or disputed, leaving both parties with no recourse during resale or warranty claims.`,

    context: `The phone and gadget retail market in Nigeria, particularly hubs like Ikeja Computer Village, operates almost entirely on trust and paper. Most vendors issue handwritten receipts or none at all. During resale, there is no way for a potential buyer to verify a device's purchase history, price paid, or legitimacy of the original sale. Disputes are common, fraud is rampant, and vendors have no digital record of their transactions.`,

    approach: `We built a Next.js web app targeting mobile-first vendors, no app download required, works on any smartphone browser. Each receipt is cryptographically hashed using SHA-256, generating a unique tamper-proof fingerprint tied to the exact transaction data. Vendors issue receipts in under a minute, and buyers receive a public verification link they can share during resale. Anyone; buyer, reseller, or arbitrator, can scan the QR code or visit the link to confirm the receipt is authentic and unmodified, without needing an account.`,

    // screens: [
    //   {
    //     image: null, // '/projects/mobile-screen-1.png'
    //     caption:
    //       "Onboarding — users pick their location and nearest service hub in under 30 seconds",
    //   },
    //   {
    //     image: null, // '/projects/mobile-screen-2.png'
    //     caption:
    //       "Booking flow — service selection, pickup time, and payment in 3 steps",
    //   },
    //   {
    //     image: null, // '/projects/mobile-screen-3.png'
    //     caption: "Order tracking — real-time status updates with SMS fallback",
    //   },
    // ],

    // metrics: [
    //   { value: "4.7★", label: "App Store rating" },
    //   { value: "2,400+", label: "Bookings in first month" },
    //   { value: "68%", label: "Week-2 retention rate" },
    //   { value: "3 min", label: "Average booking time" },
    // ],

    learnings: `Designing for low-bandwidth environments forced us to rethink every asset and network call. Offline-first thinking isn't optional in this market — it's table stakes. We also learned that SMS confirmations outperformed push notifications 3:1 for our demographic.`,
  },

  // {
  //   slug: "product-development",
  //   category: "PRODUCT DEVELOPMENT",
  //   title: "Magneto Lead Platform",
  //   description: "From idea to full design and development execution",
  //   image: null,
  //   liveUrl: "https://yourlivesite.com",
  //   githubUrl: "https://github.com/you/magneto",

  //   problem: `B2B sales teams were spending 60%+ of their time manually qualifying leads from multiple disconnected sources — LinkedIn, email, CRM — with no unified pipeline view.`,

  //   context: `The client had a 12-person sales team using 4 different tools that didn't talk to each other. Leads were falling through the cracks, follow-up timing was inconsistent, and there was no visibility into pipeline health without manually pulling CSVs every Monday morning.`,

  //   approach: `We scoped an 8-week MVP: a unified lead inbox, automated qualification scoring using firmographic data, and a Kanban-style pipeline. We used Next.js for the frontend, a Node/PostgreSQL backend, and built a simple rules engine for lead scoring rather than jumping to ML — which would have been premature at their data volume.`,

  //   screens: [
  //     {
  //       image: null,
  //       caption:
  //         "Lead inbox — all sources unified, scored, and prioritised automatically",
  //     },
  //     {
  //       image: null,
  //       caption:
  //         "Pipeline view — drag-and-drop Kanban with deal value and close probability",
  //     },
  //   ],

  //   metrics: [
  //     { value: "41%", label: "Reduction in lead response time" },
  //     { value: "3×", label: "More pipeline visibility" },
  //     { value: "8 wks", label: "From brief to live MVP" },
  //     { value: "0", label: "Tools replaced (consolidated from 4)" },
  //   ],

  //   learnings: `Resisting the urge to over-engineer the scoring algorithm was the right call. A simple weighted rules engine got us 80% of the value at 10% of the complexity. Ship something that works, then layer intelligence on top.`,
  // },

  // {
  //   slug: "web-development",
  //   category: "WEB DEVELOPMENT",
  //   title: "Miarro Farm Platform",
  //   description: "Crafting fast, scalable, and beautiful web experiences",
  //   image: null,
  //   liveUrl: "https://miarro.com",
  //   githubUrl: "https://github.com/you/miarro",

  //   problem: `A premium agricultural brand had no digital presence that matched the quality of their product. Their existing site was built in 2018, wasn't mobile-responsive, and had a 74% bounce rate.`,

  //   context: `Miarro operates in the premium end of the Nigerian farm produce market — their buyers are hotels, restaurants, and high-income households. The old site undercut the brand at every touchpoint: slow load times, no clear product catalogue, and a contact form that didn't work on mobile.`,

  //   approach: `Full redesign and rebuild in Next.js with a headless CMS (Sanity) so the client team could update products and blog content without touching code. Performance was a core requirement — we targeted a Lighthouse score above 90 across all categories.`,

  //   screens: [
  //     {
  //       image: null,
  //       caption:
  //         "Homepage — hero section establishing premium positioning immediately",
  //     },
  //     {
  //       image: null,
  //       caption:
  //         "Product catalogue — filterable by category, season, and availability",
  //     },
  //   ],

  //   metrics: [
  //     { value: "94", label: "Lighthouse performance score" },
  //     { value: "61%", label: "Drop in bounce rate" },
  //     { value: "3.2×", label: "Increase in enquiry form submissions" },
  //     { value: "1.4s", label: "Average page load time" },
  //   ],

  //   learnings: `Giving non-technical clients a CMS they can actually use is as important as the code itself. We spent 2 of our 10 weeks on content modelling and training — time that paid back immediately in client satisfaction and post-launch independence.`,
  // },

  // {
  //   slug: "ui-ux-design",
  //   category: "UI / UX DESIGN",
  //   title: "Health Tracker App",
  //   description:
  //     "Designing interfaces that are intuitive and delightful to use",
  //   image: null,
  //   liveUrl: "https://yourlivesite.com",
  //   githubUrl: "https://github.com/you/health-tracker",

  //   problem: `Existing health apps overwhelmed users with data. Most people opened them once, felt judged by the metrics, and never came back. The challenge was designing something that felt supportive rather than clinical.`,

  //   context: `Research showed that the users who benefited most from health tracking were also the least likely to stick with existing apps. The barrier wasn't features — it was emotional tone. Apps felt like report cards, not coaches.`,

  //   approach: `We ran a 3-week discovery phase with 12 participants, mapping their current tracking behaviours (most were using notes apps or nothing). We prototyped 3 distinct directions and tested them before committing. The winning concept led with streaks and positive reinforcement, hiding "bad days" data behind an intentional tap.`,

  //   screens: [
  //     {
  //       image: null,
  //       caption:
  //         "Daily check-in — designed to take under 60 seconds with no guilt framing",
  //     },
  //     {
  //       image: null,
  //       caption: "Progress view — celebrates consistency over perfection",
  //     },
  //   ],

  //   metrics: [
  //     { value: "79%", label: "Day-7 retention in pilot" },
  //     { value: "4.8★", label: "Usability test satisfaction score" },
  //     { value: "12", label: "Research participants across 3 rounds" },
  //     { value: "3 wks", label: "Discovery to validated prototype" },
  //   ],

  //   learnings: `The best design decision we made was removing a feature — the daily "score." Users in testing said it made them feel anxious. Stripping it out improved retention by 22% in A/B testing. Sometimes the right answer is subtraction.`,
  // },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}
