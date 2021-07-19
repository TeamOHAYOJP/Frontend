import React, { FC, useContext } from 'react'

import { CheckmarkIcon } from 'icons/CheckmarkIcon'
import { HomeIcon } from 'icons/HomeIcon'
import { LeftIcon } from 'icons/LeftIcon'
import { TwitterIcon } from 'icons/TwitterIcon'
import { EditIcon } from 'icons/EditIcon'


import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { makeStyles, Theme } from "@material-ui/core/styles"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import { signOut } from "lib/api/auth"

import { AuthContext } from "App"

const useStyles = makeStyles((theme: Theme) => ({
    iconButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: "none",
        color: "inherit"
    },
    linkBtn: {
        textTransform: "none"
    }
}))

export const Header: React.FC = () => {

    const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext)
    const classes = useStyles()
    const histroy = useHistory()

    const handleSignOut = async (e: React.MouseEvent<HTMLButtonElement>) => {
        try {
            const res = await signOut()

            if (res.data.success === true) {
                // サインアウト時には各Cookieを削除
                Cookies.remove("_access_token")
                Cookies.remove("_client")
                Cookies.remove("_uid")

                setIsSignedIn(false)
                histroy.push("/signin")

                console.log("Succeeded in sign out")
            } else {
                console.log("Failed in sign out")
            }
        } catch (err) {
            console.log(err)
        }
    }

    const AuthButtons = () => {
        // 認証完了後はサインアウト用のボタンを表示
        // 未認証時は認証用のボタンを表示
        if (!loading) {
            if (isSignedIn) {
                return (
                    <Button
                        color="inherit"
                        className={classes.linkBtn}
                        onClick={handleSignOut}
                    >
                        サインアウト
                    </Button>
                )
            } else {
                return (
                    <Button
                        component={Link}
                        to="/signin"
                        color="inherit"
                        className={classes.linkBtn}
                    >
                        サインイン
                    </Button>
                )
            }
        } else {
            return <></>
        }
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.iconButton}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component={Link}
                        to="/"
                        variant="h6"
                        className={classes.title}
                    >
                        Sample
                    </Typography>
                    <AuthButtons />
                </Toolbar>
            </AppBar>
        </>
    )
}
/**
 * 
 * 
 * 
 
*/
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




