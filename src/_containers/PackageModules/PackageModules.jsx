import React, { Component } from 'react';
import { UiModule } from '../../_components';

class PackageModules extends Component {
    state = {  }

    constructor(props) {
        super(props);
        this.state = {
            packageName: props.match.params.package,
        };
    }

    componentDidMount() {
        this.init()
    }
    
    init(){
        this.props.getModules(this.state.packageName);
    }

    render() { 
        return ( 

            <ul>
                {this.props.modules.data.map((module, index) =>
                    <UiModule module={module} key={module.id}/>
                )}
            </ul>
        );
    }
}
 
export default PackageModules;