/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 09:14:13
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 09:32:27
 * @FilePath: \react-web\src\component\widget\modal\InportModal.js
 */
import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import DataModal from './DataModal';
import InportContent from './InportContent';
const InportModal = (props, ref) => {
    const dataModal = useRef();
    // const childRef = React.createRef();
    useImperativeHandle(ref, () => dataModal);
    let onSubmit = () => {
        let { _onSubmit, beforeSubmit } = props;
        //提交前
        // if (!filterData()) {
        //     return false;
        // }
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
            <InportContent />
        </DataModal>
    );
};

export default forwardRef(InportModal);
