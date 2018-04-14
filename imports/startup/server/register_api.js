import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers.js';

import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers.js';

//hi

const typeDefs = [
    ResolutionsSchema,
    UsersSchema
];


// combine resolvers
const resolvers = merge(
    ResolutionsResolvers,
    UsersResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });