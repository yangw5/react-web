/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 16:29:14
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-27 17:28:45
 * @FilePath: \react-web\src\component\tootsshow\toolsCusrom\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom, InputSearch } from '../../widget';
import { Input } from 'antd';
import { Button } from 'antd/lib/radio';
import date from '../../classextends/Date';
class ToolsCusrom extends Component {
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
        let breadItems = [{ title: '前端工具' }, { title: '自定义工具' }];
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <div
                    style={{
                        display: 'flex',
                        // flexDirection: 'column',
                        margin: '20px',
                    }}
                >
                    <div
                        style={{
                            marginRight: '50px',
                        }}
                    >
                        时间戳：
                        <Input
                            value={this.state.data}
                            placeholder="请输入时间戳"
                            onChange={event => {
                                this.setState({
                                    data: event.target.value,
                                });
                            }}
                        />
                        转换格式：
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
                            转换文本:
                            <span style={{ color: 'red', marginLeft: '20px' }}>
                                {this.state.value}
                            </span>
                        </div>
                        <Button
                            onClick={() => {
                                this.shift();
                            }}
                        >
                            转换
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToolsCusrom;
