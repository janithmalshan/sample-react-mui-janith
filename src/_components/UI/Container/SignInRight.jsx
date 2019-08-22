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
import {UiAlertContentWrapper} from "../Common/UiAlert";
import Snackbar from "@material-ui/core/Snackbar";

const useStyles = makeStyles(theme => ({
/*    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },*/
}));

export default function SignInLeft() {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justify="center"
            className="overflow"
        >
            <Grid className="ui-auth-main-right">
                <h1 className="header-txt">
                    Login
                </h1>
                <form className="clearfix" noValidate>
                    <InputAuth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete=""
                        error={true}
                        helperText="Enter valid email address"
                    />
                    <InputAuth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        error={false}
                        // helperText="Invalid password"
                    />
                    {/*<FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />*/}
                    <a href="#" className="pw-reset f-right">
                        Having trouble logging in?
                    </a>
                    <ButtonAuth
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        <span className="t-bold">Login</span>
                    </ButtonAuth>

                    <p className="txt-or">or</p>

                    <ButtonAuth
                        type="submit"
                        fullWidth
                        variant="outlined"
                        color="primary"
                    >
                        New to Admin? <span className="t-bold">&nbsp; Sign Up Here</span>
                    </ButtonAuth>
                </form>
            </Grid>
        </Grid>
    );
}