// 抽离出相同的逻辑到父组件 自身用prototype处理自身逻辑，父组件可加入callback

//应用场景：1继承关系，2：共享行为和属性，效率。3：node

//类比：组件化开发

//创建一个基础角色
//基础属性
//基础权限
function actor(name) {
    this.name = name;
    this.getName = function() {
        return name;
    };
}

actor.prototype.say = function() {
    console.log('hello, my name is ' + this.name);
};
//创建一个升级角色
function actor2() {
    actor.apply(this, arguments);
}
//基础基础角色的方法
actor2.prototype = new actor();
