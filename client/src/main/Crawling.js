function Crawling({ deals }) {
  //   console.log(deals[0].origin_img_url);
  return (
    <article className='crawling_container'>
      <div className='sumofviews_rank'>
        {deals.map((deal, idx) => {
          //   console.log(deal.origin_img_url);
          return (
            <div className='deal_border'>
              <img
                className='thumbnail'
                src={deal.origin_img_url}
                alt='제품 이미지'
              ></img>
              <a href={deal.origin_url} className='crawling_alink'>
                {deal.origin_title}
              </a>
            </div>
          );
        })}
      </div>
    </article>
  );
}
export default Crawling;
