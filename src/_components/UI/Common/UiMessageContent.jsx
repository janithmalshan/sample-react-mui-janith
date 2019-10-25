import Grid from "@material-ui/core/Grid";
import React from "react";
import {ButtonAuth} from "../OverrideMui/ButtonTypes";
import SentSuccess from "../../../../styles/img/ic_email_sent.png";
import ResetSuccess from "../../../../styles/img/ic_reset_success.png";

export const MsgEmailSent = () => {

    return (
        <div>
            <Grid className="ui-auth-main-right">
                <h1 className="header-txt t-center">
                    Forgot Your Password?
                </h1>
                <p className="pw-reset-t">An email has been sent to your email address <span
                    className="pw-reset-t__highlight">nirmani@ideahub.lk</span></p>

                <div className="margin-ex-d t-center">
                    <img src={SentSuccess} height="70"/>
                </div>
                <div className="margin-ex-d"/>
                <ButtonAuth
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                >
                    Back to Login
                </ButtonAuth>
            </Grid>
        </div>
    );
};

export const MsgResetSuccess = (props) => {

    return (
        <div>

            <Grid className="ui-auth-main-right">
                <h1 className="header-txt t-center">
                    Password Reset Successful!
                </h1>
                <p className="pw-reset-t">You can now login using your new password</p>

                <div className="margin-ex-d t-center">
                    <img src={ResetSuccess} height="65"/>
                </div>
                <div className="margin-ex-d"/>
                <ButtonAuth
                    type="submit"
                    fullWidth
                    variant="outlined"
                    color="primary"
                >
                    Back to Login
                </ButtonAuth>
            </Grid>
        </div>
    );
};