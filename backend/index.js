const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true})
    .then(() => {
        console.log(chalk.blue('MongoDB') + chalk.cyanBright.underline.bold(' Connected! 🌐 '))
    })

app.listen(8800, () => {
    console.log(chalk.magentaBright('Backend server') + chalk.redBright(' is operating 🖥️'));
})