import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from "@material-ui/core/Icon";
import variables from '../../../../styles/_variables.scss';

const useStyles = makeStyles({
   
});

export const UiSubNavMenuItem = (props) => {
    const classes = useStyles();

    return (
        <Card className="subNavTile">
            <CardActionArea>
                <CardContent className="navTileContent">
                    <h2 className="subNavCount">{props.count}</h2>
                    <Icon className="plus">
                        {props.iconUrl}</Icon>
                    <Typography className="title" component="h2">
                        {props.tileTitle}
                    </Typography>
                    <Typography className="desc" component="p">
                        {props.tileDesc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};
