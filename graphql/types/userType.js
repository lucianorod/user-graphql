exports.default = `
    type User {
        id: ID
        name: String
        repo: String
        age: Int
    }

    type Query {
        user(id: ID!): User
        users: [User]
    }
    
    type Mutation {
        createUser(name: String!, repo: String!, age: Int!): User
    }
`;