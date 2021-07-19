import React, { useState, useEffect, createContext } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
// import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
    
import AppLayout from "layouts/AppLayout"
// import Home from "pages/Home"
import SignUp from "pages/SignUp"
import SignIn from "pages/SignIn"
import { Ranking } from "pages/Ranking"
import { Welcome } from "pages/Welcome"
import { getCurrentUser } from "lib/api/auth"
import { User } from "interfaces/index"

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
                return <Redirect to="/welcome" />
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
                        <Route exact path="/" component={Ranking} />
                        <Route exact path="/welcome" component={Welcome} />
                        <Route exact path="/signup" component={SignUp} />
                        <Route exact path="/signin" component={SignIn} />
                        <Private>
                            <Switch>
                            <Route exact path="/users" component={Welcome} />
                            </Switch>
                        </Private>
                    </Switch>
                </AppLayout>
            </AuthContext.Provider>
        </Router>
    )
}

export default App