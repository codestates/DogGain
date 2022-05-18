import Deal from '../Components/Deal';
import { FaUserAlt, FaHandHoldingUsd } from 'react-icons/fa';

function Crawling({ deals }) {
  //   console.log(deals[0].origin_img_url);
  return (
    <article className='crawling_container'>
      <div className='sumofviews_rank'>
        {/* <Deal deals={deals} /> */}

        {deals.map((deal, idx) => {
          //   console.log(deal.origin_img_url);
          return (
            <div className='deal_container' key={deal.id}>
              <div style={{ flex: 1 }}>
                <img
                  className='thumbnail'
                  src={deal.origin_img_url}
                  alt='제품 이미지'
                ></img>
              </div>
              <div style={{ flex: 9 }}>
                <div className='tag-list'>
                  <div className='shopname_tag'>{deal.origin_shopname}</div>
                  <div className='sitename_tag'>{deal.origin_sitename}</div>
                </div>
                <a href={deal.origin_url} className='title_alink'>
                  {deal.origin_title}
                </a>
                <div style={{ color: 'tomato' }}>{deal.origin_price}원</div>
                <div className='origin_user'>
                  <FaUserAlt />
                  {deal.origin_username}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default Crawling;