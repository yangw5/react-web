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
                firstHide: state.collapsed !== props.collapsed && props.collapsed, // 两个不登时赋值props属性值否则为false
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
            selectedKey: '',
            openKey: '',
            firstHide: true,
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
            openKey: v[v.length - 1],
            firstHide: false,
        });
    };
    render() {
        return (
            <Sider
                trigger={null}
                style={{ padding: '0px', width: '35px', overflowY: 'auto' }}
                collapsible
                collapsed={this.props.collapsed}
            >
                <SiderMenu
                    onClick={this.menuClick}
                    openKeys={this.state.firstHide ? null : [this.state.openKey]}
                    onOpenChange={this.openMenu}
                    selectedKeys={[this.state.selectedKey]}
                    menus={routes.menus}
                />
            </Sider>
        );
    }
}

export default withRouter(SiderCustom); //绑定this.props
