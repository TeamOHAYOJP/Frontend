import React, { VFC } from "react";
import { useState, useEffect } from "react";

import { User } from 'interfaces/index'
import { getCurrentUser } from "lib/api/auth";

import PersonIcon from "@material-ui/icons/Person"
import DoneIcon from '@material-ui/icons/Done';

import TextField from "@material-ui/core/TextField"
import { Link } from "react-router-dom";
import { Button } from '@material-ui/core'


import { Routes } from "Routes";

export const UserEdit:VFC = () =>{

    const [ user, setUser ] = useState<User>()
    const [name, setName] = useState<string>("")

    const handleSetUser = async () =>{
        try{
            
            const res = await getCurrentUser() 

            if(res?.status === 200){
                setUser(res.data.currentUser)
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
                    <TextField
                        variant="outlined"
                        fullWidth
                        label="名前"
                        defaultValue={user.name}
                        margin="dense"
                        onChange={event => setName(event.target.value)}
                    />
                    <div className="flex justify-end">
                        <Button variant="outlined" >
                                update<DoneIcon className="text-green"/>
                        </Button>
                    </div>
                </>
            ):(
                <Link to={Routes.welcome.path} ></Link>
            )
        }
        </>
    )
}