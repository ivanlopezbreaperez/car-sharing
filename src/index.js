'use strict'
var constants = require('./utils/Constants')
const userApp = require('./Api/UserApp')
const printInfo = require('./Api/PrintInfoApi')
const moneyBoxApi = require('./Api/MoneyBoxApi')
const shiftApi = require('./Api/ShiftApi')
const express = require('express')
const bodyParser = require('body-parser');

// App
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', userApp)
app.use('/rewards', moneyBoxApi)
app.use('/shift', shiftApi)
app.use('/info', printInfo)

app.listen(constants.PORT, constants.HOST);
console.log(`Running on http://${constants.HOST}:${constants.PORT}`);
