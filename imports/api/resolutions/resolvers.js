import Resolutions from './Resolutions';

// dirty way to insert some thing into Mongo Collection quickly
// Resolutions.insert({
//     name: 'Lose Some Weight, Bro 🏋🏾'
// })

export default {
    Query: {
        resolutions(obj, args, { user, userId}) {
            return Resolutions.find({
                userId
            }).fetch();
        }
    },

    Mutation: {
        createResolution(obj, args, context) {
            const { name } = args;
            const { userId } = context;
            // insert data and get it id into variable
            const resolutionId =  Resolutions.insert({
                name: name,
                userId
            });
            // return Resolution found by that id
            return Resolutions.findOne(resolutionId);
        }
    }
};