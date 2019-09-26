import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import styles from './HeaderCustom.module.less';
import classnames from 'classnames';
import './style/index.less';
import './style/antd/index.less';
import { deleteCookie, toHtmlPage } from './utils';

const { Header } = Layout;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istitle: true,
        };
    }

    Logout() {
        deleteCookie('y5Login');
        toHtmlPage('login');
    }
    render() {
        return (
            <Layout>
                <Header className={classnames(styles['header'])}>
                    <div className={'header-logo'}>
                        <div className={'header-title'}>
                            <img
                                className={this.props.collapsed ? 'logo-img-small' : 'logo-img'}
                                src={require('./style/img/app-logo.png')}
                                alt={'图片'}
                            />
                            {!this.props.collapsed && <span className={'logo-name'}>随手记</span>}
                            <Icon
                                className={styles['trigger']}
                                type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.props.toggle}
                            />
                        </div>
                    </div>
                    <div className={`${styles['header-right']}`}>
                        <Icon
                            type="logout"
                            onClick={() => {
                                this.Logout();
                            }}
                            title={'退出'}
                        />
                    </div>
                </Header>
            </Layout>
        );
    }
}

export default HeaderCustom;
