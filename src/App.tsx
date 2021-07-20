import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
// import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
    
import AppLayout from "layouts/AppLayout"


import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

import { Routes } from 'Routes'

// グローバルで扱う変数・関数
export const AuthContext = createContext({} as {

    loading       : boolean
    setLoading    : React.Dispatch<React.SetStateAction<boolean>>

    isSignedIn    : boolean
    setIsSignedIn : React.Dispatch<React.SetStateAction<boolean>>

    currentUser   : User | undefined
    setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>

})

const App: React.FC = () => {


    const [loading, setLoading]         = useState<boolean>(true)
    const [isSignedIn, setIsSignedIn]   = useState<boolean>(false)
    const [currentUser, setCurrentUser] = useState<User | undefined>()

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

            console.log(err)

        }

        setLoading(false)

    }

    useEffect(() => {
        handleGetCurrentUser()
    }, [setCurrentUser])


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
            <AuthContext.Provider value={{ loading, setLoading, isSignedIn, setIsSignedIn, currentUser, setCurrentUser }}>
                <AppLayout>
                    <Switch>
                        <Route {...Routes.root} />
                        <Route {...Routes.welcome} />
                        <Route {...Routes.signUp}/>
                        <Route {...Routes.signIn} />
                        <Route {...Routes.userProfile} />
                        <Route {...Routes.userEdit} />

                        <Private>
                            <Switch>
                            </Switch>
                        </Private>
                    </Switch>
                </AppLayout>
            </AuthContext.Provider>
        </Router>
    )
}

export default App