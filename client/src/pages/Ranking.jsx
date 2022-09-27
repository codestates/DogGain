import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Crawling from "../Components/Crawling"

function Ranking() {

  const state = useSelector(state => state.dealReducer)
  const {deals} = state

  const [dealsRanking, setDealsRanking] = useState(deals)

  const dealsFilter = (deals) => {
    return deals.slice().sort((a,b) => b.origin_views - a.origin_views)
  }

  useEffect(() => {
    setDealsRanking(deal => dealsFilter(deals))
  },[deals])

  return (
    <div className="mt-4">
          <Crawling hotdeals={dealsRanking} />
    </div>
  );
}

export default Ranking;
