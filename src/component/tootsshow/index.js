import React, { Component } from 'react';
import { BreadcrumbCustom } from '../widget';
import { Botton, Input } from 'antd';
import { Button } from 'antd/lib/radio';
import date from '../classextends/Date';
class ToolsShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            type: '-',
            value: '',
        };
    }
    componentDidMount() {}
    shift = () => {
        let value = date(this.state.data, this.state.type).shiftFormat();
        console.log(value);
        // date().opentime();
        this.setState({
            value: value,
        });
    };
    render() {
        let breadItems = [{ title: '前端工具' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <div
                    style={{
                        width: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        margin: '20px',
                    }}
                >
                    时间戳：{' '}
                    <Input
                        value={this.state.data}
                        placeholder="请输入时间戳"
                        onChange={event => {
                            this.setState({
                                data: event.target.value,
                            });
                        }}
                    />{' '}
                    转换格式：{' '}
                    <Input
                        value={this.state.type}
                        placeholder="请输入转换格式"
                        onChange={event => {
                            this.setState({
                                type: event.target.value,
                            });
                        }}
                    />
                    <div>
                        转换文本:<span>{this.state.value}</span>
                    </div>
                </div>
                <Button
                    onClick={() => {
                        this.shift();
                    }}
                >
                    转换
                </Button>
            </div>
        );
    }
}

export default ToolsShow;
