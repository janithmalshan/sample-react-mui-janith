import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import variables from '../../../../styles/_variables.scss';

const useStyles = makeStyles({
    plus: {
        display: 'inline-block',
        position: 'absolute',
        top: 40,
        right: 30,
        cursor: 'pointer'    
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

export const UiSubNavMenuItem = (props) => {
    const classes = useStyles();

    return (
        <Card className="subNavTile">
            <CardActionArea>
                <CardContent className="navTileContent">
                    <h2 className="subNavCount">{props.count}</h2>
                    <Icon className={classes.plus}>
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
