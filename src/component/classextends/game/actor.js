import { setdo } from './js/actions';

// 抽离出相同的逻辑到父组件 自身用prototype处理自身逻辑，父组件可加入callback

//应用场景：1继承关系，2：共享行为和属性，效率。3：node

//类比：组件化开发

//享元模式+寄生组合式继承实现多角色创建
/**
 *
 * @function {*} actor 基础角色
 */
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
    this.config = {};
    this.time = null;
}
//初始化
actor.prototype.init = function(e) {
    //此时 setdata的this是Window
    let _this = this;
    window.addEventListener('keydown', e => {
        this.setdata(e);
    });
    this.show();
};
//e按键KeyboardEvent对象 ()=>{}保存this指向 h还是window
actor.prototype.setdata = function(e) {
    //设置按键属性
    let walking = this.walking.bind(this);
    let online = this.online.bind(this);
    // let online = this.online.call(this);
    // let online = this.online.apply(this);
    let config = {
        39: walking,
        69: online,
    };
    setdo(e, config);
};
//角色上线
actor.prototype.online = function() {
    alert(`我是角色-${this.name}`);
};
//角色显示
actor.prototype.show = function() {
    this.dom.src = this.outside[this.picSub];
};
//通过修改img的src 实现图片切换达到行走的效果
//行为 行走
actor.prototype.walk = function() {
    if (this.picSub == this.outside.length) {
        this.picSub = 0;
    } else this.picSub++;

    this.dom.src = this.outside[this.picSub];
    this.dom.style.left = parseInt(this.dom.style.left) + 20 + 'px';
    console.log(this.dom.style.left);
    // console.log(this.dom.getBoundingClientRect());
};
actor.prototype.walking = function() {
    console.log(this);
    this.pause();
    this.time = setInterval(() => this.walk(), 500);
};
//行为 暂停
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
/**
 *
 * @function {*} actor1 角色版本1.0
 */
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
//行为 攻击
actor1.prototype.fight = function() {
    if (this.picSub == this.fight1.length) {
        this.picSub = 0;
    } else this.picSub++;

    this.dom.src = this.fight1[this.picSub];
    this.dom.style.left = parseInt(this.dom.style.left) + 10 + 'px';
    console.log(this.dom.style.left);
};
actor1.prototype.fighting = function() {
    this.pause();
    this.time = setInterval(() => this.fight(), 500);
};

/**
 *
 * @function {*} Monster 怪兽角色1.0
 */
function Monster({ id, name, outside, permission, dom }) {
    actor.call(this, { id, name, outside, permission, dom });
}
//继承父级基础角色的prototype的方法
inheritProtype(Monster, actor);

//暴露对象
export { actor, actor1, Monster };
