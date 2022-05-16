const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user.js')
const crawl = require('./controllers/deals')

const app = express();

app.use(express.json());
app.use(cors());
// app.use(express.urlencoded({ extended: false }));


app.use('/user', userRouter)
// setInterval(function() {
//   console.log("hello!");
// }, 3000);


app.listen(80);