const {
  getHTML,
  getEndNum,
  getDeal
} = require("./crawl.js");

const sitename = '뽐뿌'
const postUrl = 'https://www.ppomppu.co.kr/zboard/view.php?id=ppomppu&no='
const boardUrl = 'https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu'

module.exports = {
  post: async () => {
    const pointer = await getEndNum(boardUrl)
    getDeal(postUrl, sitename, pointer)
  }
}