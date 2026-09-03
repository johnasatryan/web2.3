/**
 * demo.js — live-coding script
 * ------------------------------------------------------------------
 * Reveal this file to students one STAGE at a time. Everything is
 * already written below so you don't have to type live and risk a
 * typo mid-class — just uncomment/talk through one block at a time,
 * running `node demo.js` again after each stage.
 * ------------------------------------------------------------------
 */

const MiniApp = require('./mini-express');
const app = new MiniApp();

// ============================================================
// STAGE 1 — a bare route, no middleware at all
// Talking point: "this alone already looks like Express."
// ============================================================
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ message: 'Hello from mini-express!' }));
});


// ============================================================
// STAGE 2 — app.use(): a middleware that runs before every route
// Talking point: "use() just pushes onto the SAME array as get().
// Order of these calls in the file IS the order they run."
// ============================================================
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  res.setHeader('Content-Type', 'application/json');
  next(); // <- comment this out live to show the request just hangs
});


// ============================================================
// STAGE 3 — a body parser, written by hand
// Talking point: "this is *exactly* what express.json() does for
// you. Nothing here is special — it's just reading data events."
// ============================================================
app.use((req, res, next) => {
  if (req.method !== 'POST') return next();
  let raw = '';
  req.on('data', (chunk) => (raw += chunk));
  req.on('end', () => {
    try {
      req.body = raw ? JSON.parse(raw) : {};
    } catch {
      req.body = {};
    }
    next();
  });
});

app.post('/echo', (req, res) => {
  res.end(JSON.stringify({ youSent: req.body }));
});


// ============================================================
// STAGE 4 — route-scoped middleware (auth-style)
// Talking point: "a middleware doesn't have to apply to every
// route — pass it only to the routes that need it."
// ============================================================
function requireToken(req, res, next) {
  if (req.headers['x-demo-token'] !== 'letmein') {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: 'Unauthorized' }));
  }
  next();
}

app.get('/secret', requireToken, (req, res) => {
  res.end(JSON.stringify({ message: 'top secret data' }));
});


// ============================================================
// STAGE 5 — errors: a route that throws, and an error-handling
// middleware (4 params) that catches it
// Talking point: "next(err) — or even just throwing — skips
// straight past every normal middleware to the nearest one with
// 4 parameters. That's the whole rule."
// ============================================================
app.get('/boom', (req, res) => {
  throw new Error('Something exploded');
});

app.use((err, req, res, next) => {
  console.error('Caught by error handler:', err.message);
  res.statusCode = 500;
  res.end(JSON.stringify({ error: err.message }));
});


app.listen(3000, () => {
  console.log('mini-express demo listening on http://localhost:3000');
});
