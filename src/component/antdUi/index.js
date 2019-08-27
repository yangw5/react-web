import React from 'react';
import { BreadcrumbCustom } from '../widget';

function AntdUi() {
    const breadItems = [{ title: 'antd Ui库', icon: 'home' }];
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />
        </div>
    );
}

export default AntdUi;
