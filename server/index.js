<<<<<<< HEAD
const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user.js')
const crawl = require('./controllers/deals')
=======
import express from 'express';
import cors from 'cors';
import userRouter from './router/user.js';
>>>>>>> 5138899 (connect local database)

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));


<<<<<<< HEAD
app.use('/user', userRouter)
// setInterval(function() {
//   console.log("hello!");
// }, 3000);

=======
app.use('/user', userRouter);
>>>>>>> 5138899 (connect local database)

app.listen(80);