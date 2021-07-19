import React, { VFC } from 'react';
import { DailyRanking } from 'interfaces/ranking';
interface PROPS {
  userId:number;
  id:number
}
export const RankingRecord: VFC<DailyRanking> = (ranking: DailyRanking) => {
  return (
    <div className="">
      {ranking.userId}
    </div>
  )
}
// export const RankingRecord: VFC<DailyRanking> = (ranking: DailyRanking) => {
//   return (
//     <div className="">
//       {ranking.userId}
//     </div>
//   )
// }


