import React, { Component } from 'react';
import { felsit2 } from '../../../axios';

class BaseStation extends Component {
    state = {
        data: {},
    };
    componentDidMount() {
        this.setState({
            data: 'yang5',
        });
        felsit2().then(res =>
            this.setState({
                data: res.data,
            })
        );
    }
    render() {
        return <div>{this.state.data.name}</div>;
    }
}

export default BaseStation;
