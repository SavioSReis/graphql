import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
    type User {
        _id: ID!
        name: String!
        email: String
        phone_number: String!
        balance: Float!
        is_active: Boolean!
    }

    type Post {
        _id: ID!
        title: String!
        content: String
        author: User!
    }

    type Query {
        hello: String
        getUsers: [User!]!
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        users: () => [
            {
                _id: String(Math.random()),
                name: 'John Doe',
                email: null,
                phone_number: '+1234567890',
                balance: Math.random() * 1000,
                is_active: true
            },
            {
                _id: String(Math.random()),
                name: 'Jane Doe',
                email: 'jane@dev.com',
                phone_number: '+0987654321',
                balance: Math.random() * 1000,
                is_active: false
            },
        ]
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server ready at ${url}`));
