import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import variables from "../../../../styles/_variables.scss";

const UiTabs = (props) => {
    const [index, onChange] = useState(0);
    return (
        <AppBar position={"static"} color={"inherit"} style={{
            boxShadow: 'unset',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid',
            borderColor: variables.borderColor
        }}>
            <Tabs value={index} onChange={(e, val) => onChange(val)} {...props}/>
        </AppBar>
    );
};

const UiTab = (props) => {
    return (
        <Tab label={props.label} disableRipple {...props}/>
    );
};

export {UiTabs};
export {UiTab};

