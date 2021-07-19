// import React, { VFC } from "react";
// import Button from 'components/Button';
// import Input from 'components/Input';


// const SignUp:VFC = () => {
//   return (
//     <div className="min-h-screen flex justify-center items-center">
//         <div className="w-full max-w-xs">
//             <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <div className="mb-4">

//                     <h4>サインアップ</h4>

//                 </div>
//                 <div className="mb-4">

//                     <Input placeholder="ユーザー名"/>

//                 </div>
//                 <div className="mb-4">

//                     <Input placeholder="メールアドレス"　/>

//                 </div>
//                 <div className="mb-4">

//                     <Input placeholder="パスワード"/>

//                 </div>
//                 <div className="mb-6">

//                     <Input placeholder="パスワード(確認)"/>

//                 </div>
//                 <div className="flex items-center justify-between">

//                     <Button innerText={'登録'}/>

//                 </div>
//             </form>
//         </div>
//     </div>

//   )
// }

// export default SignUp


/**
 * 
 * 
 * 
 * 
 * 
 * 
 *  */


import React, { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie"

import { makeStyles, Theme } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"

import { AuthContext } from "App"
import AlertMessage from "utils/AlertMessage"
import { signUp } from "lib/api/auth"
import { SignUpData } from "interfaces/index"

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        marginTop: theme.spacing(6)
    },
    submitBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1,
        textTransform: "none"
    },
    header: {
        textAlign: "center"
    },
    card: {
        padding: theme.spacing(2),
        maxWidth: 400
    }
}))

// サインアップ用ページ
const SignUp: React.FC = () => {

    const classes = useStyles()
    const histroy = useHistory()

    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
    const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()

        const data: SignUpData = {

            name: name,
            email: email,
            password: password,
            passwordConfirmation: passwordConfirmation

        }

        try {

            const res = await signUp(data)
            console.log(res)

            if (res.status === 200) {

                // アカウント作成と同時にサインインさせてしまう
                // 本来であればメール確認などを挟むべきだが、今回はサンプルなので
                Cookies.set("_access_token", res.headers["access-token"])
                Cookies.set("_client", res.headers["client"])
                Cookies.set("_uid", res.headers["uid"])

                setIsSignedIn(true)
                setCurrentUser(res.data.data)

                histroy.push("/")

                console.log("Signed in successfully!")

            } else {

                setAlertMessageOpen(true)

            }

        } catch (err) {

            console.log(err)
            setAlertMessageOpen(true)

        }

    }

    return (
        <>
            <form noValidate autoComplete="off">

                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="サインアップ" />
                    <CardContent>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="名前"
                            value={name}
                            margin="dense"
                            onChange={event => setName(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="メールアドレス"
                            value={email}
                            margin="dense"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="パスワード"
                            type="password"
                            value={password}
                            margin="dense"
                            autoComplete="current-password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            label="パスワード（確認用）"
                            type="password"
                            value={passwordConfirmation}
                            margin="dense"
                            autoComplete="current-password"
                            onChange={event => setPasswordConfirmation(event.target.value)}
                        />
                        <div style={{ textAlign: "right" }} >
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                disabled={!name || !email || !password || !passwordConfirmation ? true : false}
                                className={classes.submitBtn}
                                onClick={handleSubmit}
                            >
                                送信
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </form>

            <AlertMessage // エラーが発生した場合はアラートを表示
                open={alertMessageOpen}
                setOpen={setAlertMessageOpen}
                severity="error"
                message="メールアドレスかパスワードが間違っています"
            />
        </>
    )
}

export default SignUp