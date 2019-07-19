import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';

class CaseShow extends Component {
    render() {
        const breadItems = [{ title: '案例展示' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}

export default CaseShow;
