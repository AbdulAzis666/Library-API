const { userService } = require('../services');

const register = async (req, res) => {
    const { name, email, password, date_of_birth } = req.body;
    try {
        const newUser = await userService.register(name, email, password, date_of_birth);
        res.status(201).json({
            status: 'success',
            message: 'register',
            data: newUser,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'register',
            error: error.message,
        });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.login(email, password); // Menghapus penggunaan token
        res.status(200).json({
            status: 'success',
            message: 'Login',
            data: { user },
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Login',
            error: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    const { user_id } = req.params;
    const updates = req.body; // Ambil data yang ingin diperbarui
    try {
        const updatedUser = await userService.updateUser(user_id, updates);
        res.status(200).json({
            status: 'success',
            message: 'User updated successfully',
            data: updatedUser,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to update user',
            error: error.message,
        });
    }
};

module.exports = {
    register,
    login,
    updateUser,
};