import { FaUserAlt } from 'react-icons/fa';

function Crawling({ hotdeals }) {
  return (
    <article className="crawling_container">
      <div className="sumofviews_rank">
        {hotdeals.map((deal, idx) => {
          return (
            <div className="bg-white p-4 mb-4" key={deal.id}>
              <div style={{ flex: 0.1 }}></div>
              <div className="dofinal" style={{ flex: 8 }}>
                <div className="flex items-center text-2xs">
                  <div
                    id="shopname_tag"
                    className=" text-white text-6xs font-semibold display: inline-block rounded-md bg-[color:#a4cff5] my-1 p-1 "
                  >
                    {deal.origin_sitename}
                  </div>
                  <div
                    id="shopname_tag"
                    className=" text-white text-6xs font-semibold display: inline-block rounded-md bg-[color:#FAD4D5] my-1 ml-1 p-1 "
                  >
                    {deal.origin_shopname}
                  </div>

                  <div
                    id="origin_user"
                    className="flex ml-2 mt-1 text-[color:#777777]"
                  >
                    <FaUserAlt className="mb-1" />
                    <div className="text-7xs mt-1 ml-1">
                      {deal.origin_username}
                    </div>
                  </div>
                </div>
                <a
                  href={deal.origin_url}
                  target="_blank"
                  rel="noreferrer"
                  id="ranking_alink"
                  className=" text-sm text-blue-50 font-semibold text-ellipsis overflow-hidden max-w-3xl mt-2 text-decoration-line:none"
                >
                  {deal.origin_title}
                </a>
                {deal.origin_price === 0 ? (
                  <div className="text-xs text-[color:tomato] mt-1">
                    가격정보 없음
                  </div>
                ) : (
                  <div className="text-xs text-[color:tomato] mt-1">
                    {deal.origin_price}원
                  </div>
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
