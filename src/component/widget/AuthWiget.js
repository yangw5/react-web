/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-09 17:30:19
 * @LastEditors: yangw5
 * @LastEditTime: 2020-01-17 14:14:14
 * @FilePath: \react-web\src\component\widget\AuthWiget.js
 */
/**
 * 仅用于权限的获取，并传递给父组件
 */
import React from 'react';
import { connect } from 'react-redux';

class AuthWiget extends React.Component {
    render() {
        return this.props.children(this.props.auth.data || {});
    }
}
const mapStateToProps = state => {
    const { auth = { data: {} } } = state.httpData;
    return { auth };
};
export default connect(mapStateToProps)(AuthWiget);
