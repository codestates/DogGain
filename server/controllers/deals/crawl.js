const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const { Pointers, Deals } = require('../../models');

const getHTML = async (url) => {
  try {
    const html = await axios.get(url, {responseType: "arraybuffer"})
    const content = iconv.decode(html.data, "EUC-KR").toString()
    return content
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getEndNum: async (boardUrl) => {
    const html = await getHTML(boardUrl)
    const $ = cheerio.load(html)
    const $endNum = $('.list1').eq(0).children().eq(0).text();
    const endNum = $endNum.replace(/ /g, '');
    return endNum
  },
  
  getDeal : async (postUrl, sitename, pointer) => {
    const dbNum = await Pointers.findOne({ where: { sitename: sitename } });
    
    let endNum = pointer;

    if (dbNum === null) {
      await Pointers.create({ sitename: sitename, pointer: startNum - 20 });
    }
    
    let startNum = await dbNum.pointer

    if (Number(startNum) === Number(endNum)) {
      console.log("pointer : " + pointer + "\n크롤링할 데이터가 없습니다.")
      return;
    }
    console.log('\n******************************\n' + startNum + ' ~ ' + endNum + '을 크롤링 중입니다.\n******************************\n')
    
    let crawlArr = [];
    
    while(startNum <= endNum) {
      crawlArr.push(startNum);
      startNum++;
    }

    await Pointers.update({ pointer: endNum }, {
      where: {
        sitename: sitename
      }
    });

    crawlArr.forEach(async (num) => {
      const html = await getHTML(postUrl+num)
      const $ = cheerio.load(html)
      const $title = $('.view_title2').text();
      const $username = $('.view_name').text();
      const $imgUsername = $('.sub-top-text-box').find('img').eq(0).attr('alt');
      const $views = $('.sub-top-text-box').text();
      const $imgUrl = $('.board-contents').find('img').eq(0).attr('src');

      const getUserName = function (username) {
        if (username === "") { return $imgUsername }
        else { return $username }
      }
      
      const getPrice = function (title) {
        const priceStartNum = title.indexOf('(') + 1;
        const priceEndNum = title.indexOf(')', priceStartNum);
        const originPrice = title.slice(priceStartNum, priceEndNum);
        const price = Number(originPrice.replace(/무/g, '').replace(/료/g, '').replace(/배/g, '').replace(/송/g, '').replace(/로/g, '').replace(/켓/g, '').replace('/', '').replace('원', '').replace(/,/g, '').replace(/./g, ''));
        return price
      }

      const viewStartNum = $views.indexOf('조회수');
      const viewEndNum = $views.indexOf('추천수') - 3;

      const likeStartNum = $views.indexOf('추천수');
      const likeEndNum = $views.indexOf('링크') - 3;
      
      const createdStartNum = $views.indexOf('등록일');
      const createdEndNum = $views.indexOf('조회수') - 1;
      
      const views = $views.slice(viewStartNum, viewEndNum);
      const likes = $views.slice(likeStartNum, likeEndNum);
      const created = $views.slice(createdStartNum, createdEndNum);

      const imgUrl = String($imgUrl).slice(2);
      
      await Deals.create({
        origin_username: getUserName($username),
        origin_url : postUrl,
        origin_img_url : imgUrl,
        origin_shopname : "추후 구현",
        origin_sitename : sitename,
        origin_title : $title,
        origin_views : Number(views),
        origin_price : Number(getPrice($title)),
        origin_created_at : created,
        origin_updated_at : created,
      });
    });
  }
}

