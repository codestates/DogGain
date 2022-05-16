// const { getHTML, crawl, render } = require("./crawl");
const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite')

const url = "https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu"

async function getHTML(url) {
  try {
    const html = await axios.get(url, {responseType: "arraybuffer"})
    const content = iconv.decode(html.data, "EUC-KR").toString()
    return content
  } catch (error) {
    console.error(error);
  }
}

getHTML(url)
  .then(html => {
    const $ = cheerio.load(html)
    const list = $('#revolution_main_table')
    console.log(list)
  })