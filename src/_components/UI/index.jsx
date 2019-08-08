import React from 'react';
import Grid from "@material-ui/core/Grid";
import SignInLeft from "./Container/SignInLeft";

export default function SignInSide() {

    return (
        <Grid container component="main">
            <Grid container>
                <SignInLeft/>
                <h2><a href={"/login"}>login</a></h2>
                <h2><a href={"/register"}>register</a></h2>
                <h2><a href={"/dashboard"}>dashboard</a></h2>
            </Grid>
        </Grid>
    );
}
