const { mergeTypes } = require("merge-graphql-schemas");

const userType = require("./userType");

const types = [
    userType.default,
];


exports.default = mergeTypes(types);