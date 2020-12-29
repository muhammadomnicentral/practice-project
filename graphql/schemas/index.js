const { gql } = require("apollo-server-express");
const memType = require("./member");

const rootType = gql`
  type Query {
    root: String
  }
  type Mutation {
    root: String
  }
`;
module.exports = [rootType, memType];
