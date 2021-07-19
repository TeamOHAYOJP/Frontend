import React, { VFC } from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { User } from 'interfaces/index'
import { getUser } from "lib/api/user";
import { getCurrentUser } from "lib/api/auth";


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
                    <h1>{user.id}</h1>
                    <h1>{user.name}</h1>
                    <h1>{user.email}</h1>
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