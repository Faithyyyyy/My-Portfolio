// src/data/blogData.js
// Add, edit, or remove posts here. The rest of the blog updates automatically.
import postThumbnail from "../assets/post 1.png";
import postThumbnail3 from "../assets/lazy_loading.webp";
import linearDocsReview from "../assets/thumbnail/linear_image.png";
import stripeImage from "../assets/thumbnail/stripe_image.png";

export const blogPosts = [
  {
    slug: "how-stripe-works-digital-money-movement",
    title: "How Stripe Works: The Infrastructure Behind Digital Money Movement",
    date: "June 1, 2026",
    tag: "Engineering",
    thumbnail: stripeImage,
    imageFit: "contain",
    imagePosition: "center",
    excerpt:
      "A beginner-friendly breakdown of how Stripe combines payment gateways, processing, merchant accounts, fraud prevention, and financial automation into one platform.",
    content: `
Stripe is a financial powerhouse that has mastered the art of digital money movement. They help businesses build money movement into software. They created an infrastructure that facilitates effortless payments from customers to businesses and back again.

Today, a lot of global giants like Google, Shopify and Ramp rely on Stripe’s robust infrastructure to manage their online checkout experiences and complex recurring billing systems. By scaling alongside these massive enterprises and strategically acquiring promising regional startups, Stripe has solidified its position as one of the world's most trusted and dominant fintech powerhouses.

## The Problem It Solves

To understand Stripe’s true value, you have to look at the fragmented system it replaced.

Before Stripe, digital transactions relied on three separate entities:

- A gateway to securely capture card details
- A processor to act as the messaging courier that clears the transaction with the banks
- A dedicated merchant bank account to hold the cash securely

The entire process was just summarized, but in reality, setting up these three separate legal and technical systems was a nightmare for business owners.

Stripe completely flattened this learning curve by compressing all three roles into a single, developer-friendly software platform.

## How It Works

Instead of a platform service owner or a website owner having to apply, pay, and write code for three different companies, Stripe acts as the gateway, the processor, and the merchant account simultaneously.

## It Acts as the Gateway

When a customer enters their card details on a website, that information needs to be handled securely.

This is where the payment gateway layer comes in.

Stripe gives businesses pre-built, secure checkout forms like Stripe Checkout.

When a customer enters their card details, Stripe instantly encrypts the data. This eliminates the need for businesses to build and maintain their own secure payment infrastructure. Stripe provides a ready-made solution that handles much of the complexity.

From the customer's perspective, it looks like a simple checkout form. Behind the scenes, security checks and encryption are already at work.

## It Acts as the Processor

Collecting card details is only the first step.

The moment the customer clicks "Pay," Stripe’s internal system acts as the messenger. It instantly communicates with Visa, Mastercard, or the customer's bank to verify if they have enough money and approve or deny the sale in milliseconds.

This is the payment processor's job. Stripe acts as the intermediary between the business, the customer's bank, and card networks. It sends payment requests, receives responses, and communicates the result back to the business, all within seconds.

In simple terms, Stripe is the messenger that helps move payment information between all the parties involved.

## It Acts as the Merchant Bank Account

This is one of Stripe's biggest innovations.

After a payment is approved, the money still needs to be managed and eventually transferred to the business. Traditionally, businesses often needed a separate merchant account for this purpose.

Instead of requiring every small business to set up their own individual, complex merchant bank account from scratch, Stripe simplifies this process through what is commonly known as an aggregator model.

Stripe handles tasks such as fraud monitoring, compliance requirements, and payment settlement before sending funds to the business's bank account according to its payout schedule.

## Who Uses Stripe?

Who exactly does Stripe solve these payment problems for?

The short answer: almost every type of internet business.

Stripe serves companies at every stage of growth, from tiny startups launching their first product to some of the world's largest enterprises. If a business sells products online, charges recurring subscriptions, operates a marketplace, or pays people digitally, there's a good chance Stripe is involved somewhere behind the scenes.

What makes Stripe powerful is not just its ability to move money. It's the fact that it provides an entire financial operating system for internet businesses.

## Key Features

Stripe’s massive adoption is driven by a collection of products that handle the entire lifecycle of a digital transaction.

Here are the key features Stripe offers, broken down by what they do.

## Core Payment Acceptance

At its core, Stripe helps businesses collect money from customers around the world. These features let businesses accept money from customers anywhere in the world.

### Global Card Processing

Businesses can accept credit and debit card payments from customers across multiple countries and currencies through a single integration.

### Stripe Terminal

Not every business operates exclusively online.

Stripe Terminal provides physical card readers for retail stores, allowing in-person payments to sync automatically with online transaction data. This creates a unified view of customer payments across both digital and physical channels.

## Specialized Business Models

Different businesses make money in different ways.

A software company may charge monthly subscriptions, while a marketplace accepts one-time payments from a customer, takes a platform fee, and splits the remaining funds among multiple parties involved in the sale or service, for example Uber.

Stripe provides specialized tools for these scenarios.

### Stripe Billing

Managing subscriptions sounds simple until you have to deal with free trials, failed payments, usage-based pricing, upgrades, downgrades, and renewals.

Stripe Billing automates these processes, allowing SaaS businesses to focus on their product instead of building a custom billing system from scratch.

### Stripe Connect

Marketplaces face an even more complicated challenge.

When a customer pays for a ride, delivery, or freelance service, the platform often needs to collect the payment, deduct its fee, and distribute the remaining funds to independent workers.

Stripe Connect handles this entire flow automatically.

This is why platforms like ride-sharing, delivery, and creator marketplaces can scale without building complex payment infrastructure themselves.

## Fraud Prevention and Security

Moving money online attracts fraud.

Because Stripe sits at the center of billions of payment interactions, it can identify suspicious patterns and help businesses block fraudulent activity before it causes damage.

### Stripe Radar

Stripe Radar uses machine learning and AI to analyze millions of global transactions in real time, instantly blocking stolen credit cards and fraudulent checkout attempts.

### Built-In Compliance

Financial regulations are notoriously complex.

Stripe handles heavy regulatory requirements, like PCI compliance and European Strong Customer Authentication, automatically. This means businesses do not have to worry as much about legal financial liabilities, thereby reducing the operational burden of staying compliant.

## Operations and Financial Automation

Collecting money is only part of the story.

Businesses also need to calculate taxes, generate invoices, and understand their financial data.

These tools help companies manage the money after it is collected.

### Stripe Tax

Stripe Tax automatically calculates, collects, and reports sales tax, VAT, and GST based on the buyer's precise physical location.

### Stripe Invoicing

Stripe Invoicing creates and sends professional, interactive PDF invoices that corporate clients can pay instantly via wire or card.

### Stripe Sigma

Stripe Sigma is an integrated SQL data tool that lets accounting teams instantly query their transaction history to build financial reports.

Together, these tools reduce the amount of manual financial work required to run an online business.

## Business Infrastructure

Stripe's ambitions extend beyond payments.

### Stripe Atlas

For new entrepreneurs, Stripe Atlas allows anyone in the world to form a legal US company, such as a Delaware LLC or C-Corp, set up a US bank account, and start accepting global payments in just a few days entirely online.

## Why It Matters

To understand why Stripe became one of the most important infrastructure companies on the internet, you have to look beyond payment processing. Its impact can be understood through four major shifts.

## It Democratized Global Commerce

Before Stripe, a developer in a developing nation or a small town could not easily sell software service to someone in New York. The banking regulations, merchant account approvals, and setup costs were an impossible barrier.

For many small businesses and independent developers, these barriers made global commerce difficult. Stripe simplified much of that complexity. Today, a founder can launch a product online and begin selling to customers across multiple countries without spending months building payment infrastructure first.

In many ways, Stripe transformed payments into a utility that developers can plug into on demand.

## The Shift From Infrastructure to Innovation

Every hour spent building billing systems, payment gateways, and financial workflows is an hour not spent improving the product itself.

By abstracting away the payment layer, Stripe allows companies to focus their engineering resources on solving customer problems. Instead of rebuilding payment infrastructure, teams can spend more time creating products people actually want to use.

## Solving the Nightmare of Multi-Party Money

Modern internet businesses rarely move money directly from one person to another.

Marketplaces must collect payments, deduct platform fees, calculate taxes, and distribute earnings across thousands or even millions of participants.

Trying to manage this manually would require enormous operational overhead.

Stripe Connect turned these complicated financial workflows into programmable APIs, making it possible for modern marketplace businesses to operate at scale.

## Massive Fraud Protection at Scale

One of Stripe's biggest advantages comes from scale.

Because Stripe processes nearly $2 trillion in volume globally, its machine-learning model, Radar, sees fraud patterns before individual businesses do.

If a stolen credit card is used illegally on a website in Europe, Stripe instantly blocks that same card when someone tries to use it on your small app in the US.

Individual businesses cannot build that level of collective security on their own.

## Conclusion

The traditional approach to accepting payments online used to be a technical and bureaucratic roadblock that killed great ideas before they could launch.

By combining the gateway, processor, and merchant account into a single, elegant piece of software, Stripe completely removed this barrier and packaged much of that complexity behind a single platform and developer-friendly API.

As a business owner or developer, you shouldn't have to become a banking expert just to make a sale. Outsourcing your transaction infrastructure to Stripe means you stop spending your time fixing checkout bugs or fighting fraud, and start spending your time building things people actually want to buy.
`,
  },
  {
    slug: "linear-onboarding-docs-product-adoption",
    title: "What Linear’s Onboarding Docs Get Right About Product Adoption",
    date: "May 21, 2026",
    tag: "Writing",
    thumbnail: linearDocsReview,
    imageFit: "contain",
    imagePosition: "center",
    excerpt:
      "What product teams can learn from onboarding documentation that explains the product, reduces confusion, and guides users toward action.",
    content: `
I reviewed Linear’s onboarding documentation from the perspective of a casual user earlier this week, and a few things stood out to me. The documentation does a good job of not only explaining the product, but also guiding users toward adoption.

## What Worked Well

The user documentation starts with a brief overview of what the product solves. It then moves into a high-level summary and a live demo of the product experience.

This works well because it helps new users understand the product before asking them to take action.

Another strong point is the way each heading functions like a clear action path. Each section makes it easy for users to scan the page, understand what they need, and move directly to the next action. This reduces friction and improves adoption.

I also like how the onboarding flow is broken down for different user roles interacting with Linear. This matters because new users do not all approach a product from the same perspective. A founder, product manager, engineer, or operations person may each need different guidance.

The concept page is also useful because it explains Linear’s major features, how they connect, and how users can think about them in a structured way. This is important because new terminology can easily confuse users when they are learning a new product.

## What Product Teams Can Learn

Overall, the documentation is well structured. It guides users from product understanding to practical action in a smooth order, where each section builds naturally on the previous one.

This is exactly what good documentation should do. It should not only explain what a product does, but also show users the problem the product solves, how the solution works, and how they can adopt it in their own workflow.

The strongest part is the way the documentation reduces confusion. It introduces the product clearly, explains key concepts, and then moves users toward action step by step. This makes onboarding easier, especially for new users who may be learning both the product and its terminology for the first time.

## My Biggest Takeaway

Good documentation does not just inform users about a product.

It guides them from confusion to clarity, and then from clarity to action.
`,
  },
  {
    slug: "verification-tracking-system-paperless",
    title: "How I Built the Verification Tracking System Into Paperless",
    date: "April 13, 2026",
    tag: "Engineering",
    excerpt:
      "After building a tamper-proof receipt system, I realized vendors had no visibility into when their receipts were being checked. So I built a real-time verification tracking system that logs every meaningful check and turns it into actionable data.",
    content: `
## How I Built the Verification Tracking System Into Paperless

After building a fully secured system that verifies authentic receipts after they’re issued, I noticed something: vendors have no idea when their receipts are being checked.

That’s a problem.

So I built another system that tracks every verification in real time. When a receipt is checked, the vendor knows when, how often, and by whom it is being verified.

Now it’s not just about proof, it’s about visibility.

That’s where the verification tracking system comes in.

## The Problem With Just Verifying

Most receipt systems stop at "Is this receipt valid?" They return a yes or no and move on.

But I didn’t want that, because every time someone verifies a receipt, something is happening. That action itself is data, and it matters to the vendor.

- **Was this receipt verified once or fifty times?**
- **Was it verified recently, suggesting an active resale attempt?**
- **Was it verified from multiple different locations?**
That tells you something.

A receipt verified 8 times means something. A receipt verified for the first time after 3 years means something else.
Most systems ignore that. I didn’t want to throw that away.

## How I Tracked it

Every time someone clicks on the verify button on a receipt page, we log a verification event in the database:

\`\`\`prisma
model Verification {
  id          String   @id @default(cuid())
  receiptId   String
  receipt     Receipt  @relation(fields: [receiptId], references: [id])
  verifiedAt  DateTime @default(now())
  ipAddress   String?
  userAgent   String?
  purpose     String?
}
\`\`\`

Four fields: receipt reference, timestamp, IP address, and user agent. Simple. Intentional.

## How I Made It Reliable

This is where it got interesting.

The naive approach I took was to log every API hit. But I quickly discovered that it was polluting our data with noise, so I had to revert to logging only meaningful verification events.

### Next.js prefetching

Next.js was prefetching routes in the background as I was moving around the app.

So a vendor browsing their receipts list would trigger prefetch requests to the verify route, logging verifications that never actually happened.

I had to detect and skip prefetch requests:

\`\`\`ts
const isPrefetch =
  req.headers.get("purpose") === "prefetch" ||
  req.headers.get("next-router-prefetch") === "1" ||
  req.headers.get("x-middleware-prefetch") === "1" ||
  req.headers.get("accept") === "text/x-component";

if (isPrefetch) {
  // return data but don't log
}
\`\`\`

### React StrictMode double-firing

In development, React StrictMode intentionally runs effects twice to catch bugs.

This meant every verified page visit logged two verification events instead of one.

I solved it with IP-based deduplication within a 60-second window:

\`\`\`ts
const recentVerification = await prisma.verification.findFirst({
  where: {
    receiptId: receipt.id,
    ipAddress,
    verifiedAt: {
      gte: new Date(Date.now() - 60 * 1000),
    },
  },
});

if (!recentVerification) {
  await prisma.verification.create({ ... });
}
\`\`\`

If the same IP verifies the same receipt within the last minute, I don’t count it twice. One person, one verification.

## Only Log Authentic Receipts

I also moved logging to happen only after hash verification passes (I explained this system in my last blog).

There’s no value in logging failed verification attempts — they’re noise.

If a receipt is tampered with, I simply return an error without logging a verification event.

\`\`\`ts
const isAuthentic = verifyReceiptHash(hashPayload, receipt.hash);

// Only log if authentic and not a prefetch
if (isAuthentic && !isPrefetch) {
  await prisma.verification.create({ ... });
}
\`\`\`

## Surfacing the Data

On the receipts list page, each receipt shows its verification count:

\`\`\`ts
_count: { select: { verifications: true } }
\`\`\`

A small badge appears on receipts that have been verified during resale:
- **2× verified**
- **8× verified**

This is visible to the vendor at a glance.

The dashboard stats card also shows the total number of resale verifications across all receipts, a number that grows as buyers use the system to check their purchases.

## Conclusion

Verification tracking taught me that a system isn’t just about the happy path.

It’s about all the edge cases, the prefetches, the double renders, the duplicate events, that make the difference between clean data and garbage data.

It also showed me that logging the right events at the right moment is a product decision as much as a technical one.

I was not logging every hit. I was only logging every meaningful verification. That’s the difference.

And that difference is what makes the data trustworthy enough to build features on top of.
`,
  },
  {
    slug: "tamper-proof-receipts-sha256",
    title: "How I Built a Tamper-Proof Receipt System Using SHA-256",
    // thumbnail: postThumbnail,
    date: "April 09, 2026",
    tag: "Engineering",
    excerpt:
      "What started as a simple receipt feature turned into a trust system — using cryptographic hashing, deterministic normalization, and a nonce to make every receipt verifiable and tamper-evident.",
    content: `
## The Problem I Wanted to Solve

Imagine you buy a phone from a seller in Computer Village. He writes you a receipt on paper. Later you want to resell the phone. The new buyer asks:

**"How do I know this receipt is real and hasn't been changed or tampered with?"**

With paper, you can't know. Anyone can write anything on paper.

We needed a way to make a receipt that cannot be secretly changed. If anyone touches even one number on it, we would know.

## How I Solved It

### The Fingerprint Idea

Think of your fingerprint. It's unique to you. If someone tries to pretend to be you using a fake fingerprint, security systems catch them.

I gave every receipt its own digital fingerprint. Here's how:

**Step 1 — We take all the receipt data**

\`\`\`
Vendor: TechCorner Lagos
Buyer: Chidi Okonkwo
Phone: Samsung Galaxy S24 Ultra
IMEI: 358934012345678
Price: ₦850,000
VAT: ₦63,750
Total: ₦913,750
Date: 12 June 2026
\`\`\`

**Step 2 — We turn it into one long string**

We pack all that data together into one big piece of text using \`JSON.stringify\`. Like packing everything into one box.

**Step 3 — We run it through SHA-256**

SHA-256 is like a magic blender. You put data in, you get a unique string of letters and numbers out:

\`\`\`
0f8c99f72950bc0f7f91341e8e56615ce83bf13f01cf5aef47db4e9db98df2b9
\`\`\`

That 64-character string is the fingerprint of that receipt.

The magic rule of SHA-256:
- Same data in → always same fingerprint out
- Change even **one character** → completely different fingerprint

So if someone changes the price from ₦850,000 to ₦500,000, the fingerprint changes completely. We store the original fingerprint and can always check.

## But There's a Catch

The same receipt can be entered differently, and with hashing, that tiny difference changes everything. So I had to force consistency, and that's what led me to **deterministic normalization**.

## What Is Deterministic Normalization?

This is just a fancy way of saying we always arrange the data the same way before fingerprinting. No matter how the data initially looked, it's always transformed into the exact same format before hashing, both when the receipt is created and when it's verified.

\`\`\`ts
// Sort items alphabetically before hashing
items: [...payload.items].sort((a, b) => a.name.localeCompare(b.name));

// Round all numbers to 2 decimal places
subtotal: Number(payload.subtotal.toFixed(2));
\`\`\`

No matter what order items were entered, we always process the data the same way. Same structure → same fingerprint. Consistent. Reliable.

That fixed one problem — but exposed another. What happens when two different receipts have the exact same data? I needed a way to make each receipt unique, even when the data is identical. That’s where a nonce comes in.

## What Is a Nonce?

**Nonce** means *Number Used Once*. It's a random value we generate for each receipt and include before hashing.

\`\`\`ts
export function generateNonce(): string {
  return crypto.randomBytes(16).toString("hex");
}
\`\`\`

So instead of hashing just the receipt data:

\`\`\`
Faith's receipt   + random value A → fingerprint A
Chidi's receipt   + random value B → fingerprint B
\`\`\`

Same data, different nonce → different fingerprints. Problem solved.

We store the nonce in the database alongside the receipt so we can always recreate the exact same fingerprint later during verification.

## The Verification Flow

When someone visits \`/verify/RCT-2026-XXXXXX\`, here's exactly what happens:

\`\`\`
1. Fetch the receipt from the database
2. Fetch the stored nonce from the database
3. Rebuild the exact same data payload
   (same sorting, same rounding, same nonce)
4. Run it through SHA-256 again
5. Compare the NEW fingerprint with the originally STORED fingerprint
6. Match?    → AUTHENTIC 
   No match? → TAMPERED
\`\`\`

\`\`\`ts
export function verifyReceiptHash(payload: HashPayload, storedHash: string): boolean {
  const computed = generateReceiptHash(payload);
  return crypto.timingSafeEqual(
    Buffer.from(computed, "hex"),
    Buffer.from(storedHash, "hex")
  );
}
\`\`\`

Instead of using a normal \`===\` comparison, I used \`timingSafeEqual\`.

With a regular comparison, the system checks character by character and stops as soon as something doesn't match — meaning the time it takes can **leak information** about how much of the hash is correct. \`timingSafeEqual\` compares the entire value every time, regardless of whether it matches or not. Same time, every time. No information leaks.

## Conclusion

At a high level, the system is simple.

**At issue time:**
\`\`\`
receipt data + nonce → hashed → stored as a fingerprint
\`\`\`

**At verification:**
\`\`\`
recompute fingerprint → compare to original
match → authentic | no match → tampered
\`\`\`

What started as a simple receipt feature turned into something deeper. Instead of just displaying data, I ended up building a system where data can't be silently altered, trust is based on cryptography not assumptions, and anyone can verify a receipt without needing special access.

It's no longer just a receipt. It's a trust system, wrapped in a product people can actually use.
    `,
  },
  {
    slug: "lazy-loading-react-components",
    title: "Lazy Loading React Components with React.lazy",
    // thumbnail: postThumbnail3,
    date: "February 15, 2023",
    tag: "React",
    excerpt:
      "Learn how to optimize React applications by reducing bundle size and improving performance with React.lazy and code splitting.",
    content: `
## Introduction

Large React applications are made up of many components, methods, and third-party libraries. If all of this code is shipped to the user at once, your app's performance can take a serious hit. To prevent this, we use **code splitting**, which allows us to load only what the user needs at the moment.


## What is Code Splitting?

React uses tools like **Webpack** and **Babel** to bundle your application into JavaScript files. By default, React bundles everything into one large file. As your app grows, this file gets bigger, slowing down load times.

Code splitting solves this problem by creating multiple chunks of JavaScript and only loading them as needed. On the initial load, the browser only downloads the main chunk. Additional code is loaded on demand, as the user navigates through your app.

For example, if your app has multiple pages:
- The initial bundle loads the main page.
- Clicking a different route dynamically loads only the JavaScript for that page.


## How to Implement React Lazy Loading

React provides **React.lazy** for lazy loading components. Here’s how you do it:

### Step 1: Change your import to React.lazy

**Traditional import:**
\`\`\`javascript
import Images from './Images';

const App = () => (
  <div>
    <Images />
  </div>
);
\`\`\`

**Lazy load import:**
\`\`\`javascript
import React from 'react';

const Images = React.lazy(() => import('./Images'));

const App = () => (
  <div>
    <Images />
  </div>
);
\`\`\`

> **Note:** React.lazy only supports default exports. Named exports will not work.


### Step 2: Wrap the Component in React Suspense

Lazy-loaded components need a **Suspense** wrapper. This shows a fallback while the component is loading:

\`\`\`javascript
import React, { Suspense } from 'react';

const Images = React.lazy(() => import('./Images'));

const App = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Images />
    </Suspense>
  );
};
\`\`\`


## Lazy Loading Routes

You can also lazy load **entire pages** to optimize bundle size per route:

\`\`\`javascript
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  </Router>
);
\`\`\`


## Error Handling with Error Boundaries

Sometimes lazy-loaded components fail due to network issues or runtime errors. Use **Error Boundaries** to catch these errors and show a fallback UI.

**Class-based Error Boundary:**
\`\`\`javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}
\`\`\`

**Simpler approach using react-error-boundary:**
\`\`\`bash
npm i react-error-boundary
import { ErrorBoundary } from 'react-error-boundary';
import Images from './Images';

function OurFallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary FallbackComponent={OurFallbackComponent}>
      <Images />
    </ErrorBoundary>
  );
}
\`\`\`
## Conclusion

React.lazy and code splitting make it easy to **optimize bundle size** and **improve app performance**. Lazy-loading components and routes ensures users only download what they need, improving load times and overall experience.

Start implementing lazy loading in your app today—it’s simple, powerful, and greatly enhances user experience.

`,
  },
];
