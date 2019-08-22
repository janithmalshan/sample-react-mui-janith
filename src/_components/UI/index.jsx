import React from 'react';
import Grid from "@material-ui/core/Grid";
import SignInLeft from "./Container/SignInLeft";
import {UiAlertContentWrapper} from "./Common/UiAlert";
import {ButtonAuth, ButtonDefault, ButtonDelete, ButtonSelect} from "./OverrideMui/ButtonTypes";
import Snackbar from "@material-ui/core/Snackbar";
import {BtnIconAdd} from "./Common/SvgIcons";

export default function SignInSide() {

    const [open, setOpen] = React.useState(false);

    function handleClick() {
        setOpen(true);
    }

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <Grid component="main">
            <div>
                <SignInLeft/>

                <div>
                    <h2><a href={"/login"}>login</a></h2>
                    <h2><a href={"/register"}>register</a></h2>
                    <h2><a href={"/dashboard"}>dashboard</a></h2>
                    <h2><a href={"/datagrid"}>datagrid</a></h2>
                    <h2><a href={"/detail"}>detail view</a></h2>
                    <h2><a href={"/modify"}>modify view</a></h2>
                </div>
                <div className="block ui-action-wr">
                    <h2>Buttons</h2>
                    <ButtonAuth
                        variant="contained"
                        color="primary">Authenticate Primary</ButtonAuth>
                    <ButtonAuth
                        variant="outlined"
                        color="primary">Authenticate Primary Stroked</ButtonAuth>
                    <ButtonDefault
                        variant="contained"
                        color="primary">Default Primary</ButtonDefault>
                    <ButtonDefault
                        variant="outlined"
                        color="primary">Default Primary Stroked</ButtonDefault>
                    <ButtonDefault
                        variant="contained"
                        color="primary"
                        className="ui-img-btn"><BtnIconAdd className="ui-btn-icon"/>Add New</ButtonDefault>
                    <ButtonDelete>Delete</ButtonDelete>
                    <ButtonSelect>Delete</ButtonSelect>
                </div>
                <div className="block">
                    <h2>Svg Icons</h2>
                </div>
            </div>
            <ButtonAuth
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                open alert
            </ButtonAuth>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <UiAlertContentWrapper
                    onClose={handleClose}
                    variant="success"
                    message="This is a success message!"
                />
            </Snackbar>

            <div>
                <UiAlertContentWrapper
                    variant="error"
                    // className={classes.margin}
                    message="This is an error message!"
                />
                <UiAlertContentWrapper
                    variant="warning"
                    // className={classes.margin}
                    message="This is a warning message!"
                />
                <UiAlertContentWrapper
                    variant="info"
                    // className={classes.margin}
                    message="This is an information message!"
                />
                <UiAlertContentWrapper
                    variant="success"
                    // className={classes.margin}
                    message="This is a success message!"
                />
            </div>
        </Grid>
    );
}
