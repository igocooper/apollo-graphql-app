export default {
    Query: {
        user(obj, args, { user, userId}) {
            return user || {};
        }
    },
    User: {
        email: user => user.emails[0].address
    }
};