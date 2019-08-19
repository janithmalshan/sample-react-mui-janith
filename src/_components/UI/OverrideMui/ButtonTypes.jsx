import React from 'react';
import {styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ButtonDefault = styled(Button)({
    fontSize: '14px',
    height: 40,
    borderRadius: '4px',
    color: 'white',
    boxShadow: 'unset',
    padding: '0 30px',
    textTransform: 'unset',
    fontWeight: 'bold'
});
const ButtonAuth = styled(Button)({
    fontSize: '16px',
    height: 50,
    borderRadius: '4px',
    margin: '8px 0',
    lineHeight: '19px',
    textTransform: 'unset',
    padding: '14px 16px 17px',
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
    borderWidth: '2px',
    '&:hover': {
        borderWidth: '2px',
    },
    '&:active': {
        borderWidth: '2px',
    },
    '&:focus': {
        borderWidth: '2px',
    },
});

export {ButtonDefault};
export {ButtonAuth};