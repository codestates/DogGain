import Crawling from './Crawling';
import deals from '../data/Deals';
import Sorted from './Sorted';

function Rankingmain() {
  return (
    <div>
      <Sorted deals={deals} />
      <Crawling deals={deals} />
    </div>
  );
}
export default Rankingmain;
