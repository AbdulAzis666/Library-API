const pool = require('../configs/database');

// Fungsi untuk membuat notifikasi
const createNotification = async (userId, notificationType, message, timeOfDay) => {
    const result = await pool.query(
        `INSERT INTO notifications (user_id, notification_type, message, time_of_day) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [userId, notificationType, message, JSON.stringify(timeOfDay)]
    );
    return result.rows[0];
};

// Fungsi untuk mendapatkan semua notifikasi berdasarkan user_id
const getNotificationsByUserId = async (userId) => {
    const result = await pool.query(
        `SELECT * FROM notifications WHERE user_id = $1 ORDER BY id ASC`,
        [userId]
    );
    return result.rows;
};

// Fungsi untuk mengupdate notifikasi
const updateNotification = async (id, userId, notificationType, message, timeOfDay) => {
    const result = await pool.query(
        `UPDATE notifications 
        SET notification_type = $1, message = $2, time_of_day = $3 
        WHERE id = $4 AND user_id = $5 
        RETURNING *`,
        [notificationType, message, JSON.stringify(timeOfDay), id, userId]
    );
    return result.rows[0];
};

// Fungsi untuk menghapus notifikasi
const deleteNotification = async (id, userId) => {
    const result = await pool.query(
        `DELETE FROM notifications 
        WHERE id = $1 AND user_id = $2 
        RETURNING *`,
        [id, userId]
    );
    return result.rows[0]; // Mengembalikan data yang dihapus
};

module.exports = {
    createNotification,
    getNotificationsByUserId,
    updateNotification,
    deleteNotification,
}; 