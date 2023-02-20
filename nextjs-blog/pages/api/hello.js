/*
  - API Routes let you create an API endpoint inside a Next.js app.
  - They can be deployed as Serverless Functions (also known as Lambdas).
*/

/* 
 req = HTTP incoming message, res = HTTP server response
 --> req is an instance of http.IncomingMessage, plus some pre-built middlewares.
 --> res is an instance of http.ServerResponse, plus some helper functions.
*/
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}