const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/merntravelmap', {useNewUrlParser: true})

app.listen(8800, () => {
    console.log('Backend server is operating 🖥️')
})