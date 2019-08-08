import React from 'react';

import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import { SymphonyInput } from '../../_components/muicustomized/inputs';
import { userService } from '../../_services';

import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Link from "@material-ui/core/Link";
import {withStyles} from '@material-ui/core/styles';
import {ButtonAuth} from "../../_components/muicustomized/ButtonTypes";
import {InputAuth} from "../../_components/muicustomized/InputTypes";
import SignInLeft from "../../_components/UI/Container/SignInLeft";
import Paper from "@material-ui/core/Paper";
import SignInRight from "../../_components/UI/Container/SignInRight";

const styles = theme => ({
    root: {
        height: '100vh',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },


});

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userService.login(username, password));
        }
    }

    render() {
        const { loggingIn, classes } = this.props;
        const { username, password, submitted } = this.state;
        return (


            <Grid container component="main" className={classes.root}>
                <Grid container item={false} xs={false} sm={5} md={6}>
                    <SignInLeft/>
                </Grid>
                <Grid item xs={12} sm={7} md={6} component={Paper} elevation={6} square>
                    <div className={classes.paper} name="form" onSubmit={this.handleSubmit}>
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <form className={classes.form} noValidate>
                            <InputAuth
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="login-username-field"
                                label="Email Address"
                                name="username"
                                autoComplete="email"
                                autoFocus
                                value={username}
                                onChange={this.handleChange}
                            />
                            {submitted && !username && <div className="help-block">Username is required</div>}

                            <InputAuth
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="login-password-field"
                                type="password"
                                name= "password"
                                value={password}
                                onChange={this.handleChange}/>

                            {submitted && !password && <div className="help-block">Password is required</div>}
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Remember me"
                            />
                            <ButtonAuth
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Login
                            </ButtonAuth>

                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Having trouble logging in?
                                    </Link>
                                </Grid>
                            </Grid>
                            <br/>

                            <ButtonAuth
                                type="submit"
                                fullWidth
                                variant="outlined"
                                color="primary"
                            >
                                New to Admin? <b>&nbsp; Sign Up Here</b>
                            </ButtonAuth>

                        </form>
                    </div>
                </Grid>
            </Grid>


        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = withStyles(styles)(connect(mapStateToProps)(LoginPage));
export { connectedLoginPage as LoginPage };