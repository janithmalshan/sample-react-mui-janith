import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {InputAuth} from "../OverrideMui/InputTypes";
import {ButtonAuth} from "../OverrideMui/ButtonTypes";
import {MsgEmailSent} from "../Common/UiMessageContent";

export default function Forgot() {

    return (
        <Grid container component="main" className="ui-auth-main">
            <Grid container
                  spacing={0}
                  direction="column"
                  justify="center"
                  className="overflow">
                <Fragment>

                    {/*<Grid className="ui-auth-main-right">
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
                    </Grid>*/}
                    <MsgEmailSent/>
                </Fragment>
            </Grid>
        </Grid>
    );
}
