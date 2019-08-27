import React, { Component } from 'react';
import { Menu, Dropdown, Input } from 'antd';
let { Search } = Input;
class InputSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: '',
        };
    }
    componentDidMount() {
        this.setmenu();
    }
    setmenu = () => {
        let menudata = (
            <Menu>
                <Menu.Item>搜索数据1</Menu.Item>
                <Menu.Item>搜索数据2</Menu.Item>
                <Menu.Item>搜索数据3</Menu.Item>
            </Menu>
        );
        this.setState({
            menu: menudata,
        });
    };
    render() {
        let { menu } = this.state;
        return (
            <div>
                <Dropdown overlay={menu}>
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{ width: 200 }}
                    />
                </Dropdown>
            </div>
        );
    }
}
export default InputSearch;
