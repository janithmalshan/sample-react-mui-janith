import {commmonConstants } from '../_constants/common.constants';
export function packages(state = {
    data: []
}, action) {
  switch (action.type){
      case commmonConstants.GET_PACKAGES:
        state = {
            ...state,
            data:  action.payload
        }
        
        break;
    }
    
    return state;
  };

export function modules(state = {
    data: []
}, action) {
  switch (action.type){
      case commmonConstants.GET_PACKAGE_MODULES:
        state = {
            ...state,
            data:  action.payload
        }
        
        break;
    }
    
    return state;
  };

 