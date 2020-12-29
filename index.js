require('dotenv').config();

const server = require('./api/server');
const port = process.env.PORT || 1234;

process.on('uncaughtException', (err) => {
  console.error(`${(new Date()).toUTCString()} uncaughtException:`, err);
  process.exit(0);
});

process.on('unhandledRejection', (err) => {
  console.error(`${(new Date()).toUTCString()} unhandledRejection:`, err);
});


server.listen({ port }, () => {
  console.log(`GraphQL Server ready at http://localhost:${port}/`);
});
