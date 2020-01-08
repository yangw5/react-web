/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-08 15:32:01
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-08 18:09:15
 * @FilePath: \react-web\src\component\header\index.js
 */
import React, { Component } from 'react';
import { Layout, Icon, Input, Select, AutoComplete } from 'antd';
import classnames from 'classnames';
import styles from './header.module.less';
const Option = Select.Option;
const InputGroup = Input.Group;
const { Header } = Layout;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istitle: true,
        };
    }
    searchDom = () => (
        <div className={styles['header-right__search']}>
            <InputGroup compact>
                <Select value={this.state.type} onChange={this.handleChange}>
                    <Option value="artist">条件1</Option>
                    <Option value="song">条件2</Option>
                    <Option value="album">条件3</Option>
                    <Option value="mv">条件4</Option>
                    <Option value="playlist">条件5</Option>
                    <Option value="speclib">条件6</Option>
                    <Option value="fingerprint">条件7</Option>
                </Select>
                <AutoComplete
                    onSearch={this.handleSearch}
                    onSelect={this.onSelect}
                    optionLabelProp="title"
                    labelInValue
                    placeholder={'请输入需要查询的字段'}
                >
                    {this.state.children}
                </AutoComplete>
            </InputGroup>
        </div>
    );
    render() {
        let { config, collapsed, toggle } = this.props;
        return (
            <Layout>
                <Header className={classnames(styles['header'])}>
                    <div className={'header-logo'}>
                        <div className={'header-title'}>
                            {/* <img
                                className={this.props.collapsed ? 'logo-img-small' : 'logo-img'}
                                src={this.config.logo ? this.config.fullName :require('./style/img/app-logo.png')}
                                alt={'图片'}
                            /> */}
                            {!collapsed && <span className={'logo-name'}>{config.fullName}</span>}
                            <Icon
                                className={styles['trigger']}
                                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={toggle}
                            />
                        </div>
                    </div>
                    <div className={styles['header-conter']}>
                        {config.search && this.searchDom()}
                    </div>
                    <div className={styles['header-right']}>
                        {config.icon &&
                            config.icon.map((v, i) =>
                                v.render ? (
                                    <div className={styles['header-right-icon']}>{v.render()}</div>
                                ) : (
                                    <Icon
                                        key={i}
                                        className={styles['header-right-icon']}
                                        type={v.type}
                                        title={v.title}
                                        onClick={() => {
                                            v.actions.onclick && v.actions.onclick();
                                        }}
                                    />
                                )
                            )}
                    </div>
                </Header>
            </Layout>
        );
    }
}

export default HeaderCustom;
