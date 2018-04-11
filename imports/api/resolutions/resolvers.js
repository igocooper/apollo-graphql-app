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
            // console.log(name);
            // insert data and get it id into variable
            const resolutionId = Resolutions.insert({
                name: name
            });
            // return Resolution found by that id
            return Resolutions.findOne(resolutionId);
        },
        editResolution(obj, { query, name }, context) {
            console.log(`${query} will change into ${name}`);
            // update data 
            const operationStatus = Resolutions.update(
                { "name" : query },
                { $set: { "name" : name } }
            );
            return operationStatus;
        },
        removeResolution(obj, {name}, context) {
            console.log(`removed entry with name: ${name}`);
            // delete data 
            const operationStatus = Resolutions.remove(
                { "name" : name }, true
            );
            return operationStatus;
        }
    }
};