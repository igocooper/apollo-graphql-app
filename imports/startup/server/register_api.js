import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers.js';

import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers.js';

//hi

const testSchema = `
type Query {
    hi: String,
    resolutions: [Resolution],
    user: User
}
`

const typeDefs = [
    testSchema,
    ResolutionsSchema,
    UsersSchema
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
    ResolutionsResolvers,
    UsersResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });