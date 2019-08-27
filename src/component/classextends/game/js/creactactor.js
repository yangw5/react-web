import Actorpoor from './actorpoor';

//实例化角色 返回角色数组;
function CreactActor({ type, id, name, outside, permission, actorpoor, dom, fight1, src = '' }) {
    Actorpoor({ type, id, name, outside, permission, actorpoor, dom, fight1, src });
}

//实例化升级角色（复杂工厂模式）（而简单工厂模式 funcion(){ return new Object.creact();}）
export { CreactActor };
