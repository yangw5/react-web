import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';

class Ui extends Component {
    render() {
        const breadItems = [{ title: 'UI汇总', icon: 'home' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}

export default Ui;
