const { GraphQLServer } = require('graphql-yoga');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const db = require('./db');

function createServer() {
  return new GraphQLServer({
    typeDefs: 'src/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolverType: false
    },
    context: req => ({ ...req, db }),
  });
}

const opts = {
  port: 4000,
  cors: {
    origin: [""]
  }
};

module.exports = createServer;
