import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// import makeStyles from "@material-ui/core/styles/makeStyles";
import Select from "@material-ui/core/Select/";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import {CheckBoxIcon, CheckBoxOutlineBlankIcon} from "../Common/SvgIcons";
import Radio from "@material-ui/core/Radio";

const useStyles = makeStyles({
    cssLabel: {
        color: '#b0b6c1',
        fontSize: '14px',
        fontFamily: [
            'Gelion',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        lineHeight: '20px',
        transform: 'translate(20px, 15px) scale(1)',
        '&$cssFocused': {
            color: '#8c95a8',
            transform: 'translate(14px, -8px) scale(0.75)',
        },
        '&cssShrink': {
            color: '#8c95a8',
            transform: 'translate(10px, -8px) scale(0.75)',
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: '#b0b6c1',
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
            borderColor: '#8c95a8'
        },
    },
    cssFocused: {},
    cssShrink: {},
    disabled: {},
    focused: {},
    error: {},
    notchedOutline: {
        borderColor: '#b0b6c1',
        borderRadius: "4px",
    },
});

const InputAuth = (props) => {

    const classes = useStyles();
    return (
        <TextField
            className={'testInput'}
            InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                    shrink: classes.cssShrink,
                },
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                },
            }}
            variant="outlined"
            margin="normal"
            required={props.required}
            fullWidth
            id={props.id}
            label={props.label}
            name={props.name}
            autoComplete={props.autoComplete}
            type={props.type}
            helperText={props.helperText}
            error={props.error}
            // autoFocus
        />
    );
};

const InputDefault = (props) => {

    const classes = useStyles();
    return (
        <TextField
            className={'ui-input'}
            InputLabelProps={{
                classes: {
                    root: classes.cssLabel,
                    focused: classes.cssFocused,
                },
            }}
            InputProps={{
                classes: {
                    root: classes.cssOutlinedInput,
                    focused: classes.cssFocused,
                    notchedOutline: classes.notchedOutline,
                },
            }}
            variant="outlined"
            margin="none"
            required={props.required}
            // fullWidth
            id={props.id}
            name={props.name}
            autoComplete={props.autoComplete}
            type={props.type}
            helperText={props.helperText}
            error={props.error}
            placeholder={props.placeholder}
            multiline={props.multiline}
            rowsMax="20"
        />
    );
};

const SelectDefault = (props) => {

    // const classes = useStyles();
    return (
        <Select
            value={props.selectvalue}
            onChange={props.onChange}
            input={<OutlinedInput fullWidth name={props.name} id={props.id} labelWidth={0}/>}
            {...props}
        />
    );
};

const OptionDefault = (props) => {
    const classes = useStyles();

    return (
        <MenuItem
            // value={props.value}
            {...props}
        />
    );
};

const CheckboxDefault = (props) => {

    return (
        <Checkbox
            style={{width: 36, height: 36, padding: 0, marginTop: '-2px', marginLeft: '2px'}}
            icon={<CheckBoxOutlineBlankIcon/>}
            checkedIcon={<CheckBoxIcon/>}
            {...props}
        />
    );
};

const RadioDefault = (props) => {

    return (
        <Radio
            style={{width: 30, height: 30, padding: 0, fontSize: 10, marginTop: '-2px', marginLeft: '4px'}}
            color={"secondary"}
            className="ui-radio"
            {...props}
        />
    );
};

export {InputDefault};
export {InputAuth}
export {SelectDefault}
export {OptionDefault}
export {CheckboxDefault}
export {RadioDefault}