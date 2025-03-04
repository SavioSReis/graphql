import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';

function startServer({ typeDefs, resolvers }) {
    mongoose.connect('mongodb://localhost:27017/graphql')

    const server = new ApolloServer({ typeDefs, resolvers });
    server.listen().then(({ url }) => console.log(`🚀 Server ready at ${url}`));
}

export default startServer;
