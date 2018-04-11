import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers.js';
// hi

const testSchema = `
type Query {
    hi: String,
    age: Int,
    greet: String,
    resolutions: [Resolution]
}
`

const typeDefs = [
    testSchema,
    ResolutionsSchema
];

const testResolvers = {
    Query: {
        hi() {
            return 'Hi level up tuts'
        }
    }
};

// combine resolvers
const resolvers = merge(
    testResolvers,
    ResolutionsResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });