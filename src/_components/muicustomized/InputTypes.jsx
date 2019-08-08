import {styled} from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

const InputDefault = styled(TextField)({
    padding: '10px',
    height: 48,
});

const InputAuth = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
    input: {
        borderRadius: 4,
        border: '1px solid #ced4da',
        fontSize: '20px',
        width: 'auto',
        padding: '0px 12px',
    },
})(TextField);

export {InputDefault};
export {InputAuth};

