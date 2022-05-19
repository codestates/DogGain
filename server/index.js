const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('./models');
const userRouter = require('./router/user');
const dealRouter = require('./router/deal');
const getDeal = require('./controllers/deals');

app.use(express.json());
app.use(
  cors({
    origin: 'http://bucket-doggain.s3-website.ap-northeast-2.amazonaws.com',
    credentials: true,
    method: ['GET', 'POST', 'DELETE', 'PATCH'],
  })
);
app.use(express.urlencoded({ extended: false }));
app.use('/user', userRouter);
app.use('/deal', dealRouter);

sequelize
  .sync({ force: false })
  .then((e) => {
    console.log('데이터베이스 연결');
  })
  .catch((err) => {
    // console.error(err);
  });

app.get('/', (req, res, next) => {
  res.status(200).send('Doggain Launch!');
});

app.use((req, res, next) => {
  res.status(404).send('Not Found!');
});
app.use((err, req, res, next) => {
  res.status(500).send('Internal Server Error');
});

const getInterval = () => {
  getDeal.post();
  setTimeout(() => {
    getInterval();
  }, 600000);
};
getInterval();

app.listen(80, () => console.log('server is running'));
