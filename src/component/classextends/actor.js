// 抽离出相同的逻辑到父组件 自身用prototype处理自身逻辑，父组件可加入callback

//应用场景：1继承关系，2：共享行为和属性，效率。3：node

//类比：组件化开发

//享元模式+寄生组合式继承实现多角色创建
//创建一个基础角色
//基础属性
//基础权限
function actor(id, name, permission) {
    this.name = name;
    this.id = id;
    this.permission = permission;
}
actor.prototype.online = function() {
    console.log(`欢迎${this.name}回家`);
};

//角色池
function actorpoor(type, id, name, permission, actorpoor) {
    if (actorpoor[type]) return actorpoor;
    let newactor = null;
    if (type === 'God') newactor = new actor(id, name, permission);
    else newactor = new actor2(id, name, permission);
    actorpoor[type] = newactor;
    return actorpoor;
}

function inheritProtype(sub, sup) {
    let prototype = Object.create(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;
}

//创建一个升级角色
function actor2(id, name, permission) {
    actor.apply(this, arguments);
}
inheritProtype(actor2, actor);

//基础基础角色的方法
actor2.prototype.say = function() {
    console.log(`宙斯，我是${this.name}`);
};

let actorarry = {};
actorpoor('God', '创世主', 0, 1000, [], actorarry);
actorpoor('Adam', '亚当', 1, 0, [], actorarry);
actorpoor('Eve', '夏娃', 2, 0, [], actorarry);

console.log(actorarry);
