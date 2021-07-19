import React, { FC, useContext } from 'react'

import { CheckmarkIcon } from 'icons/CheckmarkIcon'
import { HomeIcon } from 'icons/HomeIcon'
import { LeftIcon } from 'icons/LeftIcon'
import { TwitterIcon } from 'icons/TwitterIcon'
import { EditIcon } from 'icons/EditIcon'


import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie"


import { signOut } from "lib/api/auth"

import { AuthContext } from "App"


export const HeaderDefault: FC = () => {

    
    const { isSignedIn, currentUser } = useContext(AuthContext)
    // const doesUserWokeUp:Boolean = ...

    return (
        <div className="bg-blue flex justify-between p-2 shadow-lg">
            <div>
                <Link to="/">
                    <LeftIcon />
                </Link>
            </div>
            <div className="flex">
                <div className="mr-5">
                    {
                        isSignedIn && currentUser /* && doesUserWokeUp?*/ ? (

                            <Link to="/">
                                <TwitterIcon color="#000" /> 
                            </Link>

                        ): ("") 
                    }
                </div>
                <div >
                    {
                        isSignedIn && currentUser  ? (

                            <Link to="/">
                                <HomeIcon color="#000" /> 
                            </Link>

                        ):("")
                    }
                </div>
            </div>
        </div>
    )
}




