/*
 * @File:
 * @Description:自定义导航栏
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-09 17:54:04
 * @FilePath: \react-web\src\component\SiderCustom.js
 */
import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import routes from '../routes/config';
import SiderMenu from './SiderMenu';

const { Sider } = Layout;

class SiderCustom extends PureComponent {
    static getDerivedStateFromProps(props, state) {
        // 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
        //它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
        if (state.collapsed !== props.collapsed) {
            const state1 = SiderCustom.setMenuOpen(props); //url上获取导航key
            return {
                ...state1,
                firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不等时赋值props属性值否则为false
                openKey: state.openKey || state1.openKey,
            };
        }
        return null;
    }

    static setMenuOpen = props => {
        const { pathname } = props.location;
        return {
            //展开key
            openKey:
                '/' +
                pathname
                    .split('/')
                    .slice(1, 3) //copy
                    .join('/'),
            //选择key
            selectedKey:
                '/' +
                pathname
                    .split('/')
                    .slice(1, 4)
                    .join('/'),
        };
    };
    constructor(props) {
        super(props);
        this.state = {
            selectedKey: '', //点击选中的菜单
            openKey: '', //展开的菜单数组
            firstHide: true, // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
        };
    }
    componentDidMount() {
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = e => {
        this.setState({
            selectedKey: e.key,
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v.length > 0 ? v[v.length - 1] : 'null',
            firstHide: false,
        });
    };
    render() {
        let { openKey, selectedKey } = this.state;
        return (
            <Sider
                trigger={null}
                style={{
                    padding: '0px',
                    width: '35px',
                    overflowY: 'auto',
                    height: '100%',
                    background: '#ffffff',
                }}
                collapsible
                collapsed={this.props.collapsed}
                breakpoint={'xs'}
            >
                <SiderMenu
                    onClick={this.menuClick}
                    // openKeys={this.state.firstHide ? [] : [openKey]} //当前展开的 SubMenu 菜单项 key 数组
                    onOpenChange={this.openMenu} //SubMenu 展开/关闭的回调
                    selectedKeys={[selectedKey]} //当前选中的菜单项 key 数组
                    menus={routes.menus}
                    // defaultOpenKeys={['/app/frontend']}
                    theme="light"
                    mode="inline"
                    // inlineCollapsed={false}
                />
                {/* {provided.placeholder} */}
            </Sider>
        );
    }
}

export default withRouter(SiderCustom); //绑定this.props
