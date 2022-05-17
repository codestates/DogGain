function Top3ranking({ deals }) {
  //   console.log(
  //     deals.filter((deal, idx) => {
  //       deal.id >= 3 ? deal.id : null;
  //     })
  //   );
  //   console.log(deals[0].origin_url);

  //   console.log(deals);
  //   let sortedDeals = deals.sort((a, b) => b.origin_views - a.origin_views);
  //   console.log(sortedDeals);

  return (
    <article className='top3ranking_container'>
      <div className='top_ranking_container'>
        조회수 랭킹
        {deals
          .filter((deal) => (deal.id <= 2 ? deal : undefined))
          .map((deal) => {
            return (
              <div>
                <span className='ranking_label' key={deal.id}>
                  {deal.id + 1}위
                </span>
                <a href={deal.origin_url} className='ranking_alink'>
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
