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
    }
};