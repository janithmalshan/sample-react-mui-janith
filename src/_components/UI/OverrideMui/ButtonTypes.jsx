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
    fontSize: '10px',
    height: 48,
});

export {ButtonDefault};
export {ButtonAuth};