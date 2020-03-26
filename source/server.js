import app from './app';
import env from './env';

// FIXME: This will eventually become the default behavior in Node.js. When that happens, the line
// below can be removed.
// TODO: figure out if this is still the case.
process.on('unhandledRejection', error => { throw error; });

(async () => {
  app.listen(env.PORT);
  console.log(`Mixtape Service started on port ${ env.PORT }!`);
})();
