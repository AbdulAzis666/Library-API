const bcrypt = require('bcrypt');
const { userModel } = require('../models');
//const { generateAccessToken } = require('../utils');

const register = async (
    name, 
    email, 
    password, 
    date_of_birth
) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await userModel.createUser(
        name, 
        email, 
        hashedPassword, 
        date_of_birth, 
        null
    );
    return newUser;
};

const login = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    if (!user) {
        console.log('invalid email');

        const error = new Error('Invalid credentials');
        error.statusCode = 401;
        throw error;
    }
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
        console.log('invalid password');

        const error = new Error('Invalid credentials');
        error.statusCode = 401;
        throw error;
    }
    // const token = generateAccessToken(user.id, user.username);
    return user;
};

const updateUser = async (user_id, updates) => {
    const user = await userModel.getUserById(user_id);
    if (!user) {
        const error = new Error('User not found');
        error.statusCode = 404;
        throw error;
    }

    const updatedUser = await userModel.updateUser(user_id, updates);
    return updatedUser;
};

module.exports = {
    register,
    login,
    updateUser,
};
