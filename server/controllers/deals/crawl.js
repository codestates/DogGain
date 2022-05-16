const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  getHTML: async (url) => {
    try {
      return await axios.get(url);
    } catch (error) {
      console.error(error);
    }
  },
  crawl: (html) => {
    let titleList = [];
    const $ = cheerio.load(html.data);
    // ul.list--posts를 찾고 그 children 노드를 bodyList에 저장
    const bodyList = $("ul.list--posts").children("li.item--post");

    // bodyList를 순회하며 titleList에 h2 > a의 내용을 저장
    bodyList.each(function(i, elem) {
      titleList[i] = {
        title: $(this)
          .find("h2 a")
          .text()
      };
    });
    return titleList;
  },
  render: (res) => {
    console.log(res)
  }
}