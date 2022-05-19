import Deal from '../Components/Deal';
import { FaUserAlt, FaHandHoldingUsd } from 'react-icons/fa';

function Crawling({ hotdeals }) {
  //   console.log(deals[0].origin_img_url);
  return (
    <article className='crawling_container'>
      <div className='sumofviews_rank'>
        {/* <Deal deals={deals} /> */}

        {hotdeals.map((deal, idx) => {
          //   console.log(deal.origin_img_url);
          return (
            <div className='deal_container' key={deal.id}>
              <div style={{ flex: 0.1 }}>
                {/* <img
                  className='thumbnail'
                  src={deal.origin_img_url}
                  alt='제품 이미지'
                ></img> */}
              </div>
              <div className='dofinal' style={{ flex: 8 }}>
                <div className='tag-list'>
                  <div className='shopname_tag'>{deal.origin_sitename}</div>
                </div>
                <a href={deal.origin_url} className='title_alink'>
                  {deal.origin_title}
                </a>
                {deal.origin_price === 0 ? (
                  <div style={{ color: 'tomato' }}>가격정보 없음</div>
                ) : (
                  <div style={{ color: 'tomato' }}>{deal.origin_price}원</div>
                )}
                <div className='origin_user'>
                  <FaUserAlt /> {deal.origin_username}
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
