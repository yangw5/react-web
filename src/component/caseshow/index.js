import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import CaseShowList from './caseshowlist';

class CaseShow extends Component {
    render() {
        const breadItems = [{ title: '案例展示' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <CaseShowList />
            </div>
        );
    }
}

export default CaseShow;
