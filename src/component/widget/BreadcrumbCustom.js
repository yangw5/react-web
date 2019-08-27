import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'antd';
import styles from './BreadcrumbCustom.less';

const BreadcrumbItem = Breadcrumb.Item;
const BreadcrumbCustom = props => {
    const { title, separator = '>', breadItems } = props;
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

                {/* <BreadcrumbItem>
                    <Link className={styles['ant-breadcrumb-link-a']}>
                        <Icon type="user" />
                        {title}
                    </Link>
                </BreadcrumbItem> */}
            </Breadcrumb>
        </div>
    );
};

export default BreadcrumbCustom;
