import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export const UiPackage = (props) => {
    return (
        <div>
            <Link to={'/'+props.pack.name}>
                <div>
                    {props.pack.name}
                </div>
            </Link>
        </div> 
    )
  }
 