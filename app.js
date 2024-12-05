require('dotenv').config();
const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');
const undefinedEndpointHandler = require('./src/middlewares/undefine');
const userRoute = require('./src/routes/userRoute');
const bloodGlucoseRoute = require('./src/routes/bloodGlucoseRoute');
const mealRecordRoute = require('./src/routes/mealRecordRoute');
const notificationRoute = require('./src/routes/notificationRoute');
const videoRoute = require('./src/routes/videoRoute');
const diabetesCheckRoute = require('./src/routes/diabetesCheckRoute');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', async (req, res) => {
    try {
        res.send('<h1>Welcome to the Libary!</h1>');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.use(express.json());
app.use('/users', userRoute);
app.use('/blood-glucose', bloodGlucoseRoute);
app.use('/meal-records', mealRecordRoute);
app.use('/notifications', notificationRoute);
app.use('/videos', videoRoute);
app.use('/diabetes-check', diabetesCheckRoute);
app.use(undefinedEndpointHandler);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
