const { Mem } = require("../../database/models");

module.exports = {
  Mutation: {
    async createMem(parent, args, ctx, info) {
      if (!args.name) {
        throw new Error("You must enter name to create a post");
      }
      return Mem.create({
        name: args.name,
        email: args.email,
        status: args.status,
      });
    },
  },
  Query: {
    hello() {
      return "helllo";
    },
    async getAllMems() {
      return Mem.findAll();
    },
    async findMem(parent, args, ctx, info) {
      return Mem.findOne({ where: { name: args.name } }).then((member) => {
        if (member) return true;
        else return false;
      });
    },
    async getSingleMem(parent, args, ctx, info) {
      if (args.name && args.id)
        return Mem.findOne({ where: { id: args.id, name: args.name } });
      if (args.name || args.id)
        return args.name
          ? Mem.findOne({ where: { name: args.name } })
          : Mem.findOne({ where: { id: args.id } });
    },
  },
};
