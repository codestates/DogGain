const user = require('../dummydata/data.js')
const {
  generateAccessToken,
  generateRefreshToken,
  sendRefreshToken,
  sendAccessToken,
} = require('../controllers/tokenFunctions');

module.exports = {
  login: async (req, res) => {
    const { username, password } = req.body;
    const filtered = await user.filter(user => user.username === username && user.password === password)

    if (filtered.length === 0) {
      return res.status(401).json("Invalid user or Wrong password");
    } else if (filtered.length === 1) {
      const accessToken = generateAccessToken(filtered[0]);
      const refreshToken = generateRefreshToken(filtered[0]);
      sendRefreshToken(res, refreshToken);
      sendAccessToken(res, accessToken);
      res.status(200).json(filtered)
    } else {
      res.status(500).json("err")
    }
  }
};