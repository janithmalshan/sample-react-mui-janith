import React from 'react';
import Grid from "@material-ui/core/Grid";
import SignInLeft from "./Container/SignInLeft";
import {UiAlertContentWrapper} from "./Common/UiAlert";
import {ButtonAuth} from "./OverrideMui/ButtonTypes";
import Snackbar from "@material-ui/core/Snackbar";

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
        <Grid container component="main">
            <Grid container>
                <SignInLeft/>
                <h2><a href={"/login"}>login</a></h2>
                <h2><a href={"/register"}>register</a></h2>
                <h2><a href={"/dashboard"}>dashboard</a></h2>
                <h2><a href={"/datagrid"}>datagrid</a></h2>
            </Grid>
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
