import Top3ranking from './Top3ranking';
import Crawling from './Crawling';
import deals from '../data/Deals';

function Main() {
  return (
    <div>
      <Top3ranking deals={deals} />
      <Crawling deals={deals} />
    </div>
  );
}
export default Main;
