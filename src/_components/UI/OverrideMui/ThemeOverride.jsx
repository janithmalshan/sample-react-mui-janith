import React from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import GelionRegular from '../../../../styles/font/gelion-regular.woff2';
import GelionBold from '../../../../styles/font/gelion-bold.woff2';
import GelionMedium from '../../../../styles/font/gelion-medium.woff';
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
const gelionMedium = {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `
    local('Gelion'),
    local('Gelion-Medium'),
    url(${GelionMedium}) format('woff')
  `,
};
const gelionBold = {
    fontFamily: 'Gelion',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 700,
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
        text: {
            primary: variables.primaryTextColor,
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
            paper: '#fafcfe',
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
                '@font-face': [gelion, gelionMedium, gelionBold],
            },
        },
        MuiPaper: {
            root: {
                // boxShadow: "0px 6px 6px -3px rgba(0, 0, 0, 0.05), 0px 5px 10px 6px rgba(0, 0, 0, 0.03), 0px 4px 6px 3px rgba(0, 0, 0, 0.02)",
            }
        },
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgba(64, 69, 83, 0.5)',
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
        MuiTableRow: {
            root: {
                backgroundColor: '#ffffff'
            }
        },
        MuiTableCell: {
            root: {
                fontSize: '14px',
                lineHeight: '14px',
                color: variables.primaryTextColor,
                paddingTop: '0',
                paddingBottom: '0',
            },
            head: {
                borderColor: "#eef0f2",
                color: variables.secondaryTextColor,
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
                color: variables.primaryTextColor,
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
                color: variables.secondaryTextColor,
                height: '36px'
            },
            actions: {
                //
            }
        },
        MuiOutlinedInput: {
            root: {
                "& $notchedOutline": {
                    borderColor: "#b0b6c1"
                },
                "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
                    borderColor: '#8c95a8'
                },
            },
            input: {
                fontSize: '12px',
                padding: '10px 15px 9px 17px',
                lineHeight: '20px',
                height: '20px',
            },
            multiline: {
                padding: 0
            },
            inputMultiline: {
                padding: '10px 15px 9px 17px',
            }
        },
        MuiMenuItem: {
            root: {
                minHeight: 30,
                color: variables.primaryTextColor,
                fontSize: 12
            }
        },
        MuiFormControlLabel: {
            label: {
                color: variables.primaryTextColor,
                fontSize: 12
            }
        },
        MuiTabs: {
            root: {
                minWidth: 0,
                marginLeft: 1,
                minHeight: 50
            },
            indicator: {
                height: 5,
                borderRadius: 2.5,
                backgroundColor: variables.primaryColor
            }
        },
        MuiTab: {
            root: {
                textTransform: "initial",
                minWidth: 0,
                minHeight: 50,
                margin: '0 14px',
                padding: 0,
                width: 'auto',
                fontSize: "16px",
                fontWeight: '600',
                '@media (min-width: 0px)': {
                    fontSize: "16px",
                    minWidth: 0
                },
                '&$selected': {
                    color: variables.primaryColor,
                },
            },
            textColorInherit: {
                opacity: 1,
                color: variables.primaryTextColor,
            },
            labelContainer: {
                padding: 0,
            }
        },
        MuiTreeView: {
            root: {
                border: '0px solid',
            }
        },
        MuiTreeItem: {
            root: {
                margin: '5px 0'
            },
            expanded: {

                // '& content': {
                //     border: '1px solid',
                //     borderColor: '#ff0099',
                //     padding: '0px 0',
                //     borderRadius: 4
                // },
            },
            group: {
                marginLeft: 16
            },
            content: {
                border: '1px solid',
                padding: '0px 0',
                borderColor: '#eef0f2',
                borderRadius: 4,
                height: '59px',
                boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            },
            iconContainer: {
                padding: '5px'
            },
            label: {
                padding: '0 10px',
                color: variables.secondaryTextColor,
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
                color: variables.secondaryTextColor,
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