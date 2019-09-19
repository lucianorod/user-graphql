const { mergeResolvers } = require("merge-graphql-schemas");

const userResolver = require("./userResolver");

const resolvers = [
    userResolver.default,
];

exports.default = mergeResolvers(resolvers);