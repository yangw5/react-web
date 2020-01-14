/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-08 15:32:01
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-09 18:02:31
 * @FilePath: \react-web\src\component\header\index.js
 */
import React, { Component } from 'react';
import { Layout, Icon, Input, Select, AutoComplete } from 'antd';
import classnames from 'classnames';
import screenfull from 'screenfull';
import styles from './HeaderCustom.module.less';
const Option = Select.Option;
const InputGroup = Input.Group;
const { Header } = Layout;

class HeaderCustom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            istitle: true,
            type: '',
            children: [],
        };
    }
    //搜索类型选择
    handleChange = value => {
        this.setState({
            type: value,
        });
    };
    //搜索下拉列表显示
    handleSearch = value => {
        let { type } = this.state;
        let { searchApi, searchOption, searchOptionDom } = this.props.config.search;
        let children = [];
        if (searchOptionDom) {
            //自定义显示样式
        } else {
            //默认显示样式
            children = searchApi({ type, value: value }).map((v, i) => (
                <Option title={v[searchOption.key]} key={v[searchOption.key]}>
                    {searchOption.OptionItem.map((item, i) =>
                        i !== searchOption.OptionItem.length - 1
                            ? v[item] + (searchOption.link ? searchOption.link : '-')
                            : v[item]
                    )}
                </Option>
            ));
        }
        this.setState({ children });
        // searchApi({ type, value: value }).then(res => {
        //     children = res.data.list.map((v, i) => <Option title={v.id}>{v.name}</Option>);
        // });
    };
    //点击搜索的下拉列表
    onSelect = value => {
        let { selectApi } = this.props.config.search;
        selectApi(value);
        // selectApi(value).then(res => {
        //     console.log(res);
        // });
    };
    //搜索框定义
    searchDom = () => {
        let { search } = this.props.config;
        let { type, children } = this.state;
        return (
            <div className={styles['header-right__search']}>
                <InputGroup compact>
                    <Select
                        value={type}
                        onChange={value => {
                            search.callback && search.callback();
                            this.handleChange(value);
                        }}
                    >
                        {search.slectOption.map(v => (
                            <Option key={v.value} value={v.value}>
                                {v.name}
                            </Option>
                        ))}
                    </Select>
                    <AutoComplete
                        onSearch={this.handleSearch}
                        onSelect={this.onSelect}
                        optionLabelProp="title"
                        labelInValue
                        placeholder={'请输入需要查询的字段'}
                    >
                        {children}
                    </AutoComplete>
                </InputGroup>
            </div>
        );
    };
    //全屏
    screenFull = () => {
        if (screenfull.enabled) {
            screenfull.request();
        }
    };
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
