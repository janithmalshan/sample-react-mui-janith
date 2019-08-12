import React from 'react';
import {Route, Router} from 'react-router-dom';
import {connect} from 'react-redux';
import UiPage from "./_components/UI/index";
import SignInSide from './_components/UI/Pages/SignIn';
import Dashboard from './_components/UI/Pages/Landing';

import {history} from './_helpers';
import {alertActions} from './_actions';
import {PrivateRoute} from './_components';
import {HomePage, PackageModulesLink, RegisterPage} from './_containers';

import {ThemeProvider} from '@material-ui/styles';
import {ThemeDefault, ThemeDefaultAuth} from './_components/UI/OverrideMui/ThemeOverride';
import CssBaseline from "@material-ui/core/CssBaseline";

class App extends React.Component {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const {alert} = this.props;
        return (
            <ThemeProvider theme={ThemeDefault}>
                <CssBaseline/>{/*CssBaseline component to kickstart an elegant, consistent, and simple baseline to build upon.*/}
                {alert.message &&
                <div className={`alert ${alert.type}`}>{alert.message}</div>
                }
                <Router history={history}>
                    <div>

                        <PrivateRoute exact path="/" component={HomePage}/>
                        <Route path="/:package" component={PackageModulesLink}/>
                        <Route path="/ui" component={UiPage}/>
                        <Route path="/dashboard" component={Dashboard}/>

                        <ThemeProvider theme={ThemeDefaultAuth}>
                            {/*Pages before the login should be inside here*/}
                            <Route path="/login" component={SignInSide}/>
                            <Route path="/register" component={RegisterPage}/>
                        </ThemeProvider>
                    </div>
                </Router>
            </ThemeProvider>
        );
    }
}

function mapStateToProps(state) {
    const {alert} = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export {connectedApp as App};