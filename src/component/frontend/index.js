import React, { Component } from 'react';
import { felsit } from '../../axios';

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
        return <div>{this.state.data.name}</div>;
    }
}

export default FrontEnd;
