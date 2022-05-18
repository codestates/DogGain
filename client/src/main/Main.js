import Top3ranking from './Top3ranking';
import Crawling from './Crawling';
import deals from '../data/Deals';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Main() {
  let [hotdeals, setHotDeals] = useState('');
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:8080/deal?&page=3&pageSige=5')
  //     .then((rp) =>
  //     console.log(rp.data)
  //     setHotDeals(rp.data));
  // }, []);
  return (
    <div>
      <Top3ranking hotdeals={hotdeals} />
      <Crawling hotdeals={hotdeals} />
    </div>
  );
}
export default Main;
