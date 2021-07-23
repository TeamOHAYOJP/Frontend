import React, { VFC } from "react";
import { useState, useEffect, useContext } from "react";

import { getRankings, postRanking } from "lib/api/ranking";
import { DailyRanking } from "interfaces/ranking";
import { Link, useHistory } from 'react-router-dom'
import { RankingRecord , RankingTopRecord } from "components/RankingRecord";
import { Button } from '@material-ui/core'
import { Routes } from "Routes";

import { AuthContext } from "App";
import AlertMessage from "utils/AlertMessage";
export const Ranking: VFC = ()=>{

    const { currentUser , isRankedIn, setIsRankedIn, dailyRank, setDailyRank} = useContext(AuthContext)
    const [ rankings, setRankings] = useState<DailyRanking[]>([])
    const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)
    const histroy = useHistory()

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()
        const data = {
            userId: currentUser?.id
        }

        try {

            const res = await postRanking(data)
            console.log(res)

            if (res.status === 200) {

                setIsRankedIn(true)
                setDailyRank(res.data.dailyRanking)

                histroy.push(Routes.root.path)

                console.log("Create DailyRanking and Ranking successfully")

            } else {

                setAlertMessageOpen(true)

            }

        } catch (err) {

            console.log(err)
            setAlertMessageOpen(true)

        }
    }
    const handleRankings = async () => {

        try{
            const res = await getRankings()
            if(res.status === 200){
                setRankings(res.data.dailyRankings)
                histroy.push(Routes.root.path)
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
    
    
    

    console.log(`currentUser isRankedIn is : ${isRankedIn} `)
    console.log(`currentUser dailyRank  is : ${dailyRank} `)
    // TODO: 無理矢理だがひとまずこれで、他の方法があればそれに変更したい。
    // component:childernをうまく使えばいける？


    return (
        <>
        {
            isRankedIn ? (
                <>
                {}
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
            ) : (
                <div className="mt-60">
                <Button 
                    variant="outlined" 
                    color="secondary"
                    onClick={handleSubmit}
                >
                        目覚める
                </Button>
                <AlertMessage // エラーが発生した場合はアラートを表示
                    open={alertMessageOpen}
                    setOpen={setAlertMessageOpen}
                    severity="error"
                    message="目覚めるのに失敗しました"
                />
            </div>
            )
        }
        </>
        
        

    )
}


