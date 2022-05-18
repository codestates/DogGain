const express = require('express')
const cors = require('cors')
const app = express();
const { sequelize } = require("./models");
const userRouter = require("./router/user")
const dealRouter = require('./router/deal')
const getDeal = require('./controllers/deals')


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter)
app.use('/deal', dealRouter)

setInterval(() => {
  getDeal.post();
}, 600000);

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log("데이터베이스 연결");
  })
  .catch((err) => {
    // console.error(err);
  });

app.get("/", (req, res, next) => {
  res.status(200).send("Doggain Launch!")
})

app.use((req, res, next) => {
  res.status(404).send("Not Found!");
});
app.use((err, req, res, next) => {
  res.status(500).send("Internal Server Error");
});

app.listen(80, () => console.log("server is running"));