import { actor, actor1, Monster } from '../actor';
import { of } from 'rxjs';

//角色池
function actorpoor({ type, id, name, outside, permission, actorpoor, dom, fight1 }) {
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
            });
            break;
        case 'monster':
            newactor = new Monster({
                id,
                name,
                outside,
                permission,
                dom,
            });
            break;
    }
    if (actorpoor[type] instanceof Array) actorpoor[type].push(newactor);
    else actorpoor[type] = actorpoor;
    return actorpoor;
}

export default actorpoor;
