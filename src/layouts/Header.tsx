import React, { FC, useContext } from 'react'
import { useHistory, Link, Redirect } from "react-router-dom"
import Cookies from "js-cookie"


import {
    AppBar,
    Button,
    createStyles,
    CssBaseline,
    IconButton,
    makeStyles,
    Menu,
    MenuItem,
    Theme,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import MenuIcon from '@material-ui/icons/Menu';
import WbSunnyIcon from '@material-ui/icons/WbSunny';


import { signOut } from "lib/api/auth"

import { AuthContext } from "App"

import { Routes } from 'Routes'

function ElevationScroll(props: { children: React.ReactElement }) {
    const children = props.children
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

export const HeaderDefault: FC = () => {

    const { 

        isSignedIn, setIsSignedIn , 
        currentUser , 
        isRankedIn, setIsRankedIn,
        setDailyRank

    } = useContext(AuthContext)
    // const doesUserWokeUp:Boolean = ...
    const histroy = useHistory()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignOut = async () => {
        try {
            const res = await signOut()

            if (res.data.success === true) {
                // サインアウト時には各Cookieを削除
                Cookies.remove("_access_token")
                Cookies.remove("_client")
                Cookies.remove("_uid")

                setIsSignedIn(false)
                setIsRankedIn(false)
                setDailyRank(undefined)
                
                histroy.push(Routes.welcome.path)

                console.log("Succeeded in sign out")
            } else {
                console.log("Failed in sign out")
            }
        } catch (err) {
            console.log(err)
        }

        handleClose()
    }
    
    const twitterShareLink = () => {

        return "https://twitter.com/intent/tweet?text=Hello%20Worldあ!!"
    }

    return (
        <div className="">
            <CssBaseline />
            <ElevationScroll>
                <AppBar >
                    <Toolbar className="bg-blue justify-between">
                        <Typography variant="h6" className="">
                            <Button>
                                <Link to={Routes.root.path}>
                                    <WbSunnyIcon className="text-red" fontSize="large" /> OhayoJP
                                </Link>
                            </Button>
                        </Typography>
                        <div>
                            {
                                // TODO: twitterのやつやんないと
                                // 4. あの記事通りにやってみる.
                                isSignedIn && currentUser  && isRankedIn ? (
                                    <>
                                        <Button aria-controls="" aria-haspopup="true" >
                                            <a href={twitterShareLink()} target="_blank">
                                            <TwitterIcon className="text-white" />
                                            </a>
                                        </Button>
                                    </>
                                ) : ("")
                            }
                            {
                                isSignedIn && currentUser ? (
                                    <>
                                        <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
                                            <MenuIcon className="text-white" />
                                        </Button>
                                        <Menu
                                            id="menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={handleClose}><Link to={Routes.myPage.path}>MyPage</Link></MenuItem>
                                            <MenuItem onClick={handleSignOut} className="bg-pink">Logout</MenuItem>
                                    </Menu>
                                    </>
                                ):("")
                            }
                        </div>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </div >
    )
}




