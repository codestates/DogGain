import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Crawling from "../Components/Crawling"

function Ranking() {

  const state = useSelector(state => state.dealReducer)
  const {deals} = state

  const [dealsRanking, setDealsRanking] = useState(deals)

  const dealsFilter = (deals) => {
    return deals.sort((a,b) => b.origin_views = a.origin_views)
    
  }

  console.log(dealsFilter(dealsRanking).map(el => Number(el.origin_views)))

  // useEffect(() => {
  //   setDealsRanking(dealsFilter(dealsRanking))
  // },[dealsRanking])

  // {hotdeals.slice()
  //   .sort((a, b) => b.origin_views - a.origin_views)
  //   .filter((deal, idx) => (idx <= 2 ? deal : undefined))
  //   .map((deal, idx) => {
  //     return (
  //       <div id="hotdeals_container" className="truncate max-w-xl text-xs font-semibold text-blue-50 mb-1" key={deal.id}>
  //         <span id="ranking_label" className="text-[color:#90949c] mr-2 ">{idx + 1}위</span>
  //         <a href={deal.origin_url} target="_blank" rel="noreferrer" id="ranking_alink" className=" max-w-xl">
  //           {deal.origin_title}
  //         </a>
  //       </div>
  //     );
  //   })}

  return (
    <div className="mt-4">
          <Crawling hotdeals={deals} />
    </div>
  );
}

export default Ranking;
