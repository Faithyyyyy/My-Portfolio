// src/data/blogData.js
// Add, edit, or remove posts here. The rest of the blog updates automatically.
import postThumbnail from "../assets/post 1.png";
import postThumbnail3 from "../assets/lazy_loading.webp";

export const blogPosts = [
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
