const { mealRecordModel } = require('../models');

const createMealRecord = async (userId, foodName, notes) => {
    return await mealRecordModel.createMealRecord(userId, foodName, notes);
};

const getMealRecordsByUserId = async (userId) => {
    return await mealRecordModel.getMealRecordsByUserId(userId);
};

module.exports = {
    createMealRecord,
    getMealRecordsByUserId,
}; 