function Top3ranking({ hotdeals }) {
  //   console.log(
  //     deals.filter((deal, idx) => {
  //       deal.id >= 3 ? deal.id : null;
  //     })
  //   );
  //   console.log(deals[0].origin_url);

  //   console.log(deals);
  //   let sortedDeals = deals.sort((a, b) => b.origin_views - a.origin_views);
  //   console.log(sortedDeals);
  // console.log(hotdeals);

  // let top3maker = (hotdeals)=>{
  //   hotdeals.
  // }

  return (
    <article className='top3ranking_container'>
      <div className='top_ranking_container'>
        조회수 랭킹
        {hotdeals
          .sort((a, b) => b.origin_views - a.origin_views)
          .filter((deal, idx) => (idx <= 2 ? deal : undefined))
          .map((deal, idx) => {
            return (
              <div className='dofinal' key={deal.id}>
                <span className='ranking_label'>{idx + 1}위</span>
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
