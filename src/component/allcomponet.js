/*
 * @File:component\allcomponet.js
 * @Description:路由组件汇总
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2019-08-26 08:22:55
 * @LastEditors: yangw5
 * @LastEditTime: 2019-11-18 17:51:46
 * @FilePath: \react-web\src\component\allcomponet.js
 */
import FrontEnd from './frontend';
import ToolsShow from './tootsshow';
import BaseStation from './frontend/basestation';
import CaseShow from './caseshow';
import Uis from './ui';
import Datado from './ui/datado';
import Gallery from './ui/gallery';
import TagTree from './ui/tag';
import DashBoard from './dashboard';
import Gameshow from './caseshow/gameshow/Gameshow';
import AntdUi from './antdUi';
import AntdForm from './antdUi/antdform/AntdForm';
// export { default as D3 } from './datashow/d3';
// export { default as Echars } from './datashow/echars';
import D3 from './datashow/d3';
import Echars from './datashow/echars';

import Y5tool from './y5tool/index';
import AccountBook from './y5tool/account/AccountBook';

import CommonList from './common/commonList';
import commonshow from './common/commonshow';
import commonEdit from './common/commonEdit';

export default {
    FrontEnd,
    BaseStation,
    ToolsShow,
    D3,
    Echars,
    CaseShow,
    DashBoard,
    Uis,
    Datado,
    Gallery,
    TagTree,
    Gameshow,
    AntdUi,
    AntdForm,
    Y5tool,
    AccountBook,
    CommonList,
    commonshow,
    commonEdit,
};
