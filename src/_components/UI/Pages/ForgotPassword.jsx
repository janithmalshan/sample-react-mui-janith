import React, {Fragment} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import SignInLeft from "../Container/SignInLeft";
import {UiActionWrBottom, UiPaper} from "../Common/UiMainWrap";
import {UiField, UiFieldSingleWr} from "../Common/UiFormElements";
import {InputAuth, InputDefault} from "../OverrideMui/InputTypes";
import {ButtonAuth, ButtonDefault} from "../OverrideMui/ButtonTypes";

export default function Forgot() {

    return (
        <Grid container component="main" className="ui-auth-main">
            <Grid container item component={Paper} elevation={6} square>
                <Fragment>

                    <UiPaper>
                        <h1 className="header-txt t-center">
                            Forgot Your Password?
                        </h1>
                        <form className="clearfix">
                            <InputAuth
                                id="user-email-field"
                                label="Email Address"
                                name="email"
                                autoComplete=""
                            />

                            <div className="margin-ex-d"/>

                            <ButtonAuth
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                <span className="t-bold">Request New Password</span>
                            </ButtonAuth>

                            <ButtonAuth
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >
                                Back to Login
                            </ButtonAuth>

                        </form>
                    </UiPaper>
                </Fragment>
            </Grid>
        </Grid>
    );
}