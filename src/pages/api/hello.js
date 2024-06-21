// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// Any file inside the folder pages/api is mapped to /api/* and will be treated as an API endpoint instead of a page.
//  They are server-side only bundles and won't increase your client-side bundle size.

