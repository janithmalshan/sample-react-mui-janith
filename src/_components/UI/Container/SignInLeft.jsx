import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import {ThemeDefault} from '../../UI/OverrideMui/ThemeOverride';

const useStyles = makeStyles(theme => ({
    image: {
        // backgroundImage: 'url(https://source.unsplash.com/random)',
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
    },
    txtTitle: {
        fontSize: '30px',
        fontWeight: 600,
        color: '#FFFFFF',
        margin: '75px auto 0 auto'
    },
    txtDesc: {
        fontSize: '22px',
        fontWeight: 400,
        lineHeight: '31px',
        color: '#FFFFFF',
        margin: '16px auto 0 auto'
    },
}));

export default function SignInLeft() {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            align="center"
            justify="center"
            style={{ backgroundColor: ThemeDefault.palette.primary.main }}>
            <Grid className="ui-auth-main-left">
                <img src="../../../../styles/img/app_logo_light.svg" className={classes.image}/>
                <p className={classes.txtTitle}>Welcome Back</p>
                <p className={classes.txtDesc}>The place to get your things done withour a delay.</p>
            </Grid>
        </Grid >
    );
}