/**
 * 用于权限的验证
 */
import React from 'react';
import AuthWiget from './AuthWiget';
import { checkAuth } from '../../utils';
export default ({ children, requirement, every }) => (
    <AuthWiget
        children={permissions => (checkAuth(permissions, requirement, every) ? children : null)}
    />
);
