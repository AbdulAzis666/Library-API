const express = require('express');
const router = express.Router();
const { bloodGlucoseController } = require('../controllers');

router.post('/', bloodGlucoseController.create);
router.get('/today/:userId', bloodGlucoseController.getToday);
router.get('/weekly/:userId', bloodGlucoseController.getWeekly);
router.get('/monthly/:userId', bloodGlucoseController.getMonthly);
router.get('/all/:userId', bloodGlucoseController.getAllByUserId);
router.put('/:id', bloodGlucoseController.update);
router.delete('/:id', bloodGlucoseController.remove);

module.exports = router;