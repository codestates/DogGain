const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user.js')

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));

app.use('/user', userRouter)

app.listen(80);