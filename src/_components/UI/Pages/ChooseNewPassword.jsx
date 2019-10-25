import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {InputAuth} from "../OverrideMui/InputTypes";
import {ButtonAuth} from "../OverrideMui/ButtonTypes";
import {MsgResetSuccess} from "../Common/UiMessageContent";

export default function Forgot() {

    return (
        <Grid container component="main" className="ui-auth-main">
            <Grid container
                  spacing={0}
                  direction="column"
                  justify="center"
                  className="overflow">
                <Fragment>

                    <Grid className="ui-auth-main-right">
                        <h1 className="header-txt t-center">
                            Choose a New Password
                        </h1>
                        <form className="clearfix">
                            <InputAuth
                                id="user-email-field"
                                label="New Password"
                                name="email"
                                autoComplete=""
                            />

                            <InputAuth
                                id="user-email-field"
                                label="Confirm New Password"
                                name="email"
                                autoComplete=""
                            />

                            <div>
                                <p className="pw-reset-criteria"><b>Your password must contain :</b></p>
                                <ul className="pw-reset-criteria-ul">
                                    <li>
                                        <p className="pw-reset-criteria">At least</p>
                                    </li>
                                    <li>
                                        <p className="pw-reset-criteria">At least</p>
                                    </li>
                                    <li>
                                        <p className="pw-reset-criteria">At least</p>
                                    </li>
                                    <li>
                                        <p className="pw-reset-criteria">At least</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="margin-ex-d"/>

                            <ButtonAuth
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                <span className="t-bold">Set New Password</span>
                            </ButtonAuth>

                        </form>
                    </Grid>
                    <MsgResetSuccess/>
                </Fragment>
            </Grid>
        </Grid>
    );
}