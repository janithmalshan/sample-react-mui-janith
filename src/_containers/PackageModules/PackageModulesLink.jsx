'use strict';

import { connect } from 'react-redux';
import PackageModules from './PackageModules';
import { commonServices } from '../../_services';


const mapStateToProps = (state, props) => {
    return {
        modules: state.modules,
    }
}

const mapDispatchToProps = dispatch => {
   return {
        getModules: (packageName) => {
            dispatch(commonServices.getModules(packageName))
        }
   } 
}

const PackageModulesLink = connect(
    mapStateToProps,
    mapDispatchToProps)(PackageModules);
    
export { PackageModulesLink };
