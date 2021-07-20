import React, { VFC } from "react";
import { useState, useEffect, useContext } from "react";

import { UpdateUserFormData, User } from 'interfaces/index'
import { getCurrentUser } from "lib/api/auth";
import { updateUser } from "lib/api/user";
import PersonIcon from "@material-ui/icons/Person"
import DoneIcon from '@material-ui/icons/Done';

import TextField from "@material-ui/core/TextField"
import { Link, Redirect, Switch, Route, useHistory } from "react-router-dom";
import { Button} from '@material-ui/core'

import { AuthContext } from "App";
import { Routes } from "Routes";


export const UserEdit: VFC = () => {

    const history = useHistory()
    const [name, setName] = useState<string>("")
    const { isSignedIn, setIsSignedIn, currentUser, setCurrentUser } = useContext(AuthContext)
    

    const createFormData = (): UpdateUserFormData => {
        const formData = new FormData()

        formData.append("name", name || "")
        // formData.append("image", image || "")

        return formData
    }

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const data = createFormData()


        try {
            const res = await updateUser(currentUser?.id, data)
            console.log(res)

            if (res.status === 200) {
                setCurrentUser(res.data.user)
                history.push(Routes.myPage.path)
                console.log("Update user successfully!")
                
            } else {
                console.log(res.data.message)
            }
        } catch (err) {
            console.log(err)
            console.log("Failed in updating user!")
        }

    }


    return (
        <>
            {
                currentUser ? (
                    <>
                        <div className="bg-red rounded-full h-24 w-24 flex justify-center items-start m-auto p-1 shadow-2xl" >
                            <div className="bg-white rounded-full w-full h-full flex justify-center items-center">
                                <PersonIcon fontSize="large" />
                            </div>
                        </div>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label="名前"
                            defaultValue={currentUser.name}
                            margin="dense"
                            onChange={event => setName(event.target.value)}
                        />
                        <div className="flex justify-end">
                            <Button variant="outlined" onClick={handleSubmit}>
                                update<DoneIcon className="text-green" />
                            </Button>
                        </div>
                    </>
                ) : (
                    <Link to={Routes.welcome.path} ></Link>
                )
            }
        </>
    )
}