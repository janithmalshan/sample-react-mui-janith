// import config from 'config';
// import { authHeader } from '../_helpers';
import { requestMethods } from '../_helpers';
import { commmonConstants } from '../_constants';
import { commonActions } from '../_actions';

export const commonServices = {
    getPackages,
    getModules
    
};
function getPackages() {

    return dispatch => {
        
        requestMethods.get('appldata/package')
            .then(
                packages => { 
                    dispatch(commonActions.getPackagesComplete(packages));
                },
                error => {
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
};

function getModules(packageName) {
    
    return dispatch => {
        
        requestMethods.get('modules/list?name='+packageName)
            .then(
                modules => { 
                    dispatch(commonActions.getModulesComplete(modules));
                },
                error => {
                    // dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };
};
  
