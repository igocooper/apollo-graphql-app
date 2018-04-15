import Goals from './goals';

export default {
    Mutation: {
        createGoal(obj, args, context) {
            const { name, resolutionId } = args;
            // insert data and get it id into variable
            const goalId =  Goals.insert({
                name,
                resolutionId,
                completed: false
            });
            // return Resolution found by that id
            return Goals.findOne(goalId);
        },
        toggleGoal(obj, { _id }) {
            const goal = Goals.findOne(_id);
            Goals.update(_id, {
                $set: {
                    completed: !goal.completed
                }
            });
            return Goals.findOne(goal._id);
        }
    }
};