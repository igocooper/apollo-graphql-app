import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `
    type Query {
        hi: String,
        age: Int,
        greet: String
    }
`;

const resolvers = {
    Query: {
        hi() {
            return 'Hi level up tuts'
        },
        greet() {
            return 'Hi there iGoCooper'
        },
        age() {
            return 26
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });