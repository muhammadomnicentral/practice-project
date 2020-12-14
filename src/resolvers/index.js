const Member = require('../models/Member');

async function membersFromDB(){
  members = await Member.findAll()
  .then((member) => member)
  .catch((err) => console.log(err));
}

membersFromDB();

const resolvers = {
  Query: {
    hello() {
      return "this is my first query!";
    },
    members: () => members,
    found(parent, args, ctx, info) {
      if (args.name) {
        return members.some((member) => member.name === args.name);
      }
    },
    search(parent, args, ctx, info) {
      if (args.name && args.id) {
        return members.find((member) => (member.name === args.name && member.id === args.id));
      }
      if (args.name || args.id) {
        return members.find((member) => (member.name === args.name || member.id === args.id));
      }
    },
  },
  // Mutation: {
  //   addBook(title, author): Book
  // }
};

module.exports = resolvers;
