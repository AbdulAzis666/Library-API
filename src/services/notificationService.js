const { notificationModel } = require('../models');

// Fungsi untuk membuat notifikasi
const createNotification = async (userId, notificationType, message, timeOfDay) => {
    return await notificationModel.createNotification(userId, notificationType, message, timeOfDay);
};

// Fungsi untuk mendapatkan semua notifikasi berdasarkan user_id
const getNotificationsByUserId = async (userId) => {
    return await notificationModel.getNotificationsByUserId(userId);
};

// Fungsi untuk mengupdate notifikasi
const updateNotification = async (id, userId, notificationType, message, timeOfDay) => {
    return await notificationModel.updateNotification(id, userId, notificationType, message, timeOfDay);
};

// Fungsi untuk menghapus notifikasi
const deleteNotification = async (id, userId) => {
    return await notificationModel.deleteNotification(id, userId);
};

module.exports = {
    createNotification,
    getNotificationsByUserId,
    updateNotification,
    deleteNotification,
}; 