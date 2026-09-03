/**
 * mini-express.js
 * ------------------------------------------------------------------
 * A from-scratch, ~70-line reimplementation of Express's core idea:
 *   - app.use(fn)              register middleware
 *   - app.get/post/...(path,fn) register a route
 *   - (req, res, next)         every handler gets this signature
 *   - next(err)                skips to the nearest error handler
 *
 * The point of this file is NOT to be a real framework. It's to make
 * the "magic" behind app.use() visible: it's just an array, walked
 * one item at a time, where each item decides whether to call the
 * next one.
 * ------------------------------------------------------------------
 */

const http = require('http');

class MiniApp {
  constructor() {
    // This IS the middleware pipeline. app.use() and app.get() both
    // just push onto this one array, in the order they're called.
    this.stack = [];
  }

  // app.use(fn) or app.use(path, fn)
  use(pathOrFn, maybeFn) {
    const path = typeof pathOrFn === 'string' ? pathOrFn : '/';
    const handler = typeof pathOrFn === 'string' ? maybeFn : pathOrFn;
    this.stack.push({ method: null, path, handler }); // method: null = runs for any method
    return this;
  }

  // app.get(path, ...handlers) / app.post(...) / etc.
  _route(method, path, ...handlers) {
    for (const handler of handlers) {
      this.stack.push({ method, path, handler });
    }
    return this;
  }
  get(path, ...h)    { return this._route('GET', path, ...h); }
  post(path, ...h)   { return this._route('POST', path, ...h); }
  put(path, ...h)    { return this._route('PUT', path, ...h); }
  delete(path, ...h) { return this._route('DELETE', path, ...h); }

  // Does this one layer of the stack apply to this request?
  _matches(layer, req) {
    const urlPath = req.url.split('?')[0];
    if (layer.method) {
      // a route: method AND exact path must match
      return layer.method === req.method && urlPath === layer.path;
    }
    // a middleware: any method, path is a prefix ('/' matches everything)
    if (layer.path === '/') return true;
    return urlPath === layer.path || urlPath.startsWith(layer.path + '/');
  }

  // This is the whole engine. Everything else is bookkeeping.
  handle(req, res) {
    let i = 0;
    const stack = this.stack;

    const next = (err) => {
      const layer = stack[i++];

      if (!layer) {
        // fell off the end of the stack with nothing handling it
        res.statusCode = err ? 500 : 404;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({ error: err ? err.message : 'Not found' }));
      }

      // an error middleware is recognized purely by having 4 params
      const isErrorHandler = layer.handler.length === 4;

      if (err) {
        // an error is "in flight" — skip everything except error handlers
        return isErrorHandler ? layer.handler(err, req, res, next) : next(err);
      }
      if (isErrorHandler) return next();          // no error yet, skip error handlers
      if (!this._matches(layer, req)) return next(); // wrong path/method, skip

      try {
        layer.handler(req, res, next);
      } catch (thrown) {
        next(thrown); // a synchronous throw becomes next(err) automatically
      }
    };

    next();
  }

  listen(port, cb) {
    return http.createServer((req, res) => this.handle(req, res)).listen(port, cb);
  }
}

module.exports = MiniApp;
