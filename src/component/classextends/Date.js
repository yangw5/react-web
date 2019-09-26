//通过原型为Date新增加一个日期转换的方法
function newdate(value = '', type = '-', hasTime = false) {
    let data = value ? new Date(value * 1000) : new Date();
    console.log('原型链实例：start');
    console.log(data.__proto__);
    // Date.prototype.opentime = () => {
    //     alert(new Date());
    // };
    data.__proto__.shiftFormat = () => {
        let _hour = data.getHours();
        let _minute = data.getMinutes();
        let _second = data.getSeconds();
        let _year = data.getFullYear();
        let _month = data.getMonth();
        let _day = data.getDate();
        if (_hour < 10) {
            _hour = '0' + _hour;
        }
        if (_minute < 10) {
            _minute = '0' + _minute;
        }

        if (_second < 10) {
            _second = '0' + _second;
        }
        _month = _month + 1;

        if (_month < 10) {
            _month = '0' + _month;
        }

        if (_day < 10) {
            _day = '0' + _day;
        }
        return (
            _year +
            type +
            _month +
            type +
            _day +
            (hasTime ? '' + type + _hour + type + _minute + type + _second : '')
        );
    };
    console.log('原型链实例：end');
    console.log(data.__proto__);
    return data;
}

export default newdate;
