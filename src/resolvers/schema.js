const { gql } = require("apollo-server")

const typeDefs = gql`
  type Member {
    id: ID!
    name: String!
    email: String
    status: String
  }
  type Query {
    hello: String!
    members: [Member]
    found(name: String): Boolean!
    search(name: String, id: Int): Member # search single member
  }
`;

module.exports = typeDefs;