import { func } from 'prop-types';
import { subnetMatch } from 'ipaddr.js';

// 抽离出相同的逻辑到父组件 自身用prototype处理自身逻辑，父组件可加入callback

//应用场景：1继承关系，2：共享行为和属性，效率。3：node

//类比：组件化开发

//享元模式+寄生组合式继承实现多角色创建

//创建一个基础角色
//基础属性
//基础权限
//设置动作 上下左右
function actor({ id, name, outside, permission, dom, picSub = 0, noa = 0 }) {
    //编号 名字 外形， 动作权限
    this.name = name;
    this.id = id;
    this.outside = outside;
    this.permission = permission;
    this.dom = dom;
    this.picSub = picSub;
    this.noa = noa;
    this.time = null;
}
actor.prototype.online = function() {
    return `我是角色-${this.name}`;
};
actor.prototype.show = function() {
    this.dom.src = this.outside[this.picSub];
};
//通过修改img的src 实现图片切换达到行走的效果
actor.prototype.walk = function() {
    if (this.picSub == this.outside.length) {
        this.picSub = 0;
    } else this.picSub++;

    this.dom.src = this.outside[this.picSub];
    this.dom.style.left = parseInt(this.dom.style.left) + 10 + 'px';
    console.log(this.dom.style.left);
    // console.log(this.dom.getBoundingClientRect());
};
actor.prototype.walking = function() {
    this.pause();
    this.time = setInterval(() => this.walk(), 500);
};
actor.prototype.pause = function() {
    clearInterval(this.time);
};

//定义继承父级的prototype的方法
function inheritProtype(sub, sup) {
    let prototype = Object.create(sup.prototype);
    prototype.constructor = sub;
    sub.prototype = prototype;

    // let f = function() {};
    // f.prototype = sup.prototype;
    // sub.prototype = new f();//用于继承父类原型上的属性和方法
    // sub.prototype.constructor = sub;
    // sub.sup = sup.constructor;
    // if (Sup.prototype.constructor === Object.prototype.constructor) {
    //     // 检测超类原型的构造器是否为原型自身
    //     Sup.prototype.constructor = Sup;
    // }
}

//创建一个升级角色
function actor1({ id, name, outside, permission, dom, fight1 }) {
    actor.call(this, { id, name, outside, permission, dom });
    this.fight1 = fight1;
}
//继承父级的prototype的方法
inheritProtype(actor1, actor);

//升级角色的方法
actor1.prototype.say = function() {
    alert(`我是二代角色-${this.name}`);
};

actor1.prototype.fight = function() {
    if (this.picSub == this.fight1.length) {
        this.picSub = 0;
    } else this.picSub++;

    this.dom.src = this.fight1[this.picSub];
    this.dom.style.left = parseInt(this.dom.style.left) + 10 + 'px';
    console.log(this.dom.style.left);
};
actor.prototype.fighting = function() {
    this.pause();
    this.time = setInterval(() => this.fight(), 500);
};

//角色池
function actorpoor(type, id, name, outside, permission, actorpoor, dom, fight1) {
    if (actorpoor[type]) return actorpoor;
    let newactor = null;
    if (type === 'actor')
        newactor = new actor({
            id,
            name,
            outside,
            permission,
            dom,
        });
    else newactor = new actor1({ id, name, outside, permission, dom, fight1 });
    // else newactor = new actor2(id, name, permission);
    actorpoor[type] = newactor;
    return actorpoor;
}

//实例化角色

function CreactActor(type, id, name, outside, permission, actorarry, dom) {
    return actorpoor(type, id, name, outside, permission, actorarry, dom);
}
function CreactActor1(type, id, name, outside, permission, actorarry, dom, fight1) {
    return actorpoor(type, id, name, outside, permission, actorarry, dom, fight1);
}
//实例化升级角色（复杂工厂模式）（而简单工厂模式 funcion(){ return new Object.creact();}）

export { CreactActor, CreactActor1 };
