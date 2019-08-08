import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const UiModule = (props) => {
    return (
        <div>
            <p1>{props.module.name}</p1>
        </div> 
    )
    
  }