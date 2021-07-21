import React, { VFC } from "react";
import { useState, useEffect } from "react";

import { getRankings } from "lib/api/ranking";
import { DailyRanking } from "interfaces/ranking";
import { Link } from 'react-router-dom'
import { RankingRecord , RankingTopRecord } from "components/RankingRecord";
import { Button } from '@material-ui/core'
import { Routes } from "Routes";

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

    // TODO: エントリーボタンへの条件分岐しなければいけない もしかしたら別のページでルーティングでするかも
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
    // return (
    //     <div className="mt-60">
    //         <Button variant="outlined" color="secondary">
    //             <Link to={Routes.calcTest.path}>
    //                 目覚める
    //             </Link>
    //         </Button>
    //     </div>
    // )
}


