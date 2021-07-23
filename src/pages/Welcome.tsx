import React, { useContext } from "react"
import { Link } from 'react-router-dom';
import { AuthContext } from "App"

import Button from "@material-ui/core/Button";

import { Routes } from "Routes"

// とりあえず認証済みユーザーの名前やメールアドレスを表示
export const Welcome: React.FC = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext)


  return (
        <div style={{height: '100vh'}} className="">
            <div className="h-48 w-48 bg-red rounded-full mt-24 mx-auto"></div>

            <div style={{height: '40%'}} className="mx-auto">
                    <p className="text-2xl font-mono text-center">Good morning!</p>
                    <Button variant="contained"  color="primary" style={{width: '100%'}}><Link to={ isSignedIn ? Routes.root.path : Routes.signIn.path }>サインイン</Link></Button>
                    <Button variant="contained"  style={{width: '100%'}} ><Link to={ isSignedIn ? Routes.root.path : Routes.signUp.path } >サインアップ</Link></Button>
            </div>
        </div>
  )
}



