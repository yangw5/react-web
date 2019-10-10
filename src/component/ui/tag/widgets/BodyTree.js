/*
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-10-10 08:43:42
 * @LastEditors: yangw5
 * @LastEditTime: 2019-10-10 10:04:06
 */
import React, { useState, useEffect } from 'react';
import TagTree from './TagTree';

export default () => {
    return (
        <div style={{ background: '#eee', padding: '10px' }}>
            {/* 头 */}
            <TagTree />

            {/* 内容 */}
        </div>
    );
};
