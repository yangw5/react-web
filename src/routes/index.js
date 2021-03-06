/*
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-27 16:26:04
 * @LastEditors: yangw5
 * @LastEditTime: 2019-08-27 16:26:04
 */
import React, { Component } from 'react';
import allcomponent from '../component/allcomponet';
import routesconfig from './config';
import queryString from 'query-string'; //获取格式化url参数
import { Route, Redirect, Switch } from 'react-router-dom';
import DocumentTitle from 'react-document-title'; //组件
import { getCookie, toHtmlPage } from '../utils';

export default class RootRouter extends Component {
    //登录判断
    requireLogin = component => {
        if (!getCookie('y5Login')) {
            return toHtmlPage('login');
        }
        //权限判断
        return component;
    };

    render() {
        return (
            <Switch>
                {Object.keys(routesconfig).map(key =>
                    routesconfig[key].map(r => {
                        const route = r => {
                            const Component = allcomponent[r.component];
                            return (
                                <Route
                                    key={r.route}
                                    exact
                                    path={r.key}
                                    render={props => {
                                        //获取url参数
                                        const match = window.location.hash.match(/\?\S*/g);
                                        //去除?的参数
                                        Object.keys(props.match.params).forEach(key => {
                                            props.match.params[key] =
                                                props.match.params[key] &&
                                                props.match.params[key].replace(/\?\S*/g, '');
                                        });
                                        Object.assign(props, {
                                            query: match
                                                ? {
                                                      ...queryString.parse(
                                                          decodeURIComponent(match[0])
                                                      ), //转换为json对象
                                                  }
                                                : {},
                                        });
                                        const wrappedComponent = (
                                            // 重新包装组件 浏览器title设置
                                            <DocumentTitle title={r.title}>
                                                <Component {...props} />
                                            </DocumentTitle>
                                        );
                                        return r.login
                                            ? wrappedComponent
                                            : this.requireLogin(wrappedComponent);
                                    }}
                                />
                            );
                        };
                        return r.component ? route(r) : r.subs.map(r => route(r));
                    })
                )}
                <Route render={() => <Redirect to="404" />} />
            </Switch>
        );
    }
}
