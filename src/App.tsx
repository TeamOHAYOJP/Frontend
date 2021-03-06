import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
// import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import AppLayout from "layouts/AppLayout"


import { getCurrentUser } from "lib/api/auth"
import { getIsRankedIn } from "lib/api/ranking"
import { User } from "interfaces/index"

import { Routes } from 'Routes'
import Cookies from "js-cookie"
import { DailyRanking } from "interfaces/ranking"

// グローバルで扱う変数・関数
export const AuthContext = createContext({} as {

    loading       : boolean
    setLoading    : React.Dispatch<React.SetStateAction<boolean>>

    isSignedIn    : boolean
    setIsSignedIn : React.Dispatch<React.SetStateAction<boolean>>

    currentUser   : User | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>

    isRankedIn      : boolean
    setIsRankedIn   : React.Dispatch<React.SetStateAction<boolean>>

    dailyRank       : DailyRanking | undefined
    setDailyRank    : React.Dispatch<React.SetStateAction<DailyRanking | undefined>>
})

const App: React.FC = () => {

    const [loading, setLoading]         = useState<boolean>(true)
    const [isSignedIn, setIsSignedIn]   = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<User | undefined>()
    const [isRankedIn, setIsRankedIn]   = useState<boolean>(false)
    const [dailyRank, setDailyRank]     = useState<DailyRanking | undefined>()
    // 認証済みのユーザーがいるかどうかチェック
    // 確認できた場合はそのユーザーの情報を取得
    const handleGetCurrentUser = async () => {

        try {

            const res = await getCurrentUser()
            console.log(res)

            if (res?.status === 200) {
                setIsSignedIn(true)
                setCurrentUser(res?.data.currentUser)
            } else {
                console.log("No current user")
            }

        } catch (err) {
            console.log("falsed to get currentUser")
            console.log(err)

        }


    }
    const handleSetIsRankedIn = async () =>{

        try {

            const res = await getIsRankedIn()
            console.log(res)

            if (res?.status === 200) {
                setIsRankedIn(res.data.isRankedIn)
                setDailyRank(res.data.ranking)
            } else {
                console.log("No current user")
            }

        } catch (err) {
            console.log("failed to set isRankedIn")
            console.log(err)

        }

        setLoading(false)
    }



    useEffect(() => {
        handleGetCurrentUser()
    }, [setCurrentUser])
    
    useEffect(() => {
        handleSetIsRankedIn()
    },[])


    // ユーザーが認証済みかどうかでルーティングを決定
    // 未認証だった場合は「/signin」ページに促す
    const Private = ({ children }: { children: React.ReactElement }) => {
        if (!loading) {
            if (isSignedIn) {
                return children
            } else {
                return <Redirect to={Routes.welcome.path} />
            }
        } else {
            return <></>
        }
    }

    return (
        <Router>
            <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser, isRankedIn, setIsRankedIn, dailyRank, setDailyRank }}>
                <AppLayout>
                    <Switch>
                                <Route {...Routes.welcome} />
                                <Route {...Routes.signUp}/>
                                <Route {...Routes.signIn} />
                        <Private>
                            <Switch>
                                <Route {...Routes.root} />
                                <Route {...Routes.userProfile} />
                                <Route {...Routes.userEdit} />
                            </Switch>
                        </Private>
                    </Switch>
                </AppLayout>
            </AuthContext.Provider>
        </Router>
    )
}

export default App