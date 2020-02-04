/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-02-04 13:40:20
 * @FilePath: \react-web\src\component\widget\basis\BreadcrumbCustom.js
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import styles from './BreadcrumbCustom.less';

const BreadcrumbItem = Breadcrumb.Item;
const BreadcrumbCustom = props => {
    const { separator = '>', breadItems } = props; //title,
    return (
        <div style={{ margin: '20px' }}>
            <Breadcrumb separator={separator}>
                {breadItems && breadItems.length > 0
                    ? breadItems.map((item, i) =>
                          item.herf ? (
                              <BreadcrumbItem key={item.title}>
                                  <Link to={item.herf} className={styles['ant-breadcrumb-link-a']}>
                                      <Icon type={item.icon} />
                                      <span>{item.title}</span>
                                  </Link>
                              </BreadcrumbItem>
                          ) : (
                              <BreadcrumbItem key={i}>{item.title}</BreadcrumbItem>
                          )
                      )
                    : ''}
            </Breadcrumb>
            {/* 其他相关显示 */}
        </div>
    );
};

export default BreadcrumbCustom;
