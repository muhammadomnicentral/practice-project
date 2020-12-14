const express = require("express");
const logger_middleware = require("./src/middlewares/logger");
//const db = require("./models/database");
//const db = require("./src/config/database");
const { ApolloServer, gql } = require("apollo-server");
const typeDefs = require("./src/resolvers/schema");
const resolvers = require("./src/resolvers/index");
const app = express();

//middlewares
app.use(logger_middleware);
app.use(express.json()); // to handle raw json data
app.use(express.urlencoded({ extended: false })); // for form submission and extended: false to handle url encoded data


const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`GraphQL Server ready at ${url}`);
});

app.use("/", require("./src/routes/helloworld"));
app.use("/members/", require("./src/routes/member"));

const PORT = process.env.PORT || 1234;

app.listen(PORT, () => console.log(`Server is Listening at ${PORT}`));
