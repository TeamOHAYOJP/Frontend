import React, { VFC } from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { User } from 'interfaces/index'
import { getUser } from "lib/api/user";
import { getCurrentUser } from "lib/api/auth";

import PersonIcon from "@material-ui/icons/Person"


export const UserPrifile:VFC = () =>{

    const { id }:any = useParams()
    const [ user, setUser ] = useState<User>()

    const handleSetUser = async () =>{
        try{
            
            const res = id === "mypage" ? await getCurrentUser() : await getUser(id) ;

            if(res?.status === 200){
                setUser(res.data.user || res.data.currentUser)
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
            user ?  (
                <>
                    <div className="bg-red rounded-full h-24 w-24 flex justify-center items-start m-auto p-1 shadow-2xl" >
                        <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                            <PersonIcon fontSize="large"/>
                        </div>
                    </div>
                    <p className="text-center font-mono">{user.name}</p>
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