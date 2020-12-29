const { gql } = require("apollo-server-express");

module.exports = gql`
  type Mem {
    id: ID!
    name: String!
    email: String
    status: String
    createdAt: String
    updatedAt: String
  }
  extend type Query {
    hello: String!
    getAllMems: [Mem!]
    findMem(name: String): Boolean!
    getSingleMem(name: String, id: Int): Mem # search single member
  }
  extend type Mutation {
    createMem(
      name: String!
      email: String
      status: String
    ): CreateMemResponse
  }
# createMemResponse is just for practice, you can simply use Mem object to return 
  type CreateMemResponse {
    id: ID!
    name: String!
    email: String
    status: String
    createdAt: String
    updatedAt: String
  }
`;