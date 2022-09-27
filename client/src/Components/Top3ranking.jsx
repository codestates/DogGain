import {Link} from "react-router-dom"

function Top3ranking({ hotdeals }) {
  return (
    <article className="bg-white p-4 mb-4 ">
      <div className="top_ranking_container w-96">
        <div className="flex">
          <div className="font-semibold text-[color:#66757f] mb-2">조회수 랭킹</div>
          <Link 
          className="ml-auto text-blue-60 text-2xs font-semibold"
          to="/ranking">
          <div>더보기</div>
          </Link>
        </div>
        {hotdeals.slice()
          .sort((a, b) => b.origin_views - a.origin_views)
          .filter((deal, idx) => (idx <= 2 ? deal : undefined))
          .map((deal, idx) => {
            return (
              <div id="hotdeals_container" className="truncate max-w-xl text-xs font-semibold text-blue-50 mb-1" key={deal.id}>
                <span id="ranking_label" className="text-[color:#90949c] mr-2 ">{idx + 1}위</span>
                <a href={deal.origin_url} target="_blank" rel="noreferrer" id="ranking_alink" className=" max-w-xl">
                  {deal.origin_title}
                </a>
              </div>
            );
          })}
      </div>
    </article>
  );
}
export default Top3ranking;
