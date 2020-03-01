/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 21:28:09
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-23 12:10:42
 * @FilePath: \react-web\src\component\ui\allinf\widget\forminfo\FormInfoItem.js
 */
import React from 'react';
import BoxInfo from '../../../../widget/BoxInfo';
import { Row, Col } from 'antd';
import { DataEdit, DataShow } from '../../../../widget';
const imgURL = require('../../../../../style/img/default.png');

const FormInfoItem = props => {
    const { edit = false, dataSorce, detailFields, destroyOnClose = true } = props;
    return (
        <div>
            <div>
                <Row style={{ height: '120px' }}>
                    <Col span={2}>
                        <div style={{ padding: '10px' }}>
                            <img alt="封面" src={imgURL} style={{ width: '100px' }} />
                        </div>
                    </Col>
                    {/* 简介*/}
                    <Col span={22} style={{ padding: '10px' }}>
                        <div
                            style={{
                                padding: '10px',
                                border: '1px solid #eee',
                                height: '100px',
                            }}
                        >
                            这是简介
                        </div>
                    </Col>
                </Row>
            </div>
            {detailFields &&
                detailFields.map(v => (
                    <BoxInfo title={v.title}>
                        {edit ? (
                            <DataEdit
                                items={v.items}
                                form={props.form}
                                data={dataSorce}
                                destroyOnClose={destroyOnClose}
                            />
                        ) : (
                            <DataShow
                                items={v.items}
                                data={dataSorce}
                                destroyOnClose={destroyOnClose}
                            />
                        )}
                    </BoxInfo>
                ))}
        </div>
    );
};
export default FormInfoItem;
