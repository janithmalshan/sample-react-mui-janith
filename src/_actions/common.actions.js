import { commmonConstants } from '../_constants';

export const commonActions = {
    getPackagesComplete,
    getModulesComplete
    
};

function getPackagesComplete(packages) { 
    return { 
        type: commmonConstants.GET_PACKAGES, 
        payload: packages 
    } 
}

function getModulesComplete(modules) { 
    return {
        type: commmonConstants.GET_PACKAGE_MODULES,
        payload: modules 
    }
}





