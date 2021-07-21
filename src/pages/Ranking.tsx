import React, { VFC } from "react";
import { useState, useEffect } from "react";

import { getRankings } from "lib/api/ranking";
import { DailyRanking } from "interfaces/ranking";

import { RankingRecord , RankingTopRecord } from "components/RankingRecord";


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
    
    
    // TODO: 無理矢理だがひとまずこれで、他の方法があればそれに変更したい。
    // TODO: component:childernをうまく使えばいける？

    // TODO: エントリーボタンを作らないといけない
    return (
        <>
            <div>
                {
                    rankings.map((ranking, idx)=> idx !== 0 ? (<></>):(
                        <RankingTopRecord {...ranking}/>
                    ))
                }
            </div>
            <div className="-mt-10">
                {
                    rankings.map((ranking, idx)=> idx === 0 ? (<></>):(
                        <RankingRecord {...ranking}/>
                    ))
                }
            </div>
        </>
    )
}


