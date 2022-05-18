import React from 'react';
import '../css/Deal.css';

const Deal = ({ deals }) => {
  console.log(deals);
  return (
    <div>
      {deals.map((deal) => {
        <li className='deal' id={deals.id}>
          <div className='deal__profile'>
            <img src={deals.origin_img_url} />
          </div>
          <div className='deal__content'>
            <div className='deal__userInfo'>
              <div className='deal__userInfo--wrapper'>
                <span className='deal__username'>{deals.origin_username}</span>
              </div>
              <div className='deal__userInfo--buttonWrapper'></div>
            </div>
            <div className='deal__message'>{deals.origin_price}</div>
          </div>
        </li>;
      })}
    </div>
  );
};

export default Deal;
