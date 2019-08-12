import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignInLeft from "../Container/SignInLeft";
import SignInRight from "../Container/SignInRight";

export default function SignInSide() {

    return (
        <Grid container component="main" className="ui-auth-main">
            <Grid container item xs={false} sm={5} md={6}>
                <SignInLeft/>
            </Grid>
            <Grid container item xs={12} sm={7} md={6} component={Paper} elevation={6} square>
                <SignInRight/>
            </Grid>
        </Grid>
    );
}