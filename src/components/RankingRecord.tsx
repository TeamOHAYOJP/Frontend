import React, { VFC } from 'react';
import { useState, useEffect } from 'react';
import { DailyRanking } from 'interfaces/ranking';

import { User } from 'interfaces/index'
import { getUser } from 'lib/api/user'


import { Typography } from '@material-ui/core';







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

    return(
        <>
            <div className="max-w-md w-full lg:max-w-full m-auto mb-3">
                <div className="rounded p-4 flex  leading-normal bg-pink shadow-lg">

                    <div className="bg-white m-1 p-2 rounded font-mono">
                            {ranking.id}
                    </div>
                    <div className="p-2 m-1">
                        {user?.name}
                    </div>
                    
                </div>
            </div>
        </>
    )
}
