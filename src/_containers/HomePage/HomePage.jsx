import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UiPackage } from '../../_components';
import { commonServices } from '../../_services';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getPackages();
    }

    render() {
        const { user, packages } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                    <ul>
                        {packages.data.map((pack, index) =>
                            <UiPackage pack={pack} key={pack.id}/>
                        )}
                    </ul>
                
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

// function mapStateToProps(state) {
//     // const { authentication, packages } = state;
    
//     // const { user } = authentication;
//     // const { packages } = packages;
//     return {
//         state.user,
//         state.packages
//     };
// }

const mapStateToProps = (state) => {
    return {
        user : state.user,
        packages : state.packages
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPackages: () => {
            dispatch(commonServices.getPackages())
        }
    }
}

const connectedHomePage = connect(mapStateToProps,mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };