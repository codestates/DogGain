import { FaUserAlt } from 'react-icons/fa';

function Crawling({ hotdeals }) {
  return (
    <article className='crawling_container'>
      <div className='sumofviews_rank'>
        {hotdeals.map((deal, idx) => {
          return (
            <div className='bg-white p-4 mb-4' key={deal.id}>
              <div style={{ flex: 0.1 }}></div>
              <div className='dofinal' style={{ flex: 8 }}>
                <div className='tag-list'>
                  <div className='shopname_tag'>{deal.origin_sitename}</div>
                </div>
                <a href={deal.origin_url} className='ranking_alink'>
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
