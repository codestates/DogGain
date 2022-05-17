import React from 'react';
import '../css/Deal.css';

const Deal = ({ deals }) => {
  console.log(deals);
  return (
    <div>
      {deals.map((deal) => {
        <li className='tweet' id={deals.id}>
          <div className='tweet__profile'>
            <img src={deals.origin_img_url} />
          </div>
          <div className='tweet__content'>
            <div className='tweet__userInfo'>
              <div className='tweet__userInfo--wrapper'>
                <span className='tweet__username'>{deals.origin_username}</span>
              </div>
              <div className='tweet__userInfo--buttonWrapper'></div>
            </div>
            <div className='tweet__message'>{deals.origin_price}</div>
          </div>
        </li>;
      })}
    </div>
  );
};

export default Deal;
