/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:34:18
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:23:24
 * @FilePath: \react-web\src\component\ui\Basis\widgets\index.js
 */
import React from 'react';
import Basisconfig from '../BasisStyle/config';
import BasisItem from '../BasisStyle/BasisItem.js';
import { connect } from 'react-redux';
import { receiveData } from '../../../../../reducer/action';
import { bindActionCreators } from 'redux';
import ActionRedux from '../../../../widget/basis/ActionRedux';

function FormCustomConfig(props) {
    let title = () => {
        return (
            <div
                style={{
                    padding: '10px 0px 10px 30px',
                    fontSize: '16px',
                }}
            >
                <strong style={{ paddingRight: '10px' }}> 基础组件 : </strong>
                基础组件包括基础样式组件和基础逻辑组件。其中包括；表单按钮组件，操作按钮组件，
            </div>
        );
    };
    return (
        <div>
            <div>{title()}</div>
            <div>
                {Basisconfig.map((v, i) => (
                    <ActionRedux>
                        <BasisItem {...{ ...v }} receiveData={props.receiveData} />
                    </ActionRedux>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    const { auth = { data: {} } } = state.httpData;
    return { auth };
};
const mapDispatchToProps = dispatch => ({
    receiveData: bindActionCreators(receiveData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomConfig);

// export default FormCustomConfig;
