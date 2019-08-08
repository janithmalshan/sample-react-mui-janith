import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
// import {style} from '../../../styles/styles.css'
import {ThemeDefault} from '../../_components/muicustomized/ThemeOverride';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: ThemeDefault.palette.primary.main,
        height: '100vh'
    },
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        fontSize: '30px',
        fontWeight: 800,
        color: 'white',
        margin: '40% auto 0 auto'
    },
}));

export default function SignInLeft() {
    const classes = useStyles();

    return (
        <Grid container component="paper" className={classes.root}>
            <h1 className={classes.image}>Welcome Back </h1>
        </Grid>
    );
}