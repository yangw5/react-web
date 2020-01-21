/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-20 14:34:18
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 10:27:18
 * @FilePath: \react-web\src\component\ui\Basis\widgets\index.js
 */
import React, { useState } from 'react';
import BasisStyle from './BasisStyle';
import BasisLogic from './BasisLogic';

import { Switch } from 'antd';

function FormCustomConfig(props) {
    let [flog, setFlog] = useState(true);
    return (
        <div style={{ padding: '20px' }}>
            <Switch
                checkedChildren="样式组件"
                unCheckedChildren="逻辑组件"
                defaultChecked
                onChange={() => setFlog(!flog)}
            />
            <div style={{ marginBottom: '20px' }} />
            {flog ? <BasisStyle /> : <BasisLogic />}
        </div>
    );
}

export default FormCustomConfig;

// export default FormCustomConfig;
