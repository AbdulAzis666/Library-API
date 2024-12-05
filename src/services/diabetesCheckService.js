const { diabetesCheckModel } = require('../models');

// Fungsi untuk membuat atau mengupdate data diabetes check
const upsertDiabetesCheck = async (userId, data) => {
    return await diabetesCheckModel.upsertDiabetesCheck(userId, data);
};

// Fungsi untuk mendapatkan data diabetes check berdasarkan user_id
const getDiabetesCheckByUserId = async (userId) => {
    return await diabetesCheckModel.getDiabetesCheckByUserId(userId);
};

module.exports = {
    upsertDiabetesCheck,
    getDiabetesCheckByUserId,
}; 