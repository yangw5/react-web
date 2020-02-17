/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-05 16:26:35
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-05 16:35:58
 * @FilePath: \react-web\src\component\widget\basis\MaxHeight.js
 */
import React, { useEffect, useState } from 'react';
import { Popover } from 'antd';
export default ({ maxHeight = 55, popContainer, children }) => {
    let [showMore, setShowMore] = useState(false);
    useEffect(() => {
        if (this.div) {
            if (this.div.scrollHeight > this.props.maxHeight) {
                setShowMore(true);
            }
        }
    }, []);
    return (
        <div style={{ maxHeight }} ref={div => (this.div = div)}>
            {children && children}
            {showMore && (
                <Popover
                    placement="bottomLeft"
                    content={<div className={'popover__container'}>{children}</div>}
                    title="Title"
                    trigger="click"
                    getPopupContainer={() => popContainer || document.getElementById('bench_table')}
                >
                    <a className={'max__more'} href="/">
                        ...查看更多
                    </a>
                </Popover>
            )}
        </div>
    );
};
