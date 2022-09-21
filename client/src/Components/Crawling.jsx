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
                <div className='flex items-center text-2xs'>
                  <div className='shopname_tag display: inline-block rounded-md bg-[color:#a4cff5] my-1 p-1 '>{deal.origin_sitename}</div>

                  <div id='origin_user' className='flex ml-2 mt-1 text-[color:#777777]'>
                  <FaUserAlt className='' /> 
                  <div className=''>
                  {deal.origin_username}
                  </div>
                </div>

                </div>
                <a href={deal.origin_url} id='ranking_alink' className=' text-lg text-blue-50 text-ellipsis overflow-hidden max-w-3xl mt-2 text-decoration-line:none' >
                  {deal.origin_title}
                </a>
                {deal.origin_price === 0 ? (
                  <div style={{ color: 'tomato' }}>가격정보 없음</div>
                ) : (
                  <div style={{ color: 'tomato' }}>{deal.origin_price}원</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default Crawling;
