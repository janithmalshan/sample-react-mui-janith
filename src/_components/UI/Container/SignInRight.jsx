import React from 'react';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {InputAuth} from "../../UI/OverrideMui/InputTypes";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import {ButtonAuth} from "../../UI/OverrideMui/ButtonTypes";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInLeft() {
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form className={classes.form} noValidate>
                <InputAuth
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <InputAuth
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <ButtonAuth
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Login
                </ButtonAuth>
                {/*<ButtonDefault>4551145</ButtonDefault>*/}
                {/*<ButtonAuth variant="outlined" color="primary" className={classes.button}>1RFD1145</ButtonAuth>*/}
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Having trouble logging in?
                        </Link>
                    </Grid>
                </Grid>
                <br/>
                <ButtonAuth
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                >
                    New to Admin? <b>&nbsp; Sign Up Here</b>
                </ButtonAuth>
            </form>
        </div>
    );
}