// src/data/blogData.js
// Add, edit, or remove posts here. The rest of the blog updates automatically.

export const blogPosts = [
  {
    slug: "tamper-proof-receipts-sha256",
    title: "How I Built a Tamper-Proof Receipt System Using SHA-256",
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
];
