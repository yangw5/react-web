import React, { Component } from 'react';
import { felsit } from '../../axios';
import { BreadcrumbCustom } from '../widget';

class FrontEnd extends Component {
    state = {
        data: {},
    };
    componentDidMount() {
        this.setState({
            data: 'yang5',
        });
        felsit().then(res =>
            this.setState({
                data: res.data,
            })
        );
    }
    render() {
        const breadItems = [{ title: '前端首页', icon: 'home' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                {this.state.data.name}
            </div>
        );
    }
}

export default FrontEnd;
