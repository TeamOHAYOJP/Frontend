import React from 'react'

import {CheckmarkIcon} from 'icons/CheckmarkIcon'
import { HomeIcon } from 'icons/HomeIcon'
import { LeftIcon } from 'icons/LeftIcon'
import { TwitterIcon } from 'icons/TwitterIcon'

class Header extends React.Component {
    render(){
        return(
            <div className="conteiner bg-gradient-to-r from-red-500">
                <CheckmarkIcon color="#000"/>
                <HomeIcon color="#000"/>
                <LeftIcon color="#000"/>
                <TwitterIcon color="#000"/>
            </div>
        )
    }
}

export default Header