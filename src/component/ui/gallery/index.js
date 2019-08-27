import React, { Component } from 'react';
import { BreadcrumbCustom, ImgList } from '../../widget';

class Gallery extends Component {
    render() {
        const breadItems = [{ title: 'UI库', icon: 'home', herf: '/app/ui' }, { title: '画廊' }];

        return (
            <div>
                <BreadcrumbCustom {...{ separator: '>', breadItems }} />
                <ImgList />
            </div>
        );
    }
}

export default Gallery;
