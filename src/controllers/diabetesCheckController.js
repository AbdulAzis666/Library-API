const { diabetesCheckService } = require('../services');

// Fungsi untuk membuat atau mengupdate data diabetes check
const upsert = async (req, res) => {
    const { userId } = req.params;
    const data = req.body;
    try {
        const result = await diabetesCheckService.upsertDiabetesCheck(userId, data);
        res.status(200).json({
            status: 'success',
            message: 'Diabetes check data saved',
            data: result,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to save diabetes check data',
            error: error.message,
        });
    }
};

// Fungsi untuk mendapatkan data diabetes check berdasarkan user_id
const getByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const data = await diabetesCheckService.getDiabetesCheckByUserId(userId);
        res.status(200).json({
            status: 'success',
            data,
        });
    } catch (error) {
        const statusCode = error.statusCode || 400;
        res.status(statusCode).json({
            status: 'failed',
            message: 'Failed to retrieve diabetes check data',
            error: error.message,
        });
    }
};

module.exports = {
    upsert,
    getByUserId,
}; 