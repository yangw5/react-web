/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-20 14:26:42
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 13:14:51
 * @FilePath: \react-web\src\component\widget\modal\DeleteModal.js
 */
import React, { useRef, useImperativeHandle, forwardRef, useState } from 'react';
import DataModal from './DataModal';
import DeleteItems from './DeleteItems';
import { types } from '@babel/core';

const DeleteModal = (props, ref) => {
    const dataModal = useRef();
    // const childRef = React.createRef();
    useImperativeHandle(ref, () => dataModal);

    const [type, setType] = useState(); //删除类型
    const [inputValue, setInpitValue] = useState(null);
    let callback = value => {
        setType(value);
    };
    let filterData = () => {
        if (!type) {
            alert(`请选择${props.title}类型`);
            return false;
        }
        if (type !== 1) {
            if (inputValue.startNo && inputValue.endNo) {
                //结合表格参数计算起始数目；
                //props.pageSize props.pageNo
                return true;
            } else {
                alert('请填写完整的序号起止数目');
                return false;
            }
        }
    };
    let setdata = value => {
        setInpitValue({
            ...inputValue,
            ...value,
        });
    };
    let onSubmit = () => {
        let { _onSubmit, beforeSubmit } = props;
        //提交前
        if (!filterData()) {
            return false;
        }
        //自定义选择：对数据做校验同时校验成功对数据进行处理后 赋值
        beforeSubmit && beforeSubmit();
        //提交
        _onSubmit && _onSubmit();
        dataModal.current._onClose();
    };
    return (
        <DataModal
            ref={dataModal}
            style={{ width: '700px' }}
            title={props.title}
            _onSubmit={onSubmit}
            _onCance={props._onCance && props._onCance}
        >
            <DeleteItems
                //父组件的状态决定子组件内部属性 还是子组件自己封装状态
                //解决 数据应该放在父组件内
                setType={setType}
                setInpitValue={setdata}
                value={type}
                title={props.title}
                callback={callback}
                customTtems={props.customTtems} //格外自定义删除选项
            />
        </DataModal>
    );
};
export default forwardRef(DeleteModal);
