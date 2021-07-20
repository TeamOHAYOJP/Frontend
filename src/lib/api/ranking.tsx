import client  from 'lib/api/client'
import { Ranking, DailyRanking } from 'interfaces/ranking'


export const getRankings = () => {

    return client.get("daily_rankings");

}
