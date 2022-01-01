// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// API Handler Callback function
//proxy another api or enpoint

export default function handler(req, res) {
  // this resource init many times
  // these are cold start function
  res.status(200).json({
    name: "Welcome to Advanced Front end dev",
    request: JSON.stringify(req.cookies),
  });
}

//   java api <---- Next api (simplify this response)  <----- Next application
//   true backend          (facede/frontend for) backend          Front end

// auth service we can independently call from backend
// AUTH SERVICE(GENERAL SERVICE)     <-----  NEXT APIS LOGIN(MY APP)   <------- actual front end login(email & pass)

// cookie parsing  & body parsing
