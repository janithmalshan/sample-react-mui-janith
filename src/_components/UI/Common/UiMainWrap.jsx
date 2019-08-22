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
            <div className="ui-main-wr-inner" {...props}></div>

            {/*<Grid
                component="main"
                container
                spacing={0}
                direction="column"
                align="center"
                justify="center"
                className={classes.root}>

                <h1>Title</h1>
                <div/>

            </Grid>*/}
        </div>
    );
};

export const UiPaper = (props) => {

    return (
        <div className="ui-main-wr-paper" {...props}>
            {/**/}
        </div>
    );
};

export const UiTitleWr = (props) => {

    return (
        <div className="ui-title-wr clearfix" {...props}/>
    );
};

export const UiActionWrTop = (props) => {

    return (
        <div className="ui-action-wr clearfix" {...props}/>
    );
};

export const UiActionWrBottom = (props) => {

    return (
        <div className="t-right ui-action-wr" {...props}/>
    );
};