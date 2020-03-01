/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 21:28:09
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-24 17:51:16
 * @FilePath: \react-web\src\component\ui\allinf\widget\forminfo\index.js
 */
import React, { useRef } from 'react';
import { Tabs } from 'antd';
import FormInfoItem from './FormInfoItem';
import { withRouter } from 'react-router-dom';
import ButtonsMaterial from '../../../../widget/basis/ButtonsMaterial';
import DrawerCustom from '../../../../widget/basis/DrawerCustom';

const { TabPane } = Tabs;

const FormInfo = props => {
    let refDrawer = useRef(null);
    const {
        tabs = [
            {
                title: '基本信息',
                key: 1,
            },
        ],
        dataSorce,
        detailFields,
        edit,
    } = props;
    let callback = () => {};
    return (
        <div>
            <Tabs defaultActiveKey="1" onChange={callback}>
                {tabs &&
                    tabs.map(v => (
                        <TabPane tab={v.title} key={v.key}>
                            <FormInfoItem
                                {...{
                                    edit,
                                    dataSorce,
                                    detailFields,
                                    form: props.form,
                                }}
                            />
                        </TabPane>
                    ))}
            </Tabs>
            <DrawerCustom ref={refDrawer}>日志</DrawerCustom>
            <ButtonsMaterial
                onSubmit={
                    edit
                        ? () => {
                              alert('提交');
                              // props.onSubmiting();
                          }
                        : false
                }
                onEdit={
                    !edit
                        ? () => {
                              props.onEditing();
                          }
                        : false
                }
                onBack={
                    edit
                        ? () => {
                              props.onBacking && props.onBacking();
                              const { history } = props;
                              history.goBack();
                          }
                        : false
                }
                onLog={() => {
                    refDrawer.current.showDrawer();
                }}
            />
        </div>
    );
};
export default withRouter(FormInfo);
