const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models");
const { signToken } = require("../utils/auth");


const userResolvers = {
    Query: {
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
        Mutation: {
            addUser: async (parent, { userName, email, password }) => {
                const user = await User.create({ userName, email, password });
                const token = signToken(user);
                return { token, user };
            },
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new AuthenticationError('No user with this email found');
                }
                const correctPw = await user.isCorrectPassword(password);
                if (!correctPw) {
                    throw new AuthenticationError('Incorrect password!');
                }
                const token = signToken(user);
                return { token, user };
            },
        }
    }
};    
module.exports = userResolvers;