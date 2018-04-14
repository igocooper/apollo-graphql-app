import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';

import GoalsSchema from '../../api/goals/Goal.graphql';
import GoalsResolvers from '../../api/goals/resolvers.js';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';
import ResolutionsResolvers from '../../api/resolutions/resolvers.js';

import UsersSchema from '../../api/users/User.graphql';
import UsersResolvers from '../../api/users/resolvers.js';

//hisssss


const typeDefs = [
    ResolutionsSchema,
    UsersSchema,
    GoalsSchema
];


// combine resolvers
const resolvers = merge(
    ResolutionsResolvers,
    UsersResolvers,
    GoalsResolvers
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });