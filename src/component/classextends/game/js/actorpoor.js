import { actor, actor1, Monster } from '../actor';

//角色池
function actorpoor({ type, id, name, outside, permission, actorpoor, dom, fight1, src }) {
    let onlyone = ['actor', 'actor1']; //单例模式
    if (actorpoor[type] && onlyone.includes(type)) return actorpoor;
    let newactor = null;
    switch (type) {
        case 'actor':
            newactor = new actor({
                id,
                name,
                outside,
                permission,
                dom,
                src,
            });
            break;
        case 'actor1':
            newactor = new actor1({
                id,
                name,
                outside,
                permission,
                dom,
                fight1,
                src,
            });
            break;
        case 'monster':
            newactor = new Monster({
                id,
                name,
                outside,
                permission,
                dom,
                src,
            });
            break;
            default:
    }
    if (actorpoor[type] instanceof Array) actorpoor[type].push(newactor);
    else {
        if (onlyone.includes(type)) {
            actorpoor[type] = newactor;
        } else {
            actorpoor[type] = [];
            actorpoor[type].push(newactor);
        }
    }
    return actorpoor;
}

export default actorpoor;
