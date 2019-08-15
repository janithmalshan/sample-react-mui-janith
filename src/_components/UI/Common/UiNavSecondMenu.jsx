// import React from "react";
// import {makeStyles} from "@material-ui/core/styles";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer/SwipeableDrawer";
// import {IconLock, MenuIconClose, MenuIconOpen} from "./SvgIcons";
// import IconButton from "@material-ui/core/IconButton/IconButton";
// import Fab from '@material-ui/core/Fab';
//
// export const UiNavSecondMenu = (props) => {
//     const [state, setState] = React.useState({
//         top: false,
//     });
//
//     const toggleSecondDrawer = (side, open) => event => {
//         if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//
//         setState({...state, [side]: open});
//     };
//     const fullList = side => (
//         <div
//             role="presentation"
//             onKeyDown={toggleSecondDrawer(side, false)}
//             className="ui-main-nav"
//         >
//             <div className="ui-main-nav-menu-wr">
//                 <h2 className="nav-menu-txt">Menu</h2>
//                 <IconButton className="nav-menu-btn" onClick={toggleSecondDrawer('top', false)}><MenuIconClose/></IconButton>
//                 <div className="nav-menu" {...props}/>
//             </div>
//         </div>
//     );
//
//     return (
//         <div className="ui-main-nav-bar clearfix">
//             <IconButton className="nav-menu-btn" onClick={toggleSecondDrawer('top', true)}><MenuIconOpen/></IconButton>
//             <SwipeableDrawer
//                 anchor="top"
//                 open={state.top}
//                 onClose={toggleSecondDrawer('top', false)}
//                 onOpen={toggleSecondDrawer('top', true)}
//                 elevation={0}
//             >
//                 {fullList('top')}
//             </SwipeableDrawer>
//             <img src="../../../../styles/img/app_logo_dark.svg" className="nav-logo"/>
//         </div>
//     );
// };
