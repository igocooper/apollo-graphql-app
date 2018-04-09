import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';

import ResolutionsSchema from '../../api/resolutions/Resolutions.graphql';

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
        },
        resolutions() {
            return [
                {
                    _id: "asfsagasgasg",
                    name: "Get stuff done 💰"
                },
                {
                    _id: "ddddddLo",
                    name: "Lose some weight 🏋🏾"
                },

            ]
        }
    }
};

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema });