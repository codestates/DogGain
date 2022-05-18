const axios = require('axios');
const cheerio = require('cheerio');
const iconv = require('iconv-lite')

const postUrl = 'https://www.ppomppu.co.kr/zboard/view.php?id=ppomppu&no='
const boardUrl = 'https://www.ppomppu.co.kr/zboard/zboard.php?id=ppomppu'

async function getHTML(url) {
  try {
    const html = await axios.get(url, {responseType: "arraybuffer"})
    const content = iconv.decode(html.data, "EUC-KR").toString()
      return content
  } catch (error) {
    console.error(error);
  }
}

getHTML(boardUrl)
  .then(html => {
    const $ = cheerio.load(html)
    const $endNum = $('.list1').eq(0).children().eq(0).text();
    const endNum = $endNum.replace(/ /g, '');
    return endNum
  }).then(result => {

    //! axios 요청으로 startNum 받아올 수 있게 수정 필요
    let startNum = 420860;
    let endNum = result;

    console.log('\n******************************\n' + startNum + ' ~ ' + endNum + '을 크롤링 중입니다.\n******************************\n')

    let crawlArr = [];
    
    while(startNum <= endNum) {
      crawlArr.push(startNum);
      startNum++;
    }

    //! axios 요청으로 startNum update 구문 추가 필요

    crawlArr.forEach((num) => {
      getHTML(postUrl+num)
      .then(html => {
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
          const price = Number(originPrice.replace(/무/g, '').replace(/료/g, '').replace(/배/g, '').replace(/송/g, '').replace(/로/g, '').replace(/켓/g, '').replace('/', '').replace('원', '').replace(/,/g, ''));
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
        
        //! db에 데이터 추가하는 구문 추가 필요
        console.log($title + "\n" + getUserName($username) + "\n" + getPrice($title) + "\n" + imgUrl + "\n" + views + "\n" + likes + "\n" + created);
      })
    });
  })