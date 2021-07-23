import React, { useContext, VFC } from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import { RankingGraph, RankingsIndex} from "components/RankingGraph";

import { User } from 'interfaces/index'
import { getUser } from "lib/api/user";
import { AuthContext } from "App";

import PersonIcon from "@material-ui/icons/Person"
import EditIcon from '@material-ui/icons/Edit';
import { Button } from "@material-ui/core";

import { Routes } from "Routes";
import { Ranking } from "interfaces/ranking";


export const UserPrifile:VFC = () =>{

    let { id }:any = useParams()
    const [ user, setUser ] = useState<User>()
    const [ rankings, setRankings ] = useState<Ranking[]>()
    const { currentUser } = useContext(AuthContext)

    let isMyPage = id == "mypage" || parseInt(id) === currentUser?.id

    const handleSetUser = async () =>{
        try{
            if(id === "mypage") id = currentUser?.id
            

            const res = await getUser(id) ;
            console.log(res)
            if(res?.status === 200){

                setUser(res.data.user)
                setRankings(res.data.rankings)
                
            }else{
                console.log("取得に失敗しました")
            }


        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        handleSetUser()
    },[])

    

    return(
        <>
        {
            user !== undefined?  (
                <>
                    <div className="bg-red rounded-full h-24 w-24 flex justify-center items-start m-auto p-1 shadow-2xl" >
                        <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                            <PersonIcon fontSize="large"/>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="text-center font-mono">{user.name}</p>
                    </div>

                    { 
                        isMyPage ? (
                            <div className="flex justify-center">

                                <Button variant="outlined">
                                    <Link to={Routes.userEdit.path}>
                                        Edit<EditIcon/>
                                    </Link>
                                </Button>
                            </div>
                        ):(<></>)

                    }
                    {
                        rankings !== undefined ? (
                            <>
                                <div className="mt-8">
                                    <RankingGraph rankings={rankings}/>
                                </div>
                                <div className="mt-8">
                                    <RankingsIndex rankings={rankings}/>
                                </div>
                            </>
                        ):(
                            <h1 className="mt-8">ランキングデータの取得に失敗しました</h1>
                        )
                    }
                </>
            ):(
                <>
                    <h1>ユーザが見つかりませんでした</h1>
                </>
            )
        }
        </>
    )
}