const {Users} = require('../models');
const session = require('express-session');

module.exports = {
   //[post]/login
  //Users DB에서 사용자 정보 찾아서 accessToken을 쿠키(jwt)에 담아서 보내줌
  logIn: async(req, res) => {
    const {username, password} = req.body;
    const loginInfo = await Users.findOne({where: {username, password}});
    if (!loginInfo) {
      return res.status(404).json({ message: "Unauthorized" });
    } else {
      // console.log("유저정보:", loginInfo.dataValues);
      delete loginInfo.dataValues.password;
      const token = generateAccessToken(loginInfo.dataValues);
      // console.log("토큰잘받아옴?");
      sendAccessToken(res, token);
      // return res.status(200).json({ message: "successfully loged in!" });
    }
  },
    //[post]/logout
  //쿠키를 clear(AccessToken지움)한 후 로그아웃
  logOut: (req, res) => {
    if (!res.cookies) {
      res.status(400).json({ message: "Bad request" });
    }
    res.clearCookie("jwt");
    res.status(200).json({ message: "successfully signed out!" });
  },
    //[post]/signup
  //Users DB에서 사용자 정보 찾고 없으면 생성해서 accessToken을 쿠키(jwt)에 담아서 보내줌
  signUp: async (req, res) => {
    console.log(req);
    const { username, nickname, email, password } = req.body;

    if (!username || !nickname || !email || !password) {
      return res.status(422).send("모든 항목을 입력해 주세요");
    }

    const [result, created] = await Users.findOrCreate({
      where: { email },
      defaults: {
        nickname,
        password,
      },
    });

    if (!created) {
      return res.status(400).send("user is already exists");
    } else {
      const payload = {
        email,
        nickname,
        password,
      };
      const token = generateAccessToken(payload);
      sendAccessToken(res, token);
    }
  },
  signOut: (req, res) => {
    console.log('session userid:', req.session.userid);
      Users
        .destroy({
          where: {
            id: req.session.userid,
          },
        })
        .then(() => {
          //session 정보도 지워줘야함.
          req.session.destroy((err) => {
            if (err) {
              res.status(400).send('you are currently not logined');
            } else {
              res.status(200).send('안전하게 탈퇴처리되었습니다.');
            }
          });
        })
        .catch((err) => {
          res.status(500).send('err');
        });
      },
  editUserProfile: (req, res) => {

  },
  getUserInfo: (req, res) => {
    const accessTokenData = isAuthorized(req);
    // console.log("accessTokenData :", accessTokenData);
    if (!accessTokenData) {
      res.json({ data: null, message: "not authorized" });
    }
    return res.status(200).json({ data: { loginInfo: accessTokenData } });
  },
}