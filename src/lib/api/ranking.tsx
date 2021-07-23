import client  from 'lib/api/client'
import { Ranking, DailyRanking } from 'interfaces/ranking'
import Cookies from 'js-cookie';


export const getRankings = () => {

    return client.get("daily_rankings");

}

export const postRanking = (data:{userId:number | undefined}) => {
    return client.post("daily_rankings", data)
}

export const getIsRankedIn = () => {
    return client.get("daily_rankings/is_ranked_in", {
        headers: {
            
            "access-token": Cookies.get("_access_token"),
            "client": Cookies.get("_client"),
            "uid": Cookies.get("_uid")
            
        }
    })
}