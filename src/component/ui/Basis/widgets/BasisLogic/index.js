/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:34:18
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:49:57
 * @FilePath: \react-web\src\component\ui\Basis\widgets\index.js
 */
import React from 'react';
import Basisconfig from '../BasisLogic/config';
import BasisItem from '../BasisLogic/BasisItem.js';
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
                <strong style={{ paddingRight: '10px' }}> 逻辑组件 : </strong>
                用于业务代码逻辑处理，包括redux获取组件，权限组件
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
