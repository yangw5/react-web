import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';

class Gallery extends Component {
    render() {
        const breadItems = [{ title: 'UI库', icon: 'home', herf: '/app/ui' }, { title: '画廊' }];

        return (
            <div>
                <BreadcrumbCustom {...{ separator: '>', breadItems }} />
            </div>
        );
    }
}

export default Gallery;
