import React, { VFC } from 'react';
import { useState, useEffect } from 'react';
import { DailyRanking } from 'interfaces/ranking';

import { User } from 'interfaces/index'
import { getUser } from 'lib/api/user'


import {IconButton, Button, Typography } from '@material-ui/core';
import PersonIcon from "@material-ui/icons/Person"
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import { Link, Redirect } from 'react-router-dom';
import { Routes } from 'Routes';



export const RankingRecord: VFC<DailyRanking> = (ranking: DailyRanking) => {

    const [user, setUser] = useState<User>()

    const handleSetUser = async () => {
        try {

            const res = await getUser(ranking.userId);

            if (res?.status === 200) {
                setUser(res.data.user)
            } else {
                console.log("取得に失敗しました")
            }


        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleSetUser()
    }, [])

    const rankingDate = new Date(ranking.createdAt)
    
    return(
        <>
            <div className="max-w-md w-full lg:max-w-full m-auto mb-3 ">
                <div className="rounded p-4 flex  leading-normal bg-pink shadow-lg">

                    <div className="rounded text-lg  h-10 w-10 flex justify-center items-center self-center font-semibold">
                            {ranking.id}
                    </div>

                    <div className=" flex grid grid-cols-3 gap-4">

                        <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center col-auto" >
                            <IconButton>
                                <Link to={Routes.userProfile.pathWith(ranking.userId)}>
                                    <PersonIcon fontSize="large"/>
                                </Link>
                            </IconButton>
                        </div>

                        <div className="col-auto flex justify-center items-center">
                            {user?.name}
                        </div>

                        <div className="col-auto flex justify-center items-center text-green text-shadow font-bold">
                            {rankingDate.getHours() + ':' + rankingDate.getMinutes()}
                        </div>

                    </div>
                    
                </div>
            </div>
        </>
    )
}


export const RankingTopRecord: VFC<DailyRanking> = (ranking: DailyRanking) => {

    const [user, setUser] = useState<User>()

    const handleSetUser = async () => {
        try {
            console.log(ranking.userId)
            console.log(ranking)
            const res = await getUser(ranking.userId)

            if (res?.status === 200) {
                setUser(res.data.user)
            } else {
                console.log("取得に失敗しました")
            }


        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleSetUser()
    }, [])

    const rankingDate = new Date(ranking.createdAt)
    
    return(
        <>
           
            <div className="bg-red rounded-full h-80 w-80 flex justify-center items-start m-auto p-4 shadow-2xl" >
                <div>
                    <div className="flex justify-center items-center ">
                        <EmojiEventsIcon  fontSize="large" htmlColor="#F7FD04" />
                    </div>
                    <div className="bg-white hover:bg-pink rounded-full h-20 w-20 flex justify-center items-center" >
                        <IconButton>
                            <Link to={Routes.userProfile.pathWith(ranking.userId)}>
                                <PersonIcon fontSize="large"/>
                            </Link>
                        </IconButton>
                    </div>
                    <div>
                        <div>
                            <p className="text-center text-2xl">{user?.name}</p>
                        </div>

                        <p className="text-center text-2xl text-green ">{rankingDate.getHours() + ':' + rankingDate.getMinutes()}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

