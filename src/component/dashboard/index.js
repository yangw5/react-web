import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';

export default class DashBoard extends Component {
    render() {
        const breadItems = [{ title: '首页' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}
