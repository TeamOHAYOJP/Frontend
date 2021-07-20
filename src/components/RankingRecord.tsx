import React, { VFC } from 'react';
import { useState, useEffect } from 'react';
import { DailyRanking } from 'interfaces/ranking';

import { User } from 'interfaces/index'
import { getUser } from 'lib/api/user'


import { Typography } from '@material-ui/core';

import PersonIcon from "@material-ui/icons/Person"




export const RankingRecord: VFC<DailyRanking> = (ranking: DailyRanking) => {

    const [user, setUser] = useState<User>()

    const handleSetUser = async () => {
        try {

            const res = await getUser(ranking.id);

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
    // TODO: recodeにリンクをつけてuserのページに飛べるようにしないといけない
    
    return(
        <>
            <div className="max-w-md w-full lg:max-w-full m-auto mb-3 ">
                <div className="rounded p-4 flex  leading-normal bg-pink shadow-lg">

                    <div className="rounded text-lg  h-10 w-10 flex justify-center items-center self-center font-semibold">
                            {ranking.id}
                    </div>

                    <div className=" flex grid grid-cols-3 gap-4">

                        <div className="bg-white rounded-full h-16 w-16 flex justify-center items-center col-auto" >
                            <PersonIcon fontSize="large"/>
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
