import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { Header, HeaderDefault } from "layouts/Header"

const useStyles = makeStyles(() => ({
    container: {
        marginTop: "3rem"
    }
}))

interface CommonLayoutProps {
    children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const AppLayout = ({ children }: CommonLayoutProps) => {
    const classes = useStyles()

    return (
        <div className="min-h-screen bg-white">
            <header>
                <HeaderDefault />
            </header>
            <main>
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            {children}
                        </Grid>
                    </Grid>
                </Container>
            </main>

        </div>
    )
}

export default AppLayout