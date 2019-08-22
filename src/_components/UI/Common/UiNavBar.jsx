import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
import {IconLock, MenuIconClose, MenuIconOpen} from "./SvgIcons";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Fab from '@material-ui/core/Fab';

export const UiNavBar = (props) => {
    return (
        <div>

            <UiNavBarMenu {...props} username={props.username}/>

        </div>
    );
};

const UiNavBarMenu = (props) => {
    const [state, setState] = React.useState({
        top: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    const fullList = side => (
        <div
            role="presentation"
            // onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
            className="ui-main-nav"
        >
            <UiNavBarHeader closeMenu={toggleDrawer('top', false)}/>
            <div className="ui-main-nav-menu-wr">
                <h2 className="nav-menu-txt">Menu</h2>
                <div className="nav-menu" {...props}/>
            </div>
        </div>
    );

    return (
        <div className="ui-main-nav-bar clearfix">
            <IconButton className="nav-menu-btn" onClick={toggleDrawer('top', true)}><MenuIconOpen/></IconButton>
            <SwipeableDrawer
                anchor="top"
                open={state.top}
                onClose={toggleDrawer('top', false)}
                onOpen={toggleDrawer('top', true)}
                elevation={0}
            >
                {fullList('top')}
            </SwipeableDrawer>
            <img src="../../../../styles/img/app_logo_light.svg" className="nav-logo"/>
            <UiNavUser username={props.username}/>
        </div>
    );
};

const UiNavBarHeader = (props) => {
    return (
        <div className="ui-main-nav-bar clearfix">
            <IconButton className="nav-menu-btn" onClick={props.closeMenu}><MenuIconClose/></IconButton>
            <img src="../../../../styles/img/app_logo_light.svg" className="nav-logo"/>
        </div>
    );
};

const UiNavUser = (props) => {
    return (
        <div className="ui-main-nav-bar-right f-right">
            <p className="user-name">{props.username}</p>

            <Fab size="small" color="secondary">
                <IconLock/>
            </Fab>
        </div>
    );
};