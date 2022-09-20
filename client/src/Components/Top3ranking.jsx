function Top3ranking({ hotdeals }) {
  return (
    <article className="bg-white p-4 mb-4 pr-32 ">
      <div className="top_ranking_container">
        <div className="font-semibold text-[color:#66757f] mb-2">조회수 랭킹</div>
        {hotdeals
          .sort((a, b) => b.origin_views - a.origin_views)
          .filter((deal, idx) => (idx <= 2 ? deal : undefined))
          .map((deal, idx) => {
            return (
              <div className="dofinal text-sm font-semibold text-blue-50 mb-1" key={deal.id}>
                <span className="ranking_label text-[color:#90949c] mr-2">{idx + 1}위</span>
                <a href={deal.origin_url} className="ranking_alink">
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
