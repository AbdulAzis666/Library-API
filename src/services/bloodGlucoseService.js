const { bloodGlucoseModel } = require('../models');

const createBloodGlucose = async (userId, glucoseValue, testType, testDate, testTime) => {
    return await bloodGlucoseModel.createBloodGlucose(userId, glucoseValue, testType, testDate, testTime);
};

// Fungsi untuk mendapatkan data kadar glukosa hari ini
const getTodayBloodGlucose = async (userId) => {
    return await bloodGlucoseModel.getTodayBloodGlucose(userId);
};

const getWeeklyBloodGlucose = async (userId) => {
    return await bloodGlucoseModel.getWeeklyBloodGlucose(userId);
};

const getMonthlyBloodGlucose = async (userId) => {
    return await bloodGlucoseModel.getMonthlyBloodGlucose(userId);
};

// Fungsi untuk mendapatkan semua data kadar glukosa berdasarkan user_id
const getAllBloodGlucoseByUserId = async (userId) => {
    return await bloodGlucoseModel.getAllBloodGlucoseByUserId(userId);
};

// Fungsi untuk mengupdate catatan kadar glukosa
const updateBloodGlucose = async (id, userId, glucoseValue, testType, testDate, testTime) => {
    return await bloodGlucoseModel.updateBloodGlucose(id, userId, glucoseValue, testType, testDate, testTime);
};

// Fungsi untuk menghapus catatan kadar glukosa
const deleteBloodGlucose = async (id, userId) => {
    return await bloodGlucoseModel.deleteBloodGlucose(id, userId);
};

module.exports = {
    createBloodGlucose,
    getTodayBloodGlucose,
    getWeeklyBloodGlucose,
    getMonthlyBloodGlucose,
    getAllBloodGlucoseByUserId,
    updateBloodGlucose,
    deleteBloodGlucose,
};