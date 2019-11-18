/*
 * @File:widget\ButtonsMaterial.js
 * @Description:用户操作按钮
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-11-18 15:27:21
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 16:25:42
 * @FilePath: \react-web\src\component\widget\ButtonsMaterial.js
 */
import React from 'react';
import './ButtonsMaterial.less';

export default ({ onSubmit, onEdit, onBack, onLog }) => {
    let btns = [
        {
            title: '编辑',
            class: '.btns_edit',
            onClick: onEdit,
        },
        {
            title: '提交',
            class: 'btns_submit',
            onClick: onSubmit,
        },
        {
            title: '取消',
            class: 'btns_reback',
            onClick: onBack,
        },
        {
            title: '日志',
            class: 'btns_log',
            onClick: onLog,
        },
    ];
    return (
        <div className={'btns'}>
            {btns.map(
                v =>
                    v.onClick && (
                        <div
                            key={v.title}
                            className={`${v.class} bntns_common`}
                            title={v.title}
                            onClick={v.onClick}
                        />
                    )
            )}
        </div>
    );
};
