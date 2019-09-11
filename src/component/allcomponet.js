/**
 * @default 组件汇总
 */

import FrontEnd from './frontend';
import ToolsShow from './tootsshow';
import BaseStation from './frontend/basestation';
import CaseShow from './caseshow';
import Uis from './ui';
import Gallery from './ui/gallery';
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

export default {
    FrontEnd,
    BaseStation,
    ToolsShow,
    D3,
    Echars,
    CaseShow,
    DashBoard,
    Uis,
    Gallery,
    Gameshow,
    AntdUi,
    AntdForm,
    Y5tool,
    AccountBook,
};
