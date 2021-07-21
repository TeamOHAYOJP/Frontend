import React, { useState, useContext } from "react"
import { useHistory, Link } from "react-router-dom"
import Cookies from "js-cookie"

import { makeStyles, Theme } from "@material-ui/core/styles"
import { Typography } from "@material-ui/core"
import TextField from "@material-ui/core/TextField"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardHeader from "@material-ui/core/CardHeader"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"

import { AuthContext } from "App"
import AlertMessage from "utils/AlertMessage"
import { signIn } from "lib/api/auth"
import { SignInData } from "interfaces/index"

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
    },
    box: {
        marginTop: "2rem"
    },
    link: {
        textDecoration: "none"
    }
}))

// サインイン用ページ
const SignIn: React.FC = () => {

    const classes = useStyles()
    const history = useHistory()

    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext)

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [alertMessageOpen, setAlertMessageOpen] = useState<boolean>(false)

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {

        e.preventDefault()

        const data: SignInData = {

            email: email,
            password: password

        }

        try {

            const res = await signIn(data)
            console.log(res)

            if (res.status === 200) {

                // 成功した場合はCookieに各値を格納
                Cookies.set("_access_token", res.headers["access-token"])
                Cookies.set("_client", res.headers["client"])
                Cookies.set("_uid", res.headers["uid"])

                setIsSignedIn(true)
                setCurrentUser(res.data.data)

                history.push("/")

                console.log("Signed in successfully!")

            } else {

                setAlertMessageOpen(true)

            }

        } catch (err) {

            console.log(err)
            setAlertMessageOpen(true)

        }

    }
    // TODO: SignIn & SignUP
    // TODO: 色の微調整をしたい
    return (
        <>
            <form noValidate autoComplete="off">

                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="サインイン" />
                    <CardContent>
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
                            placeholder="6文字以上"
                            value={password}
                            margin="dense"
                            autoComplete="current-password"
                            onChange={event => setPassword(event.target.value)}
                        />
                        <div style={{ textAlign: "right" }} >
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                disabled={!email || !password ? true : false}
                                className={classes.submitBtn}
                                onClick={handleSubmit}
                            >
                                送信
                            </Button>
                        </div>
                        <Box textAlign="center" className={classes.box}>
                            <Typography variant="body2">
                                まだアカウントをお持ちでない方は
                                <Link to="/signup" className={classes.link}>
                                    こちら
                                </Link>
                                から作成してください。
                            </Typography>
                        </Box>
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

export default SignIn