import React, { VFC } from "react";
import { useState, useEffect } from "react";

import { getRankings } from "lib/api/ranking";
import { DailyRanking } from "interfaces/ranking";

import { RankingRecord } from "components/RankingRecord";

import PersonIcon from "@material-ui/icons/Person"
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

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

    // TODO: 一位だけ切り取って2番目からレコード表示にしないと
    // TODO: スタイリングを少し
    
    return (
        <>

        <div className="bg-red rounded-full h-64 w-64 flex justify-center items-start m-auto p-4 " >
            <div>
                <div className="flex justify-center items-center">
                    <EmojiEventsIcon  fontSize="large" htmlColor="#F7FD04" />
                </div>
                <div className="bg-white rounded-full h-20 w-20 flex justify-center items-center" >
                    <PersonIcon fontSize="large"/>
                </div>
                <p className="text-center">{"Leandro"}</p>
                <p className="text-center text-green ">{"7:30"}</p>
            </div>

        </div>

        <div className="">
            {
                rankings.map(r => (
                    <RankingRecord {...r}/>
                ))
            }
        </div>
        </>
    )
}


