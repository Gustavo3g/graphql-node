const User = require('./User');

module.exports = {
    Query: {
        users: () => User.find(),
        user: (_, { id }) => User.findById(id), 

    },

    Mutation: {
        createUser: (__, { name, email }) => User.create({ name, email })
    }
}