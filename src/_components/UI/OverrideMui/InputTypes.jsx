import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {styled} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
// import makeStyles from "@material-ui/core/styles/makeStyles";

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

        <div>
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
        </div>

    );
};

const InputDefault = styled(TextField)({
    fontSize: '14px',
    height: 40,
    borderRadius: '4px',
    boxShadow: 'unset',
    padding: '0 30px',
    textTransform: 'unset',
    fontWeight: 'bold'
});

export {InputDefault};
export {InputAuth}