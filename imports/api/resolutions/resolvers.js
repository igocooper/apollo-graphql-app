import Resolutions from './Resolutions';

// dirty way to insert some thing into Mongo Collection quickly
// Resolutions.insert({
//     name: 'Lose Some Weight, Bro 🏋🏾'
// })

export default {
    Query: {
        resolutions() {
            return Resolutions.find({}).fetch();
        }
    },

    Mutation: {
        createResolution(obj, args, context) {
            const { name } = args;
            // insert data and get it id into variable
            const resolutionId =  Resolutions.insert({
                name: name
            });
            // return Resolution found by that id
            return Resolutions.findOne(resolutionId);
        }
    }
};