import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import {ButtonIconMore} from './SvgIcons'

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
));
const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const StyledIconButton = withStyles({
    root: {
        backgroundColor: '#6764FF',
        width: 38,
        height: 38,
        '&:hover': {
            backgroundColor: 'rgb(72, 70, 178)',
        },
    }
})(IconButton);

export default function UiMoreButton(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    let items=[];
    for(let i=0;i<props.items.length;i++){
        items.push(<StyledMenuItem key={[i]}><ListItemText primary={ props.items[i] }/></StyledMenuItem>);
    }

    return (
        <div>
            <StyledIconButton
                className='ui-button__more'
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <ButtonIconMore/>
            </StyledIconButton>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {items}
            </StyledMenu>
        </div>
    );

}


/*<StyledMenuItem>
    <ListItemText primary="one"/>
</StyledMenuItem>
<StyledMenuItem>
    <ListItemText primary="two"/>
</StyledMenuItem>
<StyledMenuItem>
    <ListItemText primary="three"/>
</StyledMenuItem>*/
