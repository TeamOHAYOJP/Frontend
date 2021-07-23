import React from "react"

import { Container, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { HeaderDefault } from "layouts/Header"


interface CommonLayoutProps {
    children: React.ReactElement
}

// 全てのページで共通となるレイアウト
const AppLayout = ({ children }: CommonLayoutProps) => {

    return (
        <div className="min-h-screen bg-white font-mono ">
            <header>
                <HeaderDefault />
            </header>
            <main>
                <Container maxWidth="lg">
                    <Grid container justifyContent="center">
                        <Grid item className="">
                            <div className="mt-32">
                            {children}
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </main>

        </div>
    )
}

export default AppLayout