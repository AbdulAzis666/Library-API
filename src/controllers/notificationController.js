const { notificationService } = require('../services');

// Fungsi untuk membuat notifikasi
const create = async (req, res) => {
    const { userId, notificationType, message, timeOfDay } = req.body;
    try {
        const newNotification = await notificationService.createNotification(userId, notificationType, message, timeOfDay);
        res.status(201).json({
            status: 'success',
            message: 'Notification created',
            data: newNotification,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to create notification',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan semua notifikasi berdasarkan user_id
const getByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const notifications = await notificationService.getNotificationsByUserId(userId);
        res.status(200).json({
            status: 'success',
            data: notifications,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve notifications',
            error: error.message,
        });
    }
};

// Fungsi untuk mengupdate notifikasi
const update = async (req, res) => {
    const { id } = req.params; // Ambil id dari parameter
    const { userId, notificationType, message, timeOfDay } = req.body; // Ambil data dari body
    try {
        const updatedNotification = await notificationService.updateNotification(id, userId, notificationType, message, timeOfDay);
        res.status(200).json({
            status: 'success',
            message: 'Notification updated',
            data: updatedNotification,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to update notification',
            error: error.message,
        });
    }
};

// Fungsi untuk menghapus notifikasi
const remove = async (req, res) => {
    const { id } = req.params; // Ambil id dari parameter
    const { userId } = req.body; // Ambil userId dari body
    try {
        const deletedNotification = await notificationService.deleteNotification(id, userId);
        res.status(200).json({
            status: 'success',
            message: 'Notification deleted',
            data: deletedNotification,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to delete notification',
            error: error.message,
        });
    }
};

module.exports = {
    create,
    getByUserId,
    update,
    remove,
}; 