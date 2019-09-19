const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const typeDefs = require('./graphql/types/index');
const rootValue = require('./graphql/resolvers/index');

const schema = buildSchema(typeDefs.default);
const resolvers = rootValue.default;


const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true,
}));

app.listen(3000, () => console.log('Express GraphQL Server Now Running On localhost:3000/graphql'));