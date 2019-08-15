import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import variables from '../../../../styles/_variables.scss';

const useStyles = makeStyles({
    navTile: {
        minWidth: 275,
        maxWidth: 300,
        textAlign: 'left',
        border: 'solid 1px #eef0f2',
        borderRadius: 10,
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        backgroundColor: '#ffffff',
        margin: 18,
        display: 'inline-block',
        '&:hover': {
            border: 'solid 1px',
            borderColor: variables.primaryColor,
            boxShadow: '0 3px 8px 0 rgba(103, 100, 255, 0.28)',
        },
    },
    navTileContent: {
        paddingTop: 25,
        paddingRight: 25,
        paddingBottom: 28,
        paddingLeft: 25,
    },
    image: {
        display: 'inline-block',
        margin: '0 2px',
        width: 50,
        height: 50,
    },
    title: {
        fontSize: 16,
        color: '#404553',
        // fontFamily:Gelion,
        fontWeight: 'bold',
        lineHeight: 1.6,
        marginBottom: 3,
    },
    desc: {
        maxWidth: 140,
        fontSize: 16,
        color: '#404553',
        // fontFamily:Gelion,
        fontWeight: 'normal',
        lineHeight: 1.06,
        margin: 0,
    },
});

export const UiNavMenuItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.navTile}>
            <CardActionArea>
                <CardContent className={classes.navTileContent}>
                    <Icon className={classes.image}>
                        {props.iconUrl}</Icon>
                    <Typography className={classes.title} component="h2">
                        {props.tileTitle}
                    </Typography>
                    <Typography className={classes.desc} component="p">
                        {props.tileDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
