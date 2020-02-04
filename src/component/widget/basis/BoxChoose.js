//框选组件
import React, { Component } from 'react';
import styles from './BoxChoose.module.less';
const _ = window._;
class BoxChoose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startX: 0,
            startY: 0,
            mouseOn: false,
            mouseup: false, //控制鼠标抬起
            mousemove: false, //是否移动
        };
        this.myflag = false; //用于记录用户是否按住ctrl
    }
    componentDidMount = () => {
        window.document.onkeydown = e => {
            if (e.ctrlKey) {
                this.myflag = true;
            }
        };
        window.document.onkeyup = e => {
            this.myflag = false;
        };
        //此事件的绑定在jsx里面进行
        // if (this.props.selectContainer) {
        //     this.props.selectContainer.onmousedown = e => {
        //         this.onmousedown(e);
        //     };
        // }
        document.onmousemove = e => {
            this.onmousemove(e);
        };
        document.onmouseup = e => {
            if (this.state.mouseup) {
                this.onmouseup(e);
            }
        };
    };
    componentDidUpdate = prevProps => {
        window.document.onkeydown = e => {
            if (e.ctrlKey) {
                this.myflag = true;
            }
        };
        window.document.onkeyup = e => {
            this.myflag = false;
        };
        // if (this.props.selectContainer) {
        //     this.props.selectContainer.onmousedown = e => {
        //         this.onmousedown(e);
        //     };
        // }
        document.onmousemove = e => {
            this.onmousemove(e);
        };
        document.onmouseup = e => {
            if (this.state.mouseup) {
                this.onmouseup(e);
            }
        };
    };
    onmousedown = e => {
        // if (this.flag) {
        //     //按住ctrl叠加框选
        //     return;
        // }

        this.clearEventBubble(e);
        this.setState({
            mouseup: true,
        });
        let _this = this;
        if (1 === e.buttons) {
            // alert('左按下');
            // _this.state.mouseOn = true;
            //document.documentElement.scrollTop：垂直方向
            _this.setState(
                {
                    mouseOn: true,
                    startX: e.clientX,
                    startY: e.clientY,
                },
                () => {
                    // 根据起始位置，添加定位 会导致父组件 子元素方法失效

                    if (_this.selectDiv.style) {
                        _this.selectDiv.style.left = _this.state.startX + 'px';
                        _this.selectDiv.style.top = _this.state.startY + 'px';
                    }
                }
            );
        }
    };
    onmousemove = e => {
        this.setState({
            mousemove: true,
        });
        // if (this.flag) return;
        if (!this.state.mouseOn) return;
        this.clearEventBubble(e);
        // 获取当前坐标
        var _x = e.clientX;
        var _y = e.clientY;
        // 根据坐标给选框修改样式
        this.selectDiv.style.left = Math.min(_x, this.state.startX) + 'px';
        this.selectDiv.style.top = Math.min(_y, this.state.startY) + 'px';
        this.selectDiv.style.width = Math.abs(_x - this.state.startX) + 'px';
        this.selectDiv.style.height = Math.abs(_y - this.state.startY) + 'px';
        // 如果需要更直观一点的话，我们还可以在这里进行对框选元素覆盖到的元素进行修改被框选样式的修改。
    };
    onmouseup = e => {
        if (this.myflag && !this.state.mousemove) return; //this.props.flag
        if (1 === e.which) {
            // alert('左抬起');
            this.onselectDiv(e);
            this.setState({
                mouseup: false,
                mousemove: false,
            });
        }
        // if (3 === e.which) {
        //     alert('右抬起');
        // }
    };
    clearEventBubble = e => {
        if (e.stopPropagation) e.stopPropagation();
        else e.cancelBubble = true;

        if (e.preventDefault) e.preventDefault();
        else e.returnValue = false;
    };
    onselectDiv = e => {
        // 获取参数
        //滚动误差
        let xdistance = document.getElementById('content').scrollTop;
        let ydistance = document.getElementById('scrollBarBox').scrollLeft || 0;
        const { mousemove } = this.state;
        const { column, choosedData, setPropsState, data } = this.props;
        //fiex定位没有offsetParent
        let l = this.selectDiv && this.getreal(this.selectDiv)[0];
        let t = this.selectDiv && this.getreal(this.selectDiv)[1];
        t += xdistance;
        l += ydistance;
        let w = this.selectDiv && this.selectDiv.offsetWidth;
        let h = this.selectDiv && this.selectDiv.offsetHeight;
        let fileDivs = document.getElementsByClassName('seletdivitem');
        let cychoosedData = [];
        let cy2choosedData = _.cloneDeep(choosedData);
        let topValue = t;
        let leftValue = l;
        let heightValue = h;
        let widthValue = w;
        //判断属于哪个外站？
        for (let i = 0; i < fileDivs.length; i++) {
            // let sr = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft;
            // let sb = fileDivs[i].offsetHeight + fileDivs[i].offsetTop;
            let childrenHeight = fileDivs[i].offsetHeight;
            let childrenWidth = fileDivs[i].offsetWidth;
            //每个li元素的位置
            let offsetLeft = this.getreal(fileDivs[i])[0];
            let offsetTop = this.getreal(fileDivs[i])[1];
            //每个li元素的宽高
            let endPositionH = childrenHeight + offsetTop;
            let endPositionW = childrenWidth + offsetLeft;
            let require1 =
                endPositionH > topValue &&
                endPositionW > leftValue &&
                endPositionH < topValue + heightValue &&
                endPositionW < leftValue + widthValue;
            //二是左上角在选择区域内
            let require2 =
                offsetTop > topValue &&
                offsetLeft > leftValue &&
                offsetTop < topValue + heightValue &&
                offsetLeft < leftValue + widthValue;
            //三是右上角在选择区域内
            let require3 =
                offsetTop > topValue &&
                offsetLeft + childrenWidth > leftValue &&
                offsetTop < topValue + heightValue &&
                offsetLeft + childrenWidth < leftValue + widthValue;
            //四是左下角在选择区域内
            let require4 =
                offsetTop + childrenHeight > topValue &&
                offsetLeft > leftValue &&
                offsetTop + childrenHeight < topValue + heightValue &&
                offsetLeft < leftValue + widthValue;
            //五选择区域在元素体内
            let require5 =
                offsetTop < topValue &&
                offsetLeft < leftValue &&
                offsetTop + childrenHeight > topValue + heightValue &&
                offsetLeft + childrenWidth > leftValue + widthValue;
            //六选择区域交集多个元素
            let require6 =
                (offsetTop < topValue &&
                    topValue < offsetTop + childrenHeight &&
                    offsetLeft < leftValue &&
                    leftValue < offsetLeft + childrenWidth) ||
                (offsetTop < topValue + heightValue &&
                    topValue + heightValue < offsetTop + childrenHeight &&
                    offsetLeft < leftValue + widthValue &&
                    leftValue + widthValue < offsetLeft + childrenWidth) ||
                (topValue < offsetTop &&
                    topValue + heightValue > offsetTop + childrenHeight &&
                    leftValue > offsetLeft &&
                    leftValue + widthValue < offsetLeft + childrenWidth) ||
                (topValue > offsetTop &&
                    topValue + heightValue < offsetTop + childrenHeight &&
                    leftValue < offsetLeft &&
                    leftValue + widthValue > offsetLeft + childrenWidth);
            if (require1 || require2 || require3 || require4 || require5 || require6) {
                //获取选中的数据
                let types = fileDivs[i].getAttribute('typeindex');
                let index = Number(fileDivs[i].getAttribute('dataindex')); //获取row index
                let objtype = column[Number(types)]; //获取属性名
                let columndata = data[index][objtype];
                let value = columndata[0];
                //ctrl 判断数据是否重复
                if (this.myflag) {
                    //this.props.flag
                    if (cy2choosedData.length > 0) {
                        let flog = true;
                        let n = -1;
                        cy2choosedData.forEach((v, i) => {
                            if (_.isEqual(v, value)) {
                                //选择一个判断是选中还是取消
                                flog = false;
                                n = i;
                            }
                        });
                        if (flog) {
                            columndata.forEach(v => cy2choosedData.push(v));
                        } else {
                            if (require5) {
                                cy2choosedData.splice(n, columndata.length);
                            }
                        }
                    } else columndata.forEach(v => cy2choosedData.push(v));
                } else {
                    if (cy2choosedData.length === 0) {
                        columndata.forEach(v => cychoosedData.push(v));
                    } else {
                        if (mousemove) {
                            columndata.forEach(v => cychoosedData.push(v));
                        } else {
                            let flog = true;
                            choosedData.forEach((v, i) => {
                                if (_.isEqual(v, value)) {
                                    //选择一个判断是选中还是取消
                                    flog = false;
                                }
                            });
                            if (flog) {
                                columndata.forEach(v => cychoosedData.push(v));
                            }
                        }
                    }
                }
            }
        }
        if (this.myflag) {
            //this.props.flag
            setPropsState({ choosedData: cy2choosedData }, () => {
                this.flag = false;
            });
            this.myflag = false;
        } else setPropsState({ choosedData: cychoosedData });
        this.clearselectDiv();
        this.clearEventBubble(e);
    };
    judgerepetition = (dataarry, data, value) => {
        let flag = true;
        dataarry.forEach((v, i) => {
            if (_.isEqual(v, value)) {
                //选择一个判断是选中还是取消
                data = [];
                flag = false;
            }
        });
        if (flag) data.push(value);
    };
    getreal = (el, pname = 'content') => {
        //获取实际位置
        // let a = document.getElementById('tabelBox');
        // console.log(document.getElementById(a));
        let left = el.offsetLeft;
        let top = el.offsetTop;
        if (el.offsetParent && el.offsetParent.getAttribute('id') !== pname) {
            //默认一致计算到body, 实际上需要根据需求(实际坐标点)进行修改, 可以用className或者id或者别的什么的, 灵活改变;
            let p = this.getreal(el.offsetParent, pname);
            left += p[0];
            top += p[1];
        }
        return [left, top];
    };
    clearselectDiv = () => {
        if (this.selectDiv) {
            this.selectDiv.style.left = '0px';
            this.selectDiv.style.top = '0px';
            this.selectDiv.style.width = '0px';
            this.selectDiv.style.height = '0px';
        }

        this.setState({
            mouseOn: false,
            startX: 0,
            startY: 0,
        });
    };
    render() {
        let { mouseOn } = this.state;
        return (
            <div
                ref={selectDiv => (this.selectDiv = selectDiv)}
                className={!mouseOn ? styles['selectdiv_hide'] : styles['selectdiv_show']}
            />
        );
    }
}

export default BoxChoose;
