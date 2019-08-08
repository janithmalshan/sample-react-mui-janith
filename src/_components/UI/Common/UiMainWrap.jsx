import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        // height: '100vh',
        // margin: theme.spacing(2)
    },
}));

export default function UiMainWrap() {
    const classes = useStyles();

    return (
        <Grid
            component="main"
            container
            spacing={0}
            direction="column"
            align="center"
            justify="center"
            className={classes.root}>

            <h1>ejfdksdd</h1>

        </Grid>
    );
}