// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// API Handler Callback function
export default function handler(req, res) {
  const { query } = req;
  res.status(200).json({
    name: "Welcome to Advanced Front end dev",
    request: JSON.stringify(query),
  });
}
