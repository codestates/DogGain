import Top3ranking from './Top3ranking';
import Crawling from './Crawling';
import deals from '../data/Deals';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Pagenation from '../Components/Pagenation';

function Main() {
  let [hotdeals, setHotDeals] = useState([]);
  // let [top3deals, setTop3Deals] = useState([]);
  let [pagenum, setPageNum] = useState('1');
  let nextPageBtn = (num) => {
    // console.log(num);
    setPageNum(num);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/deal?&page=${pagenum}&pageSige=10`)
      .then((rp) => {
        // console.log(rp);
        setHotDeals(rp.data);
      })
      .catch((err) => setPageNum(0));
  }, [pagenum]);

  return (
    <div className='main_container'>
      <Top3ranking hotdeals={hotdeals} />
      {pagenum === 0 ? (
        <div className='error_container'>페이지를 찾을 수 없습니다</div>
      ) : (
        <Crawling hotdeals={hotdeals} />
      )}
      <Pagenation nextPage={nextPageBtn} />
    </div>
  );
}
export default Main;
