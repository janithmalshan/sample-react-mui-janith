import React from 'react';
import {styled} from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const ButtonDefault = styled(Button)({
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
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