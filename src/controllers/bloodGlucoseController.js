const { bloodGlucoseService } = require('../services');

const create = async (req, res) => {
    const { userId, glucoseValue, testType, testDate, testTime } = req.body; // Ambil data dari body
    try {
        const newBloodGlucose = await bloodGlucoseService.createBloodGlucose(userId, glucoseValue, testType, testDate, testTime);
        res.status(201).json({
            status: 'success',
            message: 'Blood glucose data created',
            data: newBloodGlucose,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to create blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan data kadar glukosa hari ini
const getToday = async (req, res) => {
    const { userId } = req.params; // Ambil userId dari parameter
    try {
        const data = await bloodGlucoseService.getTodayBloodGlucose(userId);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve today\'s blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan data kadar glukosa dalam satu minggu
const getWeekly = async (req, res) => {
    const { userId } = req.params; // Ambil userId dari parameter
    try {
        const data = await bloodGlucoseService.getWeeklyBloodGlucose(userId);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve weekly blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan data kadar glukosa dalam satu bulan
const getMonthly = async (req, res) => {
    const { userId } = req.params; // Ambil userId dari parameter
    try {
        const data = await bloodGlucoseService.getMonthlyBloodGlucose(userId);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve monthly blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan semua data kadar glukosa berdasarkan user_id
const getAllByUserId = async (req, res) => {
    const { userId } = req.params; // Ambil userId dari parameter
    try {
        const data = await bloodGlucoseService.getAllBloodGlucoseByUserId(userId);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk mengupdate catatan kadar glukosa
const update = async (req, res) => {
    const { id } = req.params; // Ambil id dari parameter
    const { userId, glucoseValue, testType, testDate, testTime } = req.body; // Ambil data dari body
    try {
        const updatedBloodGlucose = await bloodGlucoseService.updateBloodGlucose(id, userId, glucoseValue, testType, testDate, testTime);
        res.status(200).json({
            status: 'success',
            message: 'Blood glucose data updated',
            data: updatedBloodGlucose,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to update blood glucose data',
            error: error.message,
        });
    }
};

// Fungsi untuk menghapus catatan kadar glukosa
const remove = async (req, res) => {
    const { id } = req.params; // Ambil id dari parameter
    const { userId } = req.body; // Ambil userId dari body
    try {
        const deletedBloodGlucose = await bloodGlucoseService.deleteBloodGlucose(id, userId);
        res.status(200).json({
            status: 'success',
            message: 'Blood glucose data deleted',
            data: deletedBloodGlucose,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to delete blood glucose data',
            error: error.message,
        });
    }
};

module.exports = {
    create,
    getToday,
    getWeekly,
    getMonthly,
    getAllByUserId,
    update,
    remove,
};