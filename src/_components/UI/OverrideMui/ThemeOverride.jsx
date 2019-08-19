import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import GelionRegular from '../../../../styles/font/gelion-regular.woff2';
import GelionBold from '../../../../styles/font/gelion-bold.woff2';
import variables from '../../../../styles/_variables.scss';

const gelion = {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
    local('Gelion'),
    local('Gelion-Regular'),
    url(${GelionRegular}) format('woff2')
  `,
};
const gelionBold = {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 600,
    src: `
    local('Gelion'),
    local('Gelion-Bold'),
    url(${GelionBold}) format('woff2')
  `,
};

const ThemeDefault = createMuiTheme({
    palette: {
        primary: {
            //light: '#00eedd',// light: will be calculated from palette.primary.main,
            main: variables.primaryColor,
            //dark: '#44ff00',// dark: will be calculated from palette.primary.main,
            //contrastText: '#ff4400',// contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: palette.secondary.A200,
            main: variables.primaryColor,
            // dark: palette.secondary.A700,
            // contrastText: getContrastText(palette.secondary.A400),
        },
        // error: {
        //     light: palette.error[300],
        //     main: palette.error[500],
        //     dark: palette.error[700],
        //     contrastText: getContrastText(palette.error[500]),
        // },
        type: 'light',
        // type: 'dark',
        background: {
            paper: '#33ff55',
            default: '#fafcfe',
        },
    },
    typography: {
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
        // fontFamily: ""Gelion", "Helvetica", "Arial", sans-serif",
        fontSize: 14,
        // fontWeightLight: 300,
        // fontWeightRegular: 400,
        // fontWeightMedium: 500,
        // fontWeightBold: 700,
    },
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                color: 'white',
            },
        },
        MuiCssBaseline: {
            '@global': {
                '@font-face': [gelion, gelionBold],
            },
        },
        MuiPaper: {
            root: {
                // boxShadow: "0px 6px 6px -3px rgba(0, 0, 0, 0.05), 0px 5px 10px 6px rgba(0, 0, 0, 0.03), 0px 4px 6px 3px rgba(0, 0, 0, 0.02)",
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(150, 150, 150, 0.1)',
            }
        },
        MuiFab: {
            root: {
                boxShadow: '0 2px 3px 0 rgba(0, 0, 0, 0.17)'
            }
        },
        MuiTableHead: {
            root: {
                // backgroundColor: "aqua"
            }
        },
        MuiTableFooter: {
            root: {
                backgroundColor: "aqua",
            }
        },
        MuiTableCell: {
            root: {
                fontSize: '14px',
                lineHeight: '14px',
                color: '#404553',
                paddingTop: '0',
                paddingBottom: '0',
                backgroundColor: '#ffffff'
            },
            head: {
                borderColor: "#eef0f2",
                color: '#8c95a8',
                fontSize: '12px',
                lineHeight: '28px',
                paddingTop: '0',
                paddingBottom: '0',
            },
            body: {
                maxWidth: '200px',
                height: '49px',
                paddingTop: '7px',
                paddingBottom: '7px',
                color: '#404553',
                borderColor: "#eef0f2",
                fontSize: '14px',
                lineHeight: '15px',
            },
            footer: {
                borderColor: "#eef0f2",
                color: '#00ff00'
            },
        },
        MuiTablePagination: {
            toolbar: {
                minHeight: '30px',
                color: '#8c95a8',
                height: '36px'
            },
            actions: {
            //
            }
        },
        MuiCheckbox: {
            root: {
                padding: '5px',
            }
        }
    },
});
const ThemeDefaultAuth = createMuiTheme({
    overrides: {
        // Style sheet name ⚛️
        MuiButton: {
            // Name of the rule
            text: {
                // Some CSS
                color: '#0099dd',
            },
        },
        MuiOutlinedInput: {
            /* root: {
                 "& $notchedOutline": {
                     borderColor: "#b0b6c1"
                 },
             },*/
            input: {
                color: '#8c95a8',
                fontSize: '14px',
                padding: '15px 15px 15px 20px',
                lineHeight: '20px',
                height: '20px',
            },
        }
    },
});

export {ThemeDefault};
export {ThemeDefaultAuth};