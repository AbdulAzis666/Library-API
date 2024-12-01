const pool = require('../configs/database');

const createMealRecord = async (userId, foodName, notes) => {
    const result = await pool.query(
        'INSERT INTO meal_records (user_id, food_name, notes) VALUES ($1, $2, $3) RETURNING *',
        [userId, foodName, notes]
    );
    return result.rows[0];
};

const getMealRecordsByUserId = async (userId) => {
    const result = await pool.query(
        'SELECT * FROM meal_records WHERE user_id = $1 ORDER BY created_at ASC',
        [userId]
    );
    return result.rows;
};

module.exports = {
    createMealRecord,
    getMealRecordsByUserId,
};