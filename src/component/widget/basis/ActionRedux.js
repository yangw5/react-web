/*
 * @File:
 * @Description:获取redux的相关信息或操作redux,通过自定义组件获取store的相关属性，并传递给它的子元素
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 17:09:09
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:04:36
 * @FilePath: \react-web\src\component\widget\basis\ActionRedux.js
 */
import React from 'react';
import { connect } from 'react-redux';
import { receiveData } from '../../../reducer/action';
import { bindActionCreators } from 'redux';

class ActionRedux extends React.Component {
    render() {
        //通过 React.cloneElement 向子组件传递 state 及 function
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    store: this.props,
                })}
            </div>
        );
    }
}
const mapStateToProps = state => {
    const { auth = { data: {} } } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch),
});
//store就通过props注入到了组件中
//获取 props.auth
//使用 props.receiveData(JSON.parse(localStorage.getItem('user') || {}).permissions, 'auth');
export default connect(mapStateToProps, mapDispatchToProps)(ActionRedux);
