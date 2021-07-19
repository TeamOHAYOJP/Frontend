import React, { VFC } from "react";
import { useState, useEffect } from "react";

import { getRankings } from "lib/api/ranking";
import { DailyRanking } from "interfaces/ranking";

import { RankingRecord } from "components/RankingRecord";
export const Ranking: VFC = ()=>{

    const [ rankings, setRankings ] = useState<DailyRanking[]>([])

    const handleRankings = async () => {

        try{
            const res = await getRankings()
            if(res.status === 200){
                setRankings(res.data.dailyRankings)
            }else{
                console.log("取得に失敗しました")
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        handleRankings()
    },[])


    return (
        <>
        {

        }
        {
            rankings.map(r => (
                <li key={r.id}>
                    <p>{r + ""}</p>
                    <RankingRecord {...r}/>
                </li>
            ))
        }
        </>
    )
}


