const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const dotenv = require('dotenv');
const app = express();
const pinRoute = require('./routes/pins');


dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true})
    .then(() => {
        console.log(chalk.blue('MongoDB') + chalk.cyanBright.underline.bold(' Connected! 🌐 '))
    })
    .catch((err) => console.log(err));

    app.use('/api/pins', pinRoute);
    



app.listen(8800, () => {
    console.log(chalk.magentaBright('Backend server') + chalk.redBright(' is operating 🖥️'));
})