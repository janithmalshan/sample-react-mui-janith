import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {makeStyles} from '@material-ui/core/styles';
import SignInLeft from "../Container/SignInLeft";
import SignInRight from "../Container/SignInRight";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid container item={false} xs={false} sm={5} md={6}>
                <SignInLeft/>
            </Grid>
            <Grid item xs={12} sm={7} md={6} component={Paper} elevation={6} square>
                <SignInRight/>
            </Grid>
        </Grid>
    );
}