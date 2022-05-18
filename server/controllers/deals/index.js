const axios = require('axios');
const cheerio = require('cheerio');
const { Deals } = require('../../models');
const {
  getHTML,
  getEndNum,
  getDeal
} = require("./crawl.js");

const sitename = '뽐뿌'
const postUrl = 'https://www.ppomppu.co.kr/zboard/view.php?id=ppomppu&no='
const boardUrl = 'https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu'

module.exports = {
  get: (url) => {
    //pagenation 고려한 get response 작성 필요
  },
  post: async () => {
    const pointer = await getEndNum(boardUrl)
    getDeal(postUrl, sitename, pointer)
  }
}