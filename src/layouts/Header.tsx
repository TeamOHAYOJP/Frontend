import React , { FC } from 'react'

import { CheckmarkIcon } from 'icons/CheckmarkIcon'
import { HomeIcon } from 'icons/HomeIcon'
import { LeftIcon } from 'icons/LeftIcon'
import { TwitterIcon } from 'icons/TwitterIcon'
import { EditIcon } from 'icons/EditIcon'



export const HeaderDefault: FC = () => {

    // const userSignedIn: Boolean = ...
    // const doesUserWokeUp:Boolean = ...

    return(
        <div className="bg-gradient-to-r from-red-500 flex justify-between p-2">
            <div>
                <LeftIcon />
            </div>
            <div className="flex">
                <div className="mr-5">
                    {/* userSignedIn? && doesUserWokeUp? ? <TwitterIcon color="#000" /> : "" ;*/}
                    <TwitterIcon color="#000"/>
                </div>
                <div >
                    {/* userSignedIn? ? <HomeIcon color="#000" /> : "" ;*/}
                    <HomeIcon color="#000" />
                </div>
            </div>
        </div>
    )
}

export const HeaderUserPeofile: FC = (userId)=> {

    // const userSignedIn: Boolean = ...
    // const isCurrentUser : Boolean = userId === currentUser.id

    // if(userSignedIn){

    //     return <HeaderDefault/>

    // }
    // else {

        return(
             <div className="bg-gradient-to-r from-red-500 flex justify-between p-2">
                <div>
                    <LeftIcon />
                </div>
                <div className="flex">
                    <div className="mr-5">
                        {/*  doesUserWokeUp? ? <TwitterIcon color="#000" /> : "" ;*/}
                        <TwitterIcon color="#000"/>
                    </div>
                    <div >
                        {/* userSignedIn? ? <HomeIcon color="#000" /> : "" ;*/}
                        <EditIcon color="#000" />
                    </div>
                </div>
            </div>
        )

    // }

}


/**
 * welcomPage => none
 * SignUp => onlyLeft
 * SignIn => onlyLeft
 * 
 *  
*/


