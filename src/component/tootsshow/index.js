import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
class ToolsShow extends Component {
    render() {
        let breadItems = [{ title: '前端工具' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
            </div>
        );
    }
}

export default ToolsShow;