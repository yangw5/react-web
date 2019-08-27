import React from 'react';
import { BreadcrumbCustom } from '../../widget';

function AntdUi() {
    const breadItems = [
        { title: 'antdUi库', icon: 'home' },
        { title: 'antdUi库-Form表单', icon: 'home' },
    ];
    return (
        <div>
            <BreadcrumbCustom {...{ breadItems }} />{' '}
        </div>
    );
}

export default AntdUi;
