import React from 'react';

import { createMuiTheme } from '@material-ui/core/styles';

const ThemeDefault = createMuiTheme({
    palette: {
        primary: {
            //light: '#00eedd',// light: will be calculated from palette.primary.main,
            main: '#6764ff',
            //dark: '#44ff00',// dark: will be calculated from palette.primary.main,
            //contrastText: '#ff4400',// contrastText: will be calculated to contrast with palette.primary.main
        },
        // secondary: {
        //     light: palette.secondary.A200,
        //     main: palette.secondary.A400,
        //     dark: palette.secondary.A700,
        //     contrastText: getContrastText(palette.secondary.A400),
        // },
        // error: {
        //     light: palette.error[300],
        //     main: palette.error[500],
        //     dark: palette.error[700],
        //     contrastText: getContrastText(palette.error[500]),
        // },
        type: 'light',
        // type: 'dark',
    },
});
const ThemeDefaultAuth = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiTextField: {
            // Name of the rule
            root: {
                // Some CSS
                // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                // borderRadius: 3,
                // border: 0,
                // color: 'white',
                height: '50px',
                // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            }
        },
        MuiInput: {
            root: {
                padding: '0 30px',
            }
        }
    },
});

export {ThemeDefault};
export {ThemeDefaultAuth};