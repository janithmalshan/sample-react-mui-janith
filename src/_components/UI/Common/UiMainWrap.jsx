import Grid from "@material-ui/core/Grid";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        // height: '100vh',
        // margin: theme.spacing(2)
    },
}));

export const UiMainWrap = (props) => {
    const classes = useStyles();

    return (
        <div className="ui-main-wr">

            {/*<Grid
                component="main"
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.root}>

                <h1>Title</h1>
                <div {...props}/>

            </Grid>*/}
        </div>
    );
}