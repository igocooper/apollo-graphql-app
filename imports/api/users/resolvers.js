export default {
    Query: {
        user(obj, args, { user, userId}) {
            return user || {};
        }
    }
};