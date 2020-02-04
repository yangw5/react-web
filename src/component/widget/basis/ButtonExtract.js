/*
 * @File:
 * @Description:抽取组件
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-04 14:23:06
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-04 14:25:43
 * @FilePath: \react-web\src\component\widget\basis\ButtonExtract.js
 */
import React from 'react';
import classnames from 'classnames';

export default ({ style, className, extractData, onClick, searchApi }) => {
    const handleExtract = () => {
        searchApi().then(res => {});
    };

    return (
        <div
            className={classnames('extract__btn flex--center text--primary', className)}
            {...{ style }}
            onClick={() => handleExtract({ ...extractData, onClick })}
        >
            抽取
        </div>
    );
};
