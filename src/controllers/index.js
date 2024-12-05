const { diabetesCheck } = require('../models');

module.exports = {
    userController: require('./userController'),
    bloodGlucoseController: require('./bloodGlucoseController'),
    mealRecordController: require('./mealRecordController'),
    notificationController: require('./notificationController'),
    videoController: require('./videoController'),
    diabetesCheckController: require('./diabetesCheckController')
};